
# EVALUACIÓN DE LA ACTIVIDAD ELECTROMIOGRÁFICA DEL MÚSCULO FLEXOR CARPI RADIALIS Y EL BÍCEPS BRAQUIAL
## INTRODUCCIÓN
Cuando flexionamos el codo para levantar un objeto o estabilizamos la muñeca durante una tarea manual, el sistema nervioso coordina con precisión qué unidades motoras se activan y con qué intensidad. Esa actividad eléctrica puede captarse desde la superficie de la piel mediante la electromiografía de superficie (sEMG), una técnica no invasiva que registra la suma de los potenciales de acción de las unidades motoras activas (MUAPs) durante la contracción muscular. La sEMG analiza las señales bioeléctricas generadas durante los movimientos voluntarios del sistema neuromuscular, amplificándolas y registrándolas a través de electrodos colocados sobre la piel nih, lo que permite inferir el nivel de activación muscular y los patrones de reclutamiento sin ningún procedimiento invasivo [1].

En este laboratorio se evaluaron dos músculos del miembro superior: el bíceps braquial (BB), principal flexor del codo y supinador del antebrazo, y el flexor carpi radialis (FCR), músculo del antebrazo involucrado en la flexión y desviación radial de la muñeca. El FCR se ubica en la porción central y superficial del compartimento anterior del antebrazo, lo que, junto con la localización superficial del BB, hace que ambos músculos sean ideales para el registro sEMG. Su elección permite comparar cómo responde cada músculo, con funciones distintas pero complementarias, ante diferentes demandas mecánicas.

## METODOLOGÍA

### 2.1 Participantes

Se contó con la participación voluntaria de una integrante del grupo, sin referir condiciones neuromusculares, lesiones en la extremidad superior ni contraindicaciones para la realización del protocolo. Previo al inicio de la sesión se explicó el procedimiento y la participante brindó su consentimiento verbal.

### 2.2 Instrumentación y colocación de electrodos

Se utilizó un sistema de adquisición de señales sEMG con electrodos de superficie bipolares proporcionados por el kit BITalino. Los electrodos fueron colocados según el protocolo de la guía de laboratorio para la adquisición de señales usando el kit BITalino.

En ambos casos, los electrodos fueron colocados en alineación con las fibras musculares y centrados en el vientre muscular, respetando un espacio de separación de al menos 2 cm entre los centros.

En la evaluación del músculo FCR, los electrodos se colocaron en alineación con las fibras musculares y el electrodo de referencia se ubicó en el codo.

![Figura 1](Laboratorios/Laboratorio%202/imagenes/figura1.jpg)

**Figura 1.** Colocación de electrodos para evaluación del músculo FCR.

Para la evaluación del músculo BB, el electrodo de referencia también se posicionó en el codo y los otros dos electrodos fueron alineados con las fibras musculares.

![Figura 2](Laboratorios/Laboratorio%202/imagenes/figura2.jpg)

**Figura 2.** Colocación de electrodos para evaluación del músculo BB.

Se hizo uso también de una laptop con OpenSignals instalado para el procesamiento y guardado de datos.

### 2.3 Protocolo experimental

Se realizaron cuatro ejercicios con tres pruebas cada uno dependiendo del músculo a evaluar. El tiempo de descanso entre cada prueba fue de aproximadamente 2 minutos.

El protocolo fue el siguiente:

- **Ejercicios 1 y 3:** tres pruebas de flexión de codo sin contrapeso; el tipo de contracción fue flexión concéntrica. El Ejercicio 1 fue dedicado a la evaluación del músculo FCR y el Ejercicio 3 a la evaluación del músculo BB.

- **Ejercicios 2 y 4:** tres pruebas de flexión con contrapeso. Un segundo participante opuso resistencia manual al movimiento de flexión, impidiendo que el participante con electrodos completara el arco de movimiento, generando así una condición de contracción isométrica máxima voluntaria (MVC).

En el Ejercicio 2 se realizó una flexión de muñeca, mientras que en el Ejercicio 4 una flexión de codo, debido a los músculos evaluados.

Todo dispositivo electrónico no necesario fue retirado de la zona de prueba.

### 2.4 Adquisición y preprocesamiento

Las señales sEMG fueron almacenadas en archivos de texto (.txt) para su posterior análisis en Python. Los registros incluyen la evolución temporal de la señal de voltaje captada por los electrodos durante cada prueba.

No se aplicaron filtros adicionales en el procesamiento reportado; los datos corresponden a la señal cruda o con procesamiento mínimo propio del sistema de adquisición.

## RESULTADOS

### 3.1 Ejercicio 1 — Flexión sin contrapeso

Las tres pruebas del Ejercicio 1 registraron señales sEMG caracterizadas por ráfagas de actividad muscular claramente diferenciadas en el tiempo, coincidentes con las fases de contracción voluntaria. Se observó una morfología similar en las tres pruebas: picos de amplitud positivos y negativos alternantes durante las fases activas, con retorno a la línea base durante los periodos de reposo entre contracciones.

