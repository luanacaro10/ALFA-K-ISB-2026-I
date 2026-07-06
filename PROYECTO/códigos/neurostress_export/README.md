# NeuroStress — Frontend (prototipo local)

Frontend para el proyecto final de Introducción a Señales Biomédicas:
detección de estrés cognitivo a partir de señales ECG y EDA (BITalino).

## Cómo correrlo en tu computadora

Requisitos: tener instalado [Node.js](https://nodejs.org) (versión 18 o superior).

```bash
# 1. Entra a la carpeta del proyecto
cd neurostress

# 2. Instala las dependencias (solo la primera vez)
npm install

# 3. Levanta el servidor local
npm run dev
```

Luego abre en el navegador la URL que te muestra la terminal, normalmente:
**http://localhost:5173**

## Flujo de la app

1. `/` — Landing: presentación del proyecto, objetivos, equipo.
2. `/registro` y `/login` — Autenticación simulada (no hay backend real, solo guarda el nombre en el navegador).
3. `/app` — Dashboard de bienvenida.
4. `/app/analizar` — Sube un archivo `.txt`/`.csv` de OpenSignals, simula el procesamiento y muestra el resultado.
5. `/app/resultado` — Recomendaciones y videos de relajación según el nivel de estrés.
6. `/app/historial` — Sesiones anteriores guardadas en el navegador (localStorage).
7. `/app/participantes` — Tarjetas del equipo.
8. `/app/metodologia` — Pipeline de procesamiento y métricas del modelo.

## ⚠️ Importante: esto es solo el frontend

El análisis de la señal (filtrado ECG/EDA, extracción de HRV, clasificación
con el modelo de ML) **no se ejecuta aquí**. La función `runInference()` en
`src/data/analyzeSignal.js` genera un resultado simulado (determinístico por
archivo, para que la demo sea consistente) y deja comentado dónde debes
conectar tu backend real, por ejemplo:

```js
export async function runInference(file) {
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch("http://localhost:8000/analizar", {
    method: "POST",
    body: formData,
  });
  return res.json();
}
```

Tu backend en Python (procesamiento de señal + modelo entrenado) debería
exponer un endpoint que reciba el archivo y devuelva un JSON con esta forma:

```json
{
  "stressPct": 42,
  "level": "moderado",
  "label": "Estrés moderado",
  "message": "...",
  "heartRate": 84,
  "eda": 4.2,
  "signalQuality": 92,
  "processingTime": 4.2,
  "fileName": "sujeto1_examen.txt",
  "timestamp": "2026-07-03T20:00:00.000Z"
}
```

## Estructura del proyecto

```
src/
  components/     Sidebar y layout de la app
  pages/          Cada pantalla (Landing, Login, Registro, Analizar, Resultado, Historial, Participantes, Metodología, Ayuda)
  data/           team.js (integrantes), analyzeSignal.js (mock del modelo), history.js (localStorage)
```

## Diseño

Los colores, tipografía (Quicksand) y estilos de componentes siguen
exactamente los tokens definidos en `DESIGN.md` (sistema "Serene Pulse"),
implementados en `tailwind.config.js` y `src/index.css`.
