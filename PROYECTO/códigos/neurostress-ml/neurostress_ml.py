"""
Pipeline completo de ML para detección de estrés cognitivo
a partir de señales ECG y EDA capturadas con BITalino, como proyecto de curso.
  Construir el dataset de features a partir de sessions_config.csv
  python neurostress_ml.py build --config sessions_config.csv --window 60 --overlap 0.5 --drop-freq

  Entrenar el modelo con el dataset ya construido
  python neurostress_ml.py train --data data/processed/dataset.csv --model rf
"""

import argparse
import json
import os
import re

import numpy as np
import pandas as pd
import joblib
from scipy import signal, interpolate
from sklearn.model_selection import LeaveOneGroupOut
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, confusion_matrix



# 1. LECTURA DE ARCHIVOS 

VCC = 3.3        
GECG = 1100.0    

def _read_header(filepath):
    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        lines = [next(f) for _ in range(3)]

    header_json = None
    for line in lines:
        if line.startswith("#") and "{" in line:
            json_str = line.lstrip("#").strip()
            try:
                header_json = json.loads(json_str)
            except json.JSONDecodeError:
                json_str = re.sub(r"'", '"', json_str)
                header_json = json.loads(json_str)
            break

    if header_json is None:
        raise ValueError(f"No se encontró la cabecera JSON de OpenSignals en {filepath}")

    device_key = list(header_json.keys())[0]
    return header_json[device_key]


def _adc_to_ecg_mv(adc, n_bits=10):
    """Conversión oficial BITalino: ECG(mV) = ((ADC/2^n - 1/2) * VCC / GECG) * 1000."""
    adc = np.asarray(adc, dtype=float)
    volts = (adc / (2**n_bits) - 0.5) * VCC / GECG
    return volts * 1000.0


def _adc_to_eda_us(adc, n_bits=10):
    """Conversión oficial BITalino: EDA(µS) = ((ADC/2^n) * VCC) / 0.12."""
    adc = np.asarray(adc, dtype=float)
    return ((adc / (2**n_bits)) * VCC) / 0.12


def load_bitalino_txt(filepath):
    """
    Carga un archivo .txt de OpenSignals y devuelve:
    df: DataFrame con columnas "t" (segundos), "ecg_mv", "eda_us"
    meta: dict con sampling_rate, columnas detectadas y duración

     "ECGBIT", "EDABITREV" (canales del ecg y el eda) -> se busca por substring.
    """
    meta_raw = _read_header(filepath)
    sampling_rate = meta_raw.get("sampling rate", 1000)
    columns = meta_raw.get("column")
    sensors = meta_raw.get("sensor", [])
    resolution = meta_raw.get("resolution", [])

    n_analog = len(sensors) if sensors else 2
    if not columns:
        columns = ["nSeq", "I1", "I2", "O1", "O2"] + [f"A{i+1}" for i in range(n_analog)]

    raw = pd.read_csv(filepath, sep="\t", comment="#", header=None)
    if raw.shape[1] < len(columns):
        raise ValueError(
            f"El archivo {filepath} tiene menos columnas de datos ({raw.shape[1]}) "
            f"que las declaradas en la cabecera ({len(columns)}: {columns})."
        )
    df_raw = raw.iloc[:, : len(columns)].copy()
    df_raw.columns = columns

    analog_cols = [c for c in columns if str(c).startswith("A")]

    sensor_to_col = {}
    for i, sensor_name in enumerate(sensors):
        name_upper = str(sensor_name).upper()
        if i >= len(analog_cols):
            continue
        if "ECG" in name_upper:
            sensor_to_col["ECG"] = analog_cols[i]
        elif "EDA" in name_upper:
            sensor_to_col["EDA"] = analog_cols[i]

    ecg_col = sensor_to_col.get("ECG")
    eda_col = sensor_to_col.get("EDA")
    if ecg_col is None or eda_col is None:
        raise ValueError(
            f"No se encontraron canales ECG y EDA en {filepath}. "
            f"Sensores detectados: {sensors}. Columnas analógicas: {analog_cols}."
        )

    res_map = {}
    if resolution and len(resolution) >= len(columns):
        res_map = dict(zip(columns, resolution))
    n_ecg = res_map.get(ecg_col, 10)
    n_eda = res_map.get(eda_col, 10)

    ecg_mv = _adc_to_ecg_mv(df_raw[ecg_col].values, n_ecg)
    eda_us = _adc_to_eda_us(df_raw[eda_col].values, n_eda)

    meta = {
        "sampling_rate": sampling_rate,
        "ecg_col": ecg_col,
        "eda_col": eda_col,
        "n_samples": len(df_raw),
        "duration_s": len(df_raw) / sampling_rate,
    }
    df = pd.DataFrame({
        "t": np.arange(len(df_raw)) / sampling_rate,
        "ecg_mv": ecg_mv,
        "eda_us": eda_us,
    })
    return df, meta


