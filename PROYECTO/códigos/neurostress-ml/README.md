# NeuroStress ML — El "cerebro" del proyecto

Backend en Python que procesa las señales ECG/EDA crudas de BITalino,
extrae las características (HRV, EDA) y clasifica el nivel de estrés
cognitivo. Se conecta con el frontend React ya existente.

Solo **2 archivos de código**:
- `neurostress_ml.py` — todo el pipeline (lectura BITalino, filtrado,
  detección de picos R, EDA tónica/fásica, ventaneo, features de HRV,
  entrenamiento con validación Leave-One-Subject-Out).
- `api.py` — servidor FastAPI que expone el modelo al frontend.

## 1. Instalación

Requisitos: Python 3.10+.

```bash
cd neurostress-ml
python -m venv venv

# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

pip install -r requirements.txt
```

## 2. Preparar tus datos reales

Tienes **1 archivo `.txt` por fase** (ej: `p1_basal.txt`, `p1_stroop.txt`,
`p1_mist.txt`, `p1_basal2.txt`).

1. Copia tus archivos a `data/raw/`.
2. Copia `sessions_config_por_fase.example.csv` → `sessions_config.csv` y
   ajusta la columna `filepath` a tus nombres reales. `label = 0` en fases
   de calma (basal, basal2), `label = 1` en fases de estrés (Stroop, MIST).

## 3. Construir el dataset y entrenar

```bash
python neurostress_ml.py build --config sessions_config.csv --window 60 --overlap 0.5 --drop-freq
python neurostress_ml.py train --data data/processed/dataset.csv --model rf
```

**¿Por qué ventanas de 60s?** Con pocos participantes, ventanear cada fase
en sub-ventanas con solapamiento multiplica tus muestras de entrenamiento
(de ~16 a ~130+).

**¿Por qué `--drop-freq`?** Las features de dominio de frecuencia (LF, HF)
necesitan ventanas largas (~5 min, según Task Force ESC) para ser
confiables — lo opuesto a lo que se necesita para tener muchas ventanas de
entrenamiento. Con `--drop-freq` te quedas solo con features de dominio
del tiempo (RMSSD, SDNN, pNN50, HR media) + EDA, que sí tolera bien ventanas
cortas. `train_model` detecta automáticamente qué columnas hay en el
dataset, así que no hay que tocar nada más si decides no usar el flag.

Prueba también `--model svm` para comparar clasificadores.

## 4. Levantar la API

```bash
uvicorn api:app --reload --port 8000
```

Con esto corriendo, y el frontend con `npm run dev` en su propia carpeta,
el botón "Iniciar Procesamiento" del frontend llama de verdad al modelo
entrenado, en vez de simular el resultado.

## Notas para tu sustentación

- **Leave-One-Subject-Out**: con pocos sujetos, un split aleatorio
  mezclaría ventanas del mismo participante entre entrenamiento y prueba,
  inflando artificialmente la precisión. LOSO entrena con todos menos uno,
  y prueba con el que quedó afuera, rotando — mide qué tan bien generaliza
  el modelo a una persona que nunca vio.
- **Conversión ADC → unidades físicas**: fórmulas oficiales de BITalino,
  documentadas dentro de `neurostress_ml.py` (sección 1).
- **Detección de picos R**: Pan-Tompkins simplificado (sección 2).
- **EDA fásica/tónica**: filtro pasa-bajos (tónica) + resta (fásica).