La amplitud de la señal durante la contracción fue visualmente superior al ruido de fondo registrado en reposo, lo que indica activación efectiva del bíceps braquial. No se apreció tendencia de reducción de amplitud entre repeticiones sucesivas, sugiriendo ausencia de fatiga significativa en esta condición.

### 3.2 Ejercicio 2 — Flexión con contrapeso (isométrica)

En el Ejercicio 2, las señales sEMG mostraron ráfagas de actividad de mayor amplitud en comparación con el Ejercicio 1. Durante los episodios de contracción isométrica resistida, la señal presentó actividad sostenida y de mayor densidad de deflexiones.

La amplitud pico fue notoriamente superior a la observada en la condición sin contrapeso. El patrón temporal fue de tipo continuo durante el periodo de esfuerzo, a diferencia del patrón pulsátil breve del ejercicio libre. Entre las tres pruebas no se observaron diferencias cualitativas relevantes en la morfología general de la señal.

### 3.3 Ejercicio 3 — Flexión sin contrapeso

Las señales del Ejercicio 3 presentaron ráfagas de actividad sEMG con morflogía análoga al Ejercicio 1. Las amplitudes absolutas fueron comparables entre ambos ejercicios, lo que es consistente con la ausencia de fatiga acumulada entre sesiones separadas por descansos adecuados.

Se identificaron claramente los periodos de activación y de reposo, con activaciones breves y bien delimitadas temporalmente, confirmando la reproducibilidad del patrón de señal en condición libre.

### 3.4 Ejercicio 4 — Flexión con contrapeso (isométrica)

El Ejercicio 4 mostró, al igual que el Ejercicio 2, señales sEMG de mayor amplitud que su contraparte sin contrapeso (Ejercicio 3). Los picos de amplitud durante las contracciones resistidas fueron pronunciados y la señal presentó mayor densidad de actividad durante el periodo de esfuerzo.

Las tres pruebas mostraron patrones similares entre sí y coherentes con los registrados en el Ejercicio 2, lo que refuerza la reproducibilidad del protocolo en condición isométrica [4].


## DISCUSIÓN

### 4.1 Análisis de resultados

Los patrones sEMG obtenidos en los cuatro ejercicios coinciden con los mecanismos neurofisiológicos conocidos de la activación muscular diferenciada según el tipo de contracción. La mayor amplitud registrada en las condiciones con contrapeso (Ejercicios 2 y 4) respecto a las condiciones sin contrapeso (Ejercicios 1 y 3) concuerda con el principio de que una mayor demanda de fuerza requiere el reclutamiento de un número más elevado de unidades motoras, así como una mayor tasa de disparo, lo que se traduce en señales sEMG de mayor amplitud y densidad temporal [1, 7].

En la condición isométrica (con contrapeso), el bíceps braquial generó fuerza de forma sostenida sin cambio en la longitud muscular. Este tipo de contracción produce señales sEMG de alta amplitud y densidad temporal, dado que las unidades motoras deben mantener su activación de manera continua [2]. En contraste, durante la flexión libre (contracción isotónica), la señal sEMG exhibió patrones de ráfagas breves y delimitadas, correspondientes a las fases activas del ciclo concéntrico-excéntrico, con descenso hacia la línea base en los intervalos de reposo.

La variación en la amplitud de la señal es esperable incluso dentro de un mismo participante. Los registros de sEMG de superficie están influenciados por distintos factores, como el espesor del tejido subcutáneo, la arquitectura del músculo, la ubicación de los electrodos respecto a las fibras activas y la impedancia de la piel [3]. Por ello, para realizar comparaciones más precisas, es recomendable normalizar las señales en función de la contracción voluntaria máxima (MVC).

Por otro lado, la similitud observada entre las tres repeticiones de cada ejercicio indica que el protocolo fue consistente en el corto plazo. Las señales mantuvieron un comportamiento bastante parecido en cada intento, lo que sugiere una buena reproducibilidad bajo las mismas condiciones experimentales, en línea con lo reportado en la literatura cuando se respetan tiempos de descanso adecuados entre esfuerzos [4].

### 4.2 Limitaciones del estudio

#### 4.2.1 Tamaño muestral

El estudio se realizó con una única participante, lo que limita completamente la posibilidad de generalizar los resultados. En la literatura, los estudios de referencia en sEMG del bíceps braquial suelen incluir entre 10 y 50 sujetos para lograr un poder estadístico adecuado [1, 4]. Por ello, los resultados obtenidos en este trabajo tienen un carácter principalmente exploratorio y descriptivo, mas no inferencial.

#### 4.2.2 Ausencia de normalización por MVC

Una limitación importante del estudio es que no se realizó la normalización de las señales sEMG respecto a la contracción voluntaria máxima (MVC). Sin este procedimiento, los valores de amplitud no pueden compararse de manera precisa, especialmente entre distintas mediciones o sesiones. De acuerdo con las guías internacionales SENIAM y otros estudios en el área, la normalización por MVC es el método estándar cuando se buscan comparaciones cuantitativas en sEMG de superficie [5].