# 2. PREPROCESAMIENTO: 
# FILTRADO ECG + DETECCIÓN DE PICOS R, EDA TÓNICA/FÁSICA

def filter_ecg(ecg, fs, low=0.5, high=40.0, order=4):
    """Filtro pasa-banda Butterworth:para conservar el complejo QRS."""
    nyq = fs / 2
    b, a = signal.butter(order, [low / nyq, high / nyq], btype="band")
    return signal.filtfilt(b, a, ecg)


def detect_r_peaks(ecg_filtered, fs):
    """Detección de picos R (inspirada en Pan-Tompkins, simplificada):
    derivada -> cuadrado -> integración por ventana móvil -> find_peaks."""
    diff = np.diff(ecg_filtered, prepend=ecg_filtered[0])
    squared = diff**2
    window_size = int(0.12 * fs)
    integrated = np.convolve(squared, np.ones(window_size) / window_size, mode="same")

    min_distance = int(fs * 60 / 200)  # no permitir > 200 BPM
    threshold = np.mean(integrated) + 0.5 * np.std(integrated)
    peaks, _ = signal.find_peaks(integrated, distance=min_distance, height=threshold)

    #buscamos el máximo real de la señal filtrada cerca de cada pico
    refined = []
    search_w = int(0.05 * fs)
    for p in peaks:
        lo, hi = max(0, p - search_w), min(len(ecg_filtered), p + search_w)
        refined.append(lo + int(np.argmax(ecg_filtered[lo:hi])))
    return np.array(sorted(set(refined)))


def rr_intervals_ms(r_peaks, fs):
    """Intervalos R-R en milisegundos."""
    if len(r_peaks) < 2:
        return np.array([])
    return np.diff(r_peaks) / fs * 1000.0


def decompose_eda(eda, fs, tonic_cutoff=0.05):
    """Separa EDA cruda en tónica (SCL, pasa-bajos) y fásica (SCR, resta)."""
    nyq = fs / 2
    b, a = signal.butter(2, tonic_cutoff / nyq, btype="low")
    tonic = signal.filtfilt(b, a, eda)
    phasic = eda - tonic
    return tonic, phasic


def detect_scr_peaks(phasic, fs, min_amplitude=0.02, min_distance_s=1.0):
    """Detecta respuestas fásicas (SCRs) en la componente fásica de EDA."""
    min_distance = int(min_distance_s * fs)
    peaks, props = signal.find_peaks(phasic, height=min_amplitude, distance=min_distance)
    amplitudes = props["peak_heights"] if len(peaks) else np.array([])
    return peaks, amplitudes


# 3. EXTRACCIÓN DE FEATURES: HRV (TIEMPO Y FRECUENCIA) + EDA

_trapz = getattr(np, "trapezoid", None) or np.trapz  # compat numpy >= 2.0

FEATURE_NAMES = [
    "mean_rr", "sdnn", "rmssd", "pnn50", "mean_hr",
    "lf", "hf", "lf_hf_ratio",
    "scl_mean", "scl_std", "scr_count", "scr_rate_per_min",
    "scr_mean_amplitude", "phasic_std",
]


def hrv_time_domain(rr_ms):
    if len(rr_ms) < 2:
        return {"mean_rr": np.nan, "sdnn": np.nan, "rmssd": np.nan, "pnn50": np.nan, "mean_hr": np.nan}
    diff_rr = np.diff(rr_ms)
    nn50 = np.sum(np.abs(diff_rr) > 50)
    return {
        "mean_rr": np.mean(rr_ms),
        "sdnn": np.std(rr_ms, ddof=1) if len(rr_ms) > 1 else 0.0,
        "rmssd": np.sqrt(np.mean(diff_rr**2)) if len(diff_rr) else 0.0,
        "pnn50": (nn50 / len(diff_rr) * 100) if len(diff_rr) else 0.0,
        "mean_hr": 60000.0 / np.mean(rr_ms) if np.mean(rr_ms) > 0 else 0.0,
    }


