# ADQUISICIÓN Y ANÁLISIS DE SEÑALES ELECTROCARDIOGRÁFICAS
## Introducción


El electrocardiograma (ECG) es una prueba médica no invasiva que registra la actividad eléctrica del corazón captada en la superficie corporal mediante electrodos. La señal resultante refleja los potenciales de acción que se originan en el nodo sinoatrial (NSA) y se propagan a través del sistema de conducción cardíaco, nodo auriculoventricular (NAV), también llamado haz de His, ramas derecha e izquierda y fibras de Purkinje, hasta alcanzar el miocardio ventricular [1].

Para entender las señales que obtuvimos en el laboratorio, debemos identificar los componentes clave del trazado. Un ciclo cardíaco normal empieza con la onda P (despolarización auricular), seguida del complejo QRS, que es la parte con mayor amplitud y representa la despolarización de los ventrículos. Finalmente, aparece la onda T, que marca la repolarización ventricular [2]. Además, es importante vigilar el segmento ST y el intervalo QT, ya que cualquier variación en su duración o nivel isoeléctrico puede indicar desde una respuesta fisiológica normal hasta una patología.

<p align="center">
  <img width="450" height="400" alt="ecg wave" src="https://github.com/user-attachments/assets/01f2b963-b98f-43f2-a5d0-41b731b61050" />
  <strong>Figura 1.</strong> Onda de señal ECG.
</p>

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
<p align="center">
  <img width="1389" height="657" alt="WhatsApp Image 2026-05-02 at 1 44 04 AM" src="https://github.com/user-attachments/assets/985aa01b-69f9-4093-a0d3-  7cd7bb61df9e" />
  <strong>Figura 2.</strong> Señales de Derivada I,II y III sobre estado basal 1 y 2.
</p>





Los resultados para cada ejercicio se relatan a más detalle en la siguiente tabla

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

La frecuencia cardiaca de la persona voluntaria en la parte Basal 1, se reporta por encima del límite superior de la normalidad en reposo (60 - 100 bpm), esto podría deberse a un estrés anticipatorio a la realización del laboratorio, temperatura ambiental considerando la calefacción del aula o incluso a alguna condición física individual. Por otro lado, la FC basal 2 mostró un descenso progresivo hacia valores menores, compatible con una relajación al término de la sesión.

Tras la actividad física se observó un gran incremento de la FC registrada, consistente con una activación simpática inducida por el esfuerzo físico de alta intensidad. Sin embargo, la derivada II y la derivada III tuvieron cierta diferencia, esto puede deberse por la mayor susceptibilidad de la derivada I a artefactos de movimiento muscular que alteran lo que son los umbrales de detección de picos R.

En las pruebas de respiración, notamos cómo esta afecta directamente en las señales del ECG. En la primera hipoventilación, la FC subió a 111 bpm, elevados al estado basal. Esto tendría sentido porque, al aguantar el aire, nuestro cuerpo se estresa por falta de oxígeno y el exceso  CO2, activando así el sistema simpático [9]. Por otra parte, en  la hiperventilación no vimos cambios tan grandes, quizás porque no se hizo durante el tiempo suficiente para que el cuerpo tuviera una reacción vagal fuerte, algo que según la literatura suele tardar más de 3 minutos [5]

Sobre las derivadas de Einthoven, los datos confirman un dato: la derivada I siempre mostrará señales muy bajas (0.17 - 0.42 mV) comparada con la II y la III. Esto tiene sentido porque el eje eléctrico del corazón suele estar a 60°, apuntando casi directo a la Derivada II. Por eso, la derivada II es la que nos dio las ondas más claras y fáciles de medir. La derivada I, al estar a 0°, capta solo una pequeña parte de esa señal, lo que la hace mucho más sensible al ruido [3].


# Limitaciones

La limitación más grande fue trabajar solo con un voluntario y también tener que cambiar los electrodos manualmente. Cabe resaltar que fue la primera vez de cada participante cambiando electrodos de ECG en derivadas respectivas, sumado a eso el hacerlo inmediatamente después de determinado tiempo provan variaciones en la calidad del contacto y por tanto en la calidad de la adquisición de la señal. Además, al no usar un equipo clínico de referencia ni sensores de CO2, no pudimos asegurar qué tan profundas fueron las apneas o la hiperventilación, lo que explica por qué algunos cambios autonómicos no fueron tan marcados como dice la literatura [7, 8].



## Referencias

[1] Rhoades R.A., Bell D.R. (Eds.), Medical Physiology: Principles for Clinical Medicine, 4th ed. Lippincott Williams & Wilkins, 2012.

[2] Klabunde R.E., Cardiovascular Physiology Concepts, 2nd ed. Lippincott Williams & Wilkins, 2011.

[3] Goldberger A.L. et al., "Goldberger's Clinical Electrocardiography: A Simplified Approach," 9th ed. Elsevier, 2017.

[4] Task Force of the European Society of Cardiology and the North American Society of Pacing and Electrophysiology, "Heart Rate Variability: Standards of Measurement, Physiological Interpretation and Clinical Use," Circulation, vol. 93, no. 5, pp. 1043–1065, 1996.

[5] Schaun G.Z. et al., "Cardiovascular Responses to High-Intensity Calisthenic Exercise in Young Adults: A Systematic Review," European Journal of Applied Physiology, vol. 119, no. 11–12, pp. 2375–2391, 2019

[6] Perini R. et al., "Diving Reflex and Heart Rate Variability During Voluntary Apnea: A Meta-analysis," Journal of Applied Physiology, vol. 125, no. 3, pp. 764–773, 2018.

[7] Pham T.H. et al., "Effects of Voluntary Hyperventilation on Autonomic Nervous System Activity and Heart Rate Variability: A Systematic Review," Frontiers in Physiology, vol. 14, p. 1150345, 2023.

[8] Sheta M. et al., "Motion Artifact Reduction Algorithms for Wearable ECG Sensors: A Systematic Review," Biosensors and Bioelectronics, vol. 201, p. 113957, 2022.