#### 4.2.3 Control de la contracción isométrica

La resistencia manual aplicada durante los Ejercicios 2 y 4 introduce una fuente de variabilidad que no fue controlada. A diferencia de equipos como los dinamómetros isocinéticos, este tipo de resistencia no permite asegurar que la fuerza se mantenga constante entre pruebas. Como consecuencia, las condiciones isométricas evaluadas no son completamente reproducibles ni cuantificables. En estudios más controlados, se suelen utilizar sistemas de carga con retroalimentación visual para garantizar niveles de fuerza más consistentes [2].

#### 4.2.4 Artefactos de movimiento

En las contracciones isotónicas (sin contrapeso), el movimiento articular puede generar artefactos de movimiento en las señales sEMG. Estos artefactos se producen por el desplazamiento relativo de los electrodos respecto a la piel y tienen frecuencias predominantes por debajo de 20 Hz. Sin un filtrado pasa-altas adecuado (típicamente >10–20 Hz), estos artefactos pueden contaminar la señal y distorsionar los parámetros de amplitud [3].

#### 4.2.5 Crosstalk de músculos adyacentes

El bíceps braquial comparte el espacio anatómico con el braquial y el braquiorradial, músculos sinergistas en la flexión del codo. La sEMG de superficie no puede discriminar perfectamente la contribución de cada músculo, lo que implica que las señales registradas pueden contener contaminación por crosstalk. Estudios recientes sobre colocación de electrodos en el miembro superior señalan que el crosstalk en el bíceps braquial puede ser relevante cuando los electrodos no se orientan estrictamente paralelos a las fibras musculares [6].

#### 4.2.6 Control del tiempo de descanso

El descanso de aproximadamente un minuto entre pruebas fue definido de manera aproximada y no controlado con cronómetro preciso. Si bien un minuto puede ser suficiente para recuperación parcial en esfuerzos submáximos, en condiciones isométricas máximas podría ser insuficiente para la recuperación completa del metabolismo muscular, lo que podría influir en la amplitud de las señales en las pruebas subsiguientes [4].

#### 4.2.7 Análisis cualitativo sin cuantificación de parámetros

El presente informe se basa en la inspección visual de las señales sin extraer parámetros cuantitativos como el valor RMS, la frecuencia mediana (MDF), la frecuencia media (MPF) o el índice de fatiga de Dimitrov. Estos indicadores son los referentes estándar en la literatura para caracterizar y comparar señales sEMG [1, 5]. Su ausencia limita la capacidad de comparar los resultados con los valores reportados en estudios previos y revisiones sistemáticas del área.

## REFERENCIAS

1. P. M. R. Gouveia et al., "EMG amplitude and frequency parameters of muscular activity: Effect of resistance training based on electromyographic fatigue threshold," *J. Electromyogr. Kinesiol.*, vol. 17, no. 5, pp. 601–610, 2007. doi: 10.1016/j.jelekin.2007.09.001

2. R. Merletti and D. Farina, "Analysis of intramuscular electromyogram signals," *Philos. Trans. R. Soc. A*, vol. 367, no. 1887, pp. 357–368, 2009. doi: 10.1098/rsta.2008.0235

3. C. Disselhorst-Klug, T. Schmitz-Rode, and G. Rau, "Surface electromyography and muscle force: Limits in sEMG–force relationship and new approaches for applications," *Clin. Biomech.*, vol. 24, no. 3, pp. 225–235, 2009. doi: 10.1016/j.clinbiomech.2008.08.003

4. C. Ortiz-Cruz, R. Bravo-Mancero, and S. Viñán-Garces, "Evaluation of muscle fatigue using surface electromyography during isometric contractions in athletes and non-athletes," *Eur. J. Cardiovasc. Med.*, vol. 15, no. 1, pp. 88–97, 2025. doi: 10.5083/ejcm.20453 [Online]. Available: https://healthcare-bulletin.co.uk

5. P. Konrad, *The ABC of EMG: A Practical Introduction to Kinesiological Electromyography*, Noraxon Inc., Scottsdale, AZ, USA, 2005. [Online]. Available: https://www.noraxon.com

6. A. Casolo et al., "Electrode Size and Placement for Surface EMG Bipolar Detection from the Brachioradialis Muscle: A Scoping Review," *Sensors*, vol. 21, no. 21, p. 7322, 2021. doi: 10.3390/s21217322

7. J. P. Aagaard et al., "Re-Evaluating Electromyogram–Force Relation in Healthy Biceps Brachii Muscles Using Complexity Measures," *Entropy*, vol. 19, no. 11, p. 624, 2017. doi: 10.3390/e19110624

8. S. P. Chung, J. G. Jo, and J. H. Kim, "An Exploratory Study of Biceps Brachii Electromyographic Activity During Traditional Dumbbell Versus Bayesian Cable Curls," *Front. Sports Act. Living*, 2025. doi: 10.3389/fsals.2025.PMC12550948