def hrv_freq_domain(rr_ms, r_peak_times_s, fs_interp=4.0): #aunque tiene mayor valor el hrv en el dominio del tiempo por eltamaño de muestras
    """Interpola el tacograma RR y calcula potencia en bandas LF (0.04-0.15Hz)
    y HF (0.15-0.4Hz) mediante Welch (Task Force ESC 1996)."""
    if len(rr_ms) < 4:
        return {"lf": np.nan, "hf": np.nan, "lf_hf_ratio": np.nan}

    rr_times = r_peak_times_s[1: 1 + len(rr_ms)]
    f_interp = interpolate.interp1d(rr_times, rr_ms, kind="cubic", fill_value="extrapolate")
    t_uniform = np.arange(rr_times[0], rr_times[-1], 1 / fs_interp)
    rr_uniform = f_interp(t_uniform)
    rr_uniform = rr_uniform - np.mean(rr_uniform)

    freqs, psd = signal.welch(rr_uniform, fs=fs_interp, nperseg=min(256, len(rr_uniform)))
    lf_band = (freqs >= 0.04) & (freqs < 0.15)
    hf_band = (freqs >= 0.15) & (freqs < 0.4)
    lf_power = _trapz(psd[lf_band], freqs[lf_band]) if lf_band.any() else 0.0
    hf_power = _trapz(psd[hf_band], freqs[hf_band]) if hf_band.any() else 0.0
    return {
        "lf": lf_power,
        "hf": hf_power,
        "lf_hf_ratio": (lf_power / hf_power) if hf_power > 0 else np.nan,
    }


def eda_features(tonic, phasic, scr_peaks, scr_amplitudes, window_duration_s):
    scr_rate = len(scr_peaks) / (window_duration_s / 60.0)
    return {
        "scl_mean": np.mean(tonic),
        "scl_std": np.std(tonic),
        "scr_count": len(scr_peaks),
        "scr_rate_per_min": scr_rate,
        "scr_mean_amplitude": np.mean(scr_amplitudes) if len(scr_amplitudes) else 0.0,
        "phasic_std": np.std(phasic),
    }


def extract_window_features(rr_ms, r_peak_times_s, tonic, phasic, scr_peaks, scr_amplitudes, window_duration_s):
    feats = {}
    feats.update(hrv_time_domain(rr_ms))
    feats.update(hrv_freq_domain(rr_ms, r_peak_times_s))
    feats.update(eda_features(tonic, phasic, scr_peaks, scr_amplitudes, window_duration_s))
    return {k: feats.get(k, np.nan) for k in FEATURE_NAMES}


# 4. CONSTRUCCIÓN DEL DATASET (se hace un ventaneo)

def process_segment(df_signal, fs, start_s, end_s, window_s, overlap):
    """aqui generamos las ventanas y extraemos los features"""
    step_s = window_s * (1 - overlap)
    rows = []
    t = start_s
    while t + window_s <= end_s:
        seg = df_signal[(df_signal["t"] >= t) & (df_signal["t"] < t + window_s)]
        if len(seg) < window_s * fs * 0.8:
            t += step_s
            continue

        ecg_filtered = filter_ecg(seg["ecg_mv"].values, fs)
        r_peaks = detect_r_peaks(ecg_filtered, fs)
        rr_ms = rr_intervals_ms(r_peaks, fs)
        r_peak_times_s = r_peaks / fs

        tonic, phasic = decompose_eda(seg["eda_us"].values, fs)
        scr_peaks, scr_amps = detect_scr_peaks(phasic, fs)

        feats = extract_window_features(rr_ms, r_peak_times_s, tonic, phasic, scr_peaks, scr_amps, window_s)
        feats["window_start_s"] = t
        rows.append(feats)
        t += step_s
    return rows


def build_dataset(config_path, window_s, overlap, out_path, drop_freq):
    config = pd.read_csv(config_path)
    has_time_cols = "start_s" in config.columns and "end_s" in config.columns

    cache = {}
    for filepath in config["filepath"].unique():
        print(f"Cargando {filepath} ...")
        df_signal, meta = load_bitalino_txt(filepath)
        cache[filepath] = (df_signal, meta["sampling_rate"], meta["duration_s"])

    all_rows = []
    for _, row in config.iterrows():
        df_signal, fs, file_duration_s = cache[row["filepath"]]
        if has_time_cols and not pd.isna(row.get("start_s")) and not pd.isna(row.get("end_s")):
            start_s, end_s = row["start_s"], row["end_s"]
        else:
            start_s, end_s = 0.0, file_duration_s  # 1 archivo por fase: usar el archivo completo

        print(f"  -> {row['participant']} / {row['phase']} [{start_s}s - {end_s}s] label={row['label']}")
        window_rows = process_segment(df_signal, fs, start_s, end_s, window_s, overlap)
        for w in window_rows:
            w["participant"] = row["participant"]
            w["phase"] = row["phase"]
            w["label"] = row["label"]
        all_rows.extend(window_rows)

    dataset = pd.DataFrame(all_rows)
    feature_cols = FEATURE_NAMES
    if drop_freq:
        feature_cols = [c for c in FEATURE_NAMES if c not in ("lf", "hf", "lf_hf_ratio")]
        print("\n--drop-freq activo: se excluyen lf, hf, lf_hf_ratio del dataset final.")
    dataset = dataset[["participant", "phase", "label", "window_start_s"] + feature_cols].dropna()

    os.makedirs(os.path.dirname(out_path) or ".", exist_ok=True)
    dataset.to_csv(out_path, index=False)
    print(f"\nDataset guardado en {out_path} — {len(dataset)} ventanas, "
          f"{dataset['participant'].nunique()} participantes.")
    print(dataset["label"].value_counts())


