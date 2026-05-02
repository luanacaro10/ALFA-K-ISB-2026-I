# ADQUISICIÓN Y ANÁLISIS DE SEÑALES ELECTROCARDIOGRÁFICAS
## Introducción


El electrocardiograma (ECG) es una prueba médica no invasiva que registra la actividad eléctrica del corazón captada en la superficie corporal mediante electrodos. La señal resultante refleja los potenciales de acción que se originan en el nodo sinoatrial (NSA) y se propagan a través del sistema de conducción cardíaco, nodo auriculoventricular (NAV), también llamado haz de His, ramas derecha e izquierda y fibras de Purkinje, hasta alcanzar el miocardio ventricular [1].

Este trazado ECG estándar se compone de ondas características que representan la despolarización o activación eléctrica auricular (onda P), el tiempo desde el inicio de la activación auricular hasta de la ventricular incluyendo el retraso en el nodo AV (intervalo PQ), la despolarización rápida de los ventrículos (complejo QRS) y la repolarización ventricular (onda T). Cada derivada capta una proyección distinta del vector eléctrico cardíaco resultante, de modo que la morfología de las ondas varía según el eje de medición [2].

El sistema de 12 derivadas definido por Einthoven y sus expansiones posteriores permite analizar el corazón en los planos frontal y horizontal. Las derivadas bipolares de los miembros (I, II y III) son conocidas como triángulo de Einthoven y constituyen el primer nivel de análisis y por tanto son las empleadas en esta práctica. Además, la disposición geométrica de los electrodos determina el ángulo de proyección y, en consecuencia, la amplitud y polaridad de cada componente de la señal [3].

Por todo esto, el presente informe documenta la adquisición de señales ECG, con el kit BITalino (r)evolution, bajo seis condiciones fisiológicas distintas (señal basal (×2), hiperventilación (×2), actividad física de alta intensidad (burpees) e hipoventilación (×2)) usando las tres derivadas de Einthoven, con el propósito de analizar el efecto de cada condición sobre los parámetros cardíacos y responder las preguntas guía del laboratorio.


## Metodología

Se utilizó el sistema BITalino con sensor ECG ensamblado, conectado por Bluetooth a un computador portátil con el software OpenSignals.

Para la colocación de electrodos nos guiamos del manual del Laboratorio. Para la derivada I se ubicaron en la zona supraclavicular bilateral (rojo = clavícula izquierda; negro = clavícula derecha) y en el trocánter mayor del fémur izquierdo (blanco como REF), reproduciendo la configuración de la derivada I de Einthoven según el Home-Guide #2.

Para obtener las derivadas II y III, se intercambiaron los cables según también las indicaciones del Home-Guide:

- _Derivada II: se intercambiaron el electrodo positivo (rojo) y la referencia (blanco) manteniendo el negativo (negro) en su posición._
- _Derivada III: desde la configuración de derivada II, se intercambiaron el electrodo negativo (negro) y la referencia (blanco)._

Antes de colocar los electrodos se limpió la piel con alcohol isopropílico al 70 % para reducir la impedancia de contacto y se dejó secar.

### Actividades que se realizaron

- Señal basal: se estará sentado en reposo, sin realizar movimientos voluntarios y con respiración espontánea y tranquila. Esta condición ayudará a establecer la línea de base del trazado ECG individual y por tanto, permitirá estimar la FC en reposo. Se realizaron dos registros basales al inicio y al final para verificar la estabilidad de los parámetros cardíacos a lo largo de la sesión del laboratorio.
- Hiperventilación: esta actividad consiste en aumentar voluntariamente la frecuencia y profundidad al respirar. Esto reduce el CO2 en la sangre y por tanto alcalosis respiratoria.
- Actividad física: en este laboratorio se dio a elegir entre burpees por 2 minutos o subir escaleras por 8 minutos. Ambos considerados como actividad física de impacto. En el informe se relata la realización de burpees, un ejercicio que involucra todo el cuerpo y por tanto elevando la demanda metabólica y activa el sistema nervioso simpático, incrementando la FC, el gasto cardíaco y la contractilidad miocárdica.
- Hipoventilación: retención de la respiración lo más que se pueda. Esta retención de CO2 estimula el sistema nervioso autónomo y puede desencadenar el reflejo de inmersión, caracterizado por bradicardia refleja mediada por el nervio vago [4].

