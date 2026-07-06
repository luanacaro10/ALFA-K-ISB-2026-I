# NeuroStress — Frontend (prototipo local)

Frontend para el proyecto final de Introducción a Señales Biomédicas:
detección de estrés cognitivo a partir de señales ECG y EDA (BITalino).

## Cómo correrlo
Requisitos: tener instalado [Node.js](https://nodejs.org) (versión 18 o superior).

```bash
# 1. Entrar a la carpeta del proyecto
cd neurostress

# 2. Instalar las dependencias (solo la primera vez)
npm install

# 3. Levantar el servidor local
npm run dev
```

Luego abrir en el navegador la URL que muestra la terminal, normalmente:
**http://localhost:5173**



Los colores, tipografía (Quicksand) y estilos de componentes siguen
exactamente los tokens definidos en `DESIGN.md` (sistema "Serene Pulse"),
implementados en `tailwind.config.js` y `src/index.css`.