# 5. ENTRENAMIENTO DEL MODELO (VALIDACIÓN LEAVE-ONE-SUBJECT-OUT)

META_COLS = {"participant", "phase", "label", "window_start_s"}


def build_model(kind):
    if kind == "svm":
        return SVC(kernel="rbf", C=1.0, probability=True, class_weight="balanced")
    return RandomForestClassifier(n_estimators=300, max_depth=6, class_weight="balanced", random_state=42)


def sensitivity_specificity(y_true, y_pred):
    cm = confusion_matrix(y_true, y_pred, labels=[0, 1])
    tn, fp, fn, tp = cm.ravel()
    sens = tp / (tp + fn) if (tp + fn) else np.nan
    spec = tn / (tn + fp) if (tn + fp) else np.nan
    return sens, spec


def train_model(data_path, model_kind, out_path):
    df = pd.read_csv(data_path)
    feature_names = [c for c in df.columns if c not in META_COLS]
    print(f"Features usadas ({len(feature_names)}): {feature_names}\n")

    X = df[feature_names].values
    y = df["label"].values
    groups = df["participant"].values

    logo = LeaveOneGroupOut()
    accs, senss, specs = [], [], []

    print(f"Validación Leave-One-Subject-Out con modelo: {model_kind}\n")
    for fold, (train_idx, test_idx) in enumerate(logo.split(X, y, groups), start=1):
        held_out = groups[test_idx][0]
        scaler = StandardScaler().fit(X[train_idx])
        X_train, X_test = scaler.transform(X[train_idx]), scaler.transform(X[test_idx])

        clf = build_model(model_kind)
        clf.fit(X_train, y[train_idx])
        y_pred = clf.predict(X_test)

        acc = accuracy_score(y[test_idx], y_pred)
        sens, spec = sensitivity_specificity(y[test_idx], y_pred)
        accs.append(acc); senss.append(sens); specs.append(spec)
        print(f"Fold {fold} (sujeto de prueba: {held_out}) -> "
              f"accuracy={acc:.3f} sensibilidad={sens:.3f} especificidad={spec:.3f}")

    print("\n=== Resumen LOSO ===")
    print(f"Accuracy promedio:      {np.nanmean(accs):.3f} (+/- {np.nanstd(accs):.3f})")
    print(f"Sensibilidad promedio:  {np.nanmean(senss):.3f}")
    print(f"Especificidad promedio: {np.nanmean(specs):.3f}")
    print("\nNOTA: con pocos sujetos estas métricas tienen alta varianza. "
          "Repórtalas junto con su desviación estándar, no solo el promedio.")

    final_scaler = StandardScaler().fit(X)
    final_model = build_model(model_kind)
    final_model.fit(final_scaler.transform(X), y)

    os.makedirs(os.path.dirname(out_path) or ".", exist_ok=True)
    joblib.dump({
        "model": final_model,
        "scaler": final_scaler,
        "feature_names": feature_names,
        "loso_accuracy_mean": float(np.nanmean(accs)),
        "loso_sensitivity_mean": float(np.nanmean(senss)),
        "loso_specificity_mean": float(np.nanmean(specs)),
    }, out_path)
    print(f"\nModelo final guardado en {out_path}")



def main():
    parser = argparse.ArgumentParser(description="Pipeline de ML de NeuroStress")
    sub = parser.add_subparsers(dest="command", required=True)

    p_build = sub.add_parser("build", help="Construir dataset de features desde archivos crudos")
    p_build.add_argument("--config", default="sessions_config.csv")
    p_build.add_argument("--window", type=float, default=60.0)
    p_build.add_argument("--overlap", type=float, default=0.5)
    p_build.add_argument("--out", default="data/processed/dataset.csv")
    p_build.add_argument("--drop-freq", action="store_true",
                          help="Excluye lf, hf, lf_hf_ratio (recomendado con ventanas < 2 min)")

    p_train = sub.add_parser("train", help="Entrenar el modelo con el dataset ya construido")
    p_train.add_argument("--data", default="data/processed/dataset.csv")
    p_train.add_argument("--model", choices=["rf", "svm"], default="rf")
    p_train.add_argument("--out", default="models/stress_model.joblib")

    args = parser.parse_args()
    if args.command == "build":
        build_dataset(args.config, args.window, args.overlap, args.out, args.drop_freq)
    elif args.command == "train":
        train_model(args.data, args.model, args.out)


if __name__ == "__main__":
    main()