### Protocolo de adquisición

Se realizaron seis ejercicios secuenciales sobre un único participante voluntario, registrando 30 s por derivada en cada condición:

- **Señal basal 1 (Ejer1):** registro en reposo, respiración normal, tres derivadas consecutivas en orden.
- **Hiperventilación 1 (Ejer2):** el participante hiperventilaba durante ~1 min y se medía inmediatamente al terminar por 30 s; se repitió para cada derivada con descanso de 4 min entre sesiones.
- **Hiperventilación 2 (Ejer3):** segundo ciclo de hiperventilación, misma metodología que la anterior.
- **Actividad física:** se realizaron burpees por 2 minutos. Sin electrodos encima cabe recalcar.
- **Post-Burpees (Ejer4):** registro inmediatamente tras el esfuerzo de la actividad física, 30 s por derivada. E inmediatamente después la derivada siguiente.
- **Hipoventilación (Ejer5):** el participante contenía la respiración hasta el límite máximo tolerado; el registro comenzaba justo al reanudar la ventilación, 30 s por derivada. Descanso de 4 min.
- **Señal basal 2 (Ejer6):** registro final en reposo, misma configuración que basal 1.





## Resultados

Los resultados para cada ejercicio se relatan en la siguiente tabla

| Condición | Derivada | FC (bpm) | RR medio (ms) | SDNN (ms) | Amp. pico-pico (mV) | Nº picos R |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Basal 1 | I | 103.9 | 577.7 | 16.6 | 0.174 | 58 |
| Basal 1 | II | 101.3 | 593.2 | 26.3 | 1.351 | 55 |
| Basal 1 | III | 103.0 | 584.5 | 29.4 | 1.265 | 57 |
| Hiperventilación 1 | I | 102.8 | 584.3 | 20.4 | 0.263 | 55 |
| Hiperventilación 1 | II | 102.9 | 583.7 | 21.7 | 1.325 | 56 |
| Hiperventilación 1 | III | 105.7 | 568.8 | 23.3 | 1.291 | 60 |
| Hiperventilación 2 | I | 96.9 | 621.5 | 36.3 | 0.241 | 52 |
| Hiperventilación 2 | II | 97.6 | 620.2 | 60.8 | 1.443 | 52 |
| Hiperventilación 2 | III | 100.5 | 602.6 | 57.7 | 1.253 | 53 |
| Post-Burpees | I | 110.4 | 604.0 | 208.2* | 0.362 | 56 |
| Post-Burpees | II | 131.5 | 456.5 | 13.1 | 1.471 | 70 |
| Post-Burpees | III | 122.5 | 489.7 | 4.5 | 1.347 | 66 |
| Hipoventilación 1 | I | 92.2 | 745.0 | 300.5* | 0.415 | 44 |
| Hipoventilación 1 | II | 111.1 | 540.4 | 7.6 | 1.780 | 58 |
| Hipoventilación 1 | III | 109.6 | 548.4 | 26.0 | 1.577 | 61 |
| Hipoventilación 2 | I | 110.3 | 551.8 | 83.1 | 1.562 | 60 |
| Hipoventilación 2 | II | 107.6 | 560.5 | 41.6 | 1.418 | 58 |
| Hipoventilación 2 | III | 103.8 | 583.5 | 63.1 | 1.255 | 57 |
| Basal 2 | I | 103.2 | 585.6 | 46.2 | 0.318 | 56 |
| Basal 2 | II | 96.6 | 622.3 | 29.9 | 1.313 | 52 |
| Basal 2 | III | 92.7 | 651.8 | 54.4 | 1.972 | 49 |

_(*) SDNN afectado por artefactos de movimiento._

_FC = frecuencia cardíaca; RR = intervalo entre picos R; SDNN = desviación estándar de intervalos RR; Amp. pp = amplitud pico a pico de la señal filtrada_

## Discusión


## Referencias

[1] Rhoades R.A., Bell D.R. (Eds.), Medical Physiology: Principles for Clinical Medicine, 4th ed. Lippincott Williams & Wilkins, 2012.

[2] Klabunde R.E., Cardiovascular Physiology Concepts, 2nd ed. Lippincott Williams & Wilkins, 2011.

[3] Goldberger A.L. et al., "Goldberger's Clinical Electrocardiography: A Simplified Approach," 9th ed. Elsevier, 2017.

