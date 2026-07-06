"""
api.py
------
API local en FastAPI que recibe el .txt crudo de BITalino desde el
frontend (React, http://localhost:5173), lo procesa con el pipeline de
neurostress_ml.py, corre el modelo entrenado y devuelve el resultado en
el JSON que el frontend ya espera.

Correr:
    uvicorn api:app --reload --port 8000
"""

import os
import tempfile
import time
from datetime import datetime, timezone

import joblib
import numpy as np
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from neurostress_ml import (
    load_bitalino_txt,
    filter_ecg,
    detect_r_peaks,
    rr_intervals_ms,
    decompose_eda,
    detect_scr_peaks,
    extract_window_features,
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "models", "stress_model.joblib")

app = FastAPI(title="NeuroStress ML API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

_bundle = None


def get_model_bundle():
    global _bundle
    if _bundle is None:
        try:
            _bundle = joblib.load(MODEL_PATH)
        except FileNotFoundError:
            raise HTTPException(
                status_code=500,
                detail=(
                    f"No se encontró el modelo entrenado en '{MODEL_PATH}'. "
                    "Corre primero: python neurostress_ml.py build ... y "
                    "python neurostress_ml.py train ..."
                ),
            )
    return _bundle


@app.get("/")
def root():
    return {"status": "ok", "message": "NeuroStress ML API activa"}


@app.post("/analizar")
async def analizar(file: UploadFile = File(...)):
    start_time = time.time()
    bundle = get_model_bundle()

    raw_bytes = await file.read()
    tmp_path = os.path.join(tempfile.gettempdir(), file.filename)
    with open(tmp_path, "wb") as f:
        f.write(raw_bytes)

    try:
        df_signal, meta = load_bitalino_txt(tmp_path)
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error al leer el archivo: {e}")

    fs = meta["sampling_rate"]
    ecg_filtered = filter_ecg(df_signal["ecg_mv"].values, fs)
    r_peaks = detect_r_peaks(ecg_filtered, fs)
    rr_ms = rr_intervals_ms(r_peaks, fs)
    r_peak_times_s = r_peaks / fs

    tonic, phasic = decompose_eda(df_signal["eda_us"].values, fs)
    scr_peaks, scr_amps = detect_scr_peaks(phasic, fs)

    if len(rr_ms) < 4:
        raise HTTPException(
            status_code=422,
            detail="No se detectaron suficientes latidos válidos en la señal ECG.",
        )

    feats = extract_window_features(rr_ms, r_peak_times_s, tonic, phasic, scr_peaks, scr_amps, meta["duration_s"])
    feature_names = bundle["feature_names"]  # mismo orden con el que se entrenó
    X = np.array([[feats[name] for name in feature_names]])
    X_scaled = bundle["scaler"].transform(X)

    proba = bundle["model"].predict_proba(X_scaled)[0]
    stress_pct = int(round(proba[1] * 100))

    if stress_pct < 35:
        level, label, message = (
            "estable", "Estable",
            "Tu señal indica un estado de calma cognitiva compatible con un rendimiento académico óptimo.",
        )
    elif stress_pct < 65:
        level, label, message = (
            "moderado", "Estrés moderado",
            "Tu nivel de conductancia galvánica y variabilidad cardíaca sugieren una activación simpática media.",
        )
    else:
        level, label, message = (
            "alto", "Estrés elevado",
            "Tus señales muestran una activación simpática alta: frecuencia cardíaca elevada y baja variabilidad (HRV).",
        )

    expected_beats = meta["duration_s"] * (90 / 60)
    signal_quality = int(min(100, round((len(r_peaks) / max(expected_beats, 1)) * 100)))
    processing_time = round(time.time() - start_time, 1)

    return {
        "stressPct": stress_pct,
        "level": level,
        "label": label,
        "message": message,
        "heartRate": int(round(feats["mean_hr"])),
        "eda": round(float(feats["scl_mean"]), 1),
        "signalQuality": signal_quality,
        "processingTime": processing_time,
        "fileName": file.filename,
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }
