# INFORME DE EXPERIMENTO EEG  
## Adquisición de Señales Electroencefalográficas  
### Introducción a Señales Biomédicas  
Universidad Peruana Cayetano Heredia  
Facultad de Medicina  
Año 2026  

---

## Tabla de Contenidos
1. Introducción  
2. Métodos  
3. Resultados  
4. Discusión  
5. Conclusiones  
6. Referencias  

---

## 1. Introducción

La electroencefalografía (EEG) es una técnica de adquisición de señales biomédicas que permite registrar la actividad eléctrica del cerebro mediante electrodos colocados sobre el cuero cabelludo. Esta técnica es fundamental en neurofisiología clínica, investigación neurocientífica y aplicaciones en interfaces cerebro-computadora (BCI).

El presente experimento tuvo como objetivo adquirir y analizar señales EEG en diferentes condiciones comportamentales para identificar patrones característicos de actividad cerebral. Se empleó el dispositivo BITalino (r)evolution Board Kit BLE/BT con software OpenSignals, siguiendo el protocolo de la guía de clase N°4 del curso Introducción a Señales Biomédicas.

Las bandas de frecuencia EEG estudiadas incluyen:  
- Delta: Modo sueño (0–4 Hz)  
- Theta: Modo somnolencia (4–8 Hz)  
- Alpha: Modo reposo (8–13 Hz)  
- Beta: Modo atención/cálculo (13–30 Hz)  
- Gamma: Procesamiento cognitivo rápido (>30 Hz)

Se esperaba observar modulación en estas bandas según el estado cognitivo del participante.

---

## 2. Métodos

### 2.1 Materiales y Equipos

Se utilizaron los siguientes materiales y equipos:

| Material/Equipo | Cantidad |
|----------------|----------|
| BITalino (r)evolution Board Kit BLE/BT | 1 |
| Laptop con Bluetooth | 1 |
| Software OpenSignals (r)evolution | 1 |
| Electrodos Ag/AgCl desechables (gel) | 3 |


### 2.2 Procedimiento Experimental

El experimento se llevó a cabo siguiendo el protocolo establecido en la guía de práctica N°4. Se registraron señales EEG del canal A4 a una frecuencia de muestreo de 100 Hz, cumpliendo con el teorema de muestreo de Nyquist-Shannon (mínimo 2 × 48 Hz = 96 Hz).

Los electrodos se colocaron en la posición Fp2 (frontal derecha) del sistema internacional 10-20, con electrodo de referencia en la región mastoidea derecha.


### 2.3 Protocolo de Adquisición

Se realizaron seis actividades diferentes con los siguientes tiempos de adquisición:

| No. | Actividad | Descripción | Duración |
|-----|----------|-------------|----------|
| 1 | Ritmo Basal 1 | Ojos cerrados, relajación total | 1 minuto |
| 2 | Apertura de Ojos | Visión fija en punto (chapita de botella) | 1 minuto |
| 3 | Ritmo Basal 2 | Reposo sin estímulos | 30 segundos |
| 4 | Artefactos | Parpadeo + masticación | 1 minuto |
| 5 | Ritmo Basal 3 | Recuperación post-artefactos | 30 segundos |
| 6a | Música Relajante | Estímulo auditivo relajante | 1 minuto |
| 6b | Música Estresante | Estímulo auditivo estresante | 1 minuto |


### 2.4 Posicionamiento de Electrodos

Según el sistema internacional 10-20, se colocaron dos electrodos activos en la posición Fp2 (frontal-parietal derecha, por encima del ojo derecho) para registrar actividad del lóbulo frontal. Un electrodo de referencia se posicionó en la región mastoidea derecha (detrás de la oreja).

Antes de la colocación de los electrodos, se limpió la piel con alcohol para reducir impedancias y garantizar una buena calidad de señal.


### 2.5 Configuración del Software

Se utilizó OpenSignals (r)evolution con los siguientes parámetros: canal A4 configurado como EEG, frecuencia de muestreo de 100 Hz, ganancia interna del amplificador de 40,000×, y filtro hardware pasa-banda de 0.8–48 Hz.

Esta configuración permite capturar todas las bandas de frecuencia relevantes de EEG (delta, theta, alpha, beta y gamma) con una resolución ADC de 10 bits (resolución aprox ≈ 3.2 µV/LSB).
