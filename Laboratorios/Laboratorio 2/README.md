
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

<p align="center">
  <img width="300" height="400" alt="image" src="https://github.com/user-attachments/assets/b74a3b8f-108c-4bfc-91f2-ad9582c56c01" /><br>
  <strong>Figura 1.</strong> Colocación de electrodos para evaluación del músculo FCR.
</p>

Para la evaluación del músculo BB, el electrodo de referencia también se posicionó en el codo y los otros dos electrodos fueron alineados con las fibras musculares.

<p align="center">
  <img width="300" height="400" alt="image" src="https://github.com/user-attachments/assets/1f415d5b-512f-4ef9-a14c-f2a68a509a7f" /><br>
  <strong>Figura 2.</strong> Colocación de electrodos para evaluación del músculo BB.
</p>

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

Las tres pruebas del Ejercicio 1 registraron señales sEMG caracterizadas por rafagas de actividad muscular claramente diferenciadas en el tiempo, coincidentes con las fases de contracción voluntaria. Se observó una morfología similar en las tres pruebas: picos de amplitud positivos y negativos alternantes durante las fases activas, con retorno a la línea base durante los periodos de reposo entre contracciones. La amplitud de la señal durante la contracción fue visualmente superior al ruido de fondo registrado en reposo, lo que indica activación efectiva del bíceps braquial. No se apreció tendencia de reducción de amplitud entre repeticiones sucesivas, sugiriendo ausencia de fatiga significativa en esta condición.


### 3.2 Ejercicio 2 — Flexión con contrapeso (isométrica)

En el Ejercicio 2, las señales sEMG mostraron ráfagas de actividad de mayor amplitud en comparación con el Ejercicio 1. Durante los episodios de contracción isométrica resistida, la señal presentó actividad sostenida y de mayor densidad de deflexiones. La amplitud pico fue notoriamente superior a la observada en la condición sin contrapeso. El patrón temporal fue de tipo continuo durante el periodo de esfuerzo, a diferencia del patrón pulsátil breve del ejercicio libre. Entre las tres pruebas no se observaron diferencias cualitativas relevantes en la morfología general de la señal.


<p align="center">
  <img width="500" alt="image" src="https://github.com/user-attachments/assets/f95d1d1a-13aa-4536-8dba-5e9ac7486d05" /><br>
  <strong>Figura 3.</strong> Señales EMG en función del tiempo de flexión de muñeca
</p>


<p align="center">
  <img width="500" alt="image" src="https://github.com/user-attachments/assets/11dde9d8-ccf4-4055-a96f-e2b8d1e5e727" /><br>
  <strong>Figura 4.</strong> Análisis en función de la frecuencia (Hz) de flexión de muñeca
</p>


### 3.3 Ejercicio 3 — Flexión sin contrapeso

Las señales del Ejercicio 3 presentaron rafagas de actividad sEMG con morfología análoga al Ejercicio 1. Las amplitudes absolutas fueron comparables entre ambos ejercicios, lo que es consistente con la ausencia de fatiga acumulada entre sesiones separadas por descansos adecuados. Se identificaron claramente los periodos de activación y de reposo, con activaciones breves y bien delimitadas temporalmente, confirmando la reproducibilidad del patrón de señal en condición libre.


### 3.4 Ejercicio 4 — Flexión con contrapeso (isométrica)

El Ejercicio 4 mostró, al igual que el Ejercicio 2, señales sEMG de mayor amplitud que su contraparte sin contrapeso (Ejercicio 3). Los picos de amplitud durante las contracciones resistidas fueron pronunciados y la señal presentó mayor densidad de actividad durante el periodo de esfuerzo. Las tres pruebas mostraron patrones similares entre sí y coherentes con los registrados en el Ejercicio 2 
Estos resultados fueron similares dependiendo de la situación, incluso si fueron realizadas en diferentes músculos. Esto implica el comportamiento similar de actividad muscular en sin y con contrapeso.

<p align="center">
  <img width="500" alt="image" src="https://github.com/user-attachments/assets/eb3b22b3-1dd7-4343-83cb-b18a8a2ec13a" /><br>
  <strong>Figura 5.</strong> Señales EMG en función del tiempo durante el ejercicio de flexión de codo
</p>

<p align="center">
  <img width="500" alt="image" src="https://github.com/user-attachments/assets/284deaa2-3795-4ab0-ab21-d6e24fe53d60" /><br>
  <strong>Figura 6.</strong> Análisis en función de la frecuencia (Hz) durante el ejercicio de flexión de codo
</p>


## DISCUSIÓN

### 4.1 Análisis de resultados

Al observar los patrones de sEMG, destaca la clara diferencia entre las pruebas con y sin contrapeso. Esto responde a que, ante una mayor demanda de fuerza, el sistema nervioso incrementa el reclutamiento de unidades motoras y su frecuencia de disparo, lo que se traduce visualmente en una señal de mayor amplitud y densidad temporal. Básicamente, la sEMG captura las señales mioeléctricas que el cerebro envía como instrucciones de activación hacia los músculos esqueléticos, ya sea para movimientos finos o de alta carga.

Por ello, al comparar ambas condiciones, la señal refleja fielmente ese aumento en el esfuerzo neuromuscular, mostrando una actividad eléctrica mucho más intensa cuando existe una carga externa que vencer, pues en las condiciones sin contrapeso (ejercicios 1 y 3), las señales mostraron ráfagas breves y bien delimitadas, con retorno claro a la línea base entre contracciones. En cambio, bajo contracción isométrica resistida (ejercicios 2 y 4), la actividad fue sostenida y de mayor magnitud pico, lo que refleja fielmente el mayor esfuerzo neuromuscular requerido para vencer la carga externa. [2].

Esta relación entre la amplitud de la señal sEMG y el nivel de fuerza generado ha sido ampliamente documentada, aunque no es perfectamente lineal y depende de factores como la geometría muscular y la profundidad de las fibras activas [3]. Vale notar que este comportamiento fue consistente entre músculos: tanto el FCR como el BB respondieron de manera análoga a las mismas condiciones de carga, a pesar de cumplir funciones distintas (flexión de muñeca versus flexión de codo).

Esto sugiere que el principio de modulación de la activación muscular opera de forma similar independientemente del grupo muscular involucrado, siempre que la demanda mecánica sea comparable. La sEMG captura precisamente esas instrucciones de activación que el sistema nervioso envía al músculo esquelético, ya sea para movimientos de baja o alta carga [2], por lo que la señal se convierte en un reflejo directo del esfuerzo generado.

Además de eso, la ausencia de tendencia decreciente en la amplitud a lo largo de las repeticiones sucesivas dentro de cada ejercicio indica que no se llegó a una fatiga muscular significativa durante el laboratorio. Esto fue esperado dado el tiempo de descanso de aproximadamente 2 minutos entre pruebas y la duración moderada de cada contracción.

En condiciones de fatiga, se esperaría una disminución progresiva de la amplitud junto con un desplazamiento del contenido espectral hacia frecuencias más bajas [4].

Por otro lado, el análisis espectral mediante FFT mostró que tanto para el FCR como para el BB la energía de la señal se concentró en el rango de 20 a 200 Hz, consistente con el rango fisiológico típico de la sEMG de superficie [5].

Al comparar condiciones, las pruebas con contrapeso presentaron una mayor magnitud espectral, especialmente en frecuencias bajas y medias, lo que refleja el mayor reclutamiento de unidades motoras y la consecuente superposición de potenciales de acción [1]. Este comportamiento fue más pronunciado en el BB que en el FCR, diferencia atribuible a la mayor masa muscular del primero y a su influencia sobre la amplitud captada por los electrodos [3].

#### 4.2.1 Tamaño muestral

El estudio se realizó con una única participante, lo que limita completamente la posibilidad de generalizar los resultados. En la literatura, los estudios de referencia en sEMG del bíceps braquial suelen incluir entre 10 y 50 sujetos para lograr un poder estadístico adecuado [1, 4]. Por ello, los resultados obtenidos en este trabajo tienen un carácter principalmente exploratorio y descriptivo, mas no generalizable.

#### 4.2.2 Ausencia de normalización por MVC

Una limitación importante del estudio es que no se realizó la normalización de las señales sEMG respecto a la contracción voluntaria máxima (MVC). Sin este procedimiento, los valores de amplitud no pueden compararse de manera precisa, especialmente entre distintas mediciones o sesiones. De acuerdo con las guías internacionales SENIAM y otros estudios en el área, la normalización por MVC es el método estándar cuando se buscan comparaciones cuantitativas en sEMG de superficie [5].

#### 4.2.3 Control de la contracción isométrica

La resistencia manual aplicada durante los Ejercicios 2 y 4 introduce una fuente de variabilidad que no fue controlada. A diferencia de equipos como los dinamómetros isocinéticos, este tipo de resistencia no permite asegurar que la fuerza se mantenga constante entre pruebas. Como consecuencia, las condiciones isométricas evaluadas no son completamente reproducibles ni cuantificables. En estudios más controlados, se suelen utilizar sistemas de carga con retroalimentación visual para garantizar niveles de fuerza más consistentes [2].

#### 4.2.4 Control del tiempo de descanso

El descanso entre pruebas fue de aproximadamente dos minutos, cronometrado de manera informal con el celular de un integrante del grupo. Si bien esto da una referencia del tiempo transcurrido, no garantiza una medición precisa ni un control riguroso del reposo, especialmente considerando que en condiciones isométricas máximas dos minutos podrían ser insuficientes para una recuperación metabólica completa y eso podría influir en la amplitud de las pruebas siguientes [4].


#### 4.2.5 Análisis cualitativo sin cuantificación de parámetros

EEl presente informe se basa en la inspección visual de las señales sin extraer parámetros cuantitativos como el valor RMS, la frecuencia mediana (MDF), la frecuencia media (MPF) o el índice de fatiga de Dimitrov. Estos indicadores son los referentes estándar en la literatura para caracterizar y comparar señales sEMG [5,6]. Su ausencia limita la capacidad de comparar los resultados con los valores reportados en estudios previos y revisiones sistemáticas del área.

  
## REFERENCIAS

[1] B. Yu et al., "The effects of the biceps brachii and brachioradialis on elbow flexor muscle strength and spasticity in stroke patients," BioMed Research International, vol. 2022, Art. no. 1295908, Mar. 2022, doi: 10.1155/2022/1295908.

[2] Z. Li et al., "Surface electromyography as a natural human–machine interface: A review," IEEE/CAA Journal of Automatica Sinica, vol. 9, no. 7, pp. 1173–1185, Jul. 2022, doi: 10.1109/JAS.2022.105416.

[3] C. Disselhorst-Klug, T. Schmitz-Rode, and G. Rau, "Surface electromyography and muscle force: Limits in sEMG–force relationship and new approaches for applications," Clinical Biomechanics, vol. 24, no. 3, pp. 225–235, 2009, doi: 10.1016/j.clinbiomech.2008.08.003.

[4] C. Ortiz-Cruz, R. Bravo-Mancero, and S. Viñán-Garcés, "Evaluation of muscle fatigue using surface electromyography during isometric contractions in athletes and non-athletes," European Journal of Cardiovascular Medicine, vol. 15, no. 1, pp. 88–97, 2025, doi: 10.5083/ejcm.20453.

[5] P. Konrad, The ABC of EMG: A Practical Introduction to Kinesiological Electromyography. Scottsdale, AZ, USA: Noraxon Inc., 2005. [Online]. Available: https://www.noraxon.com

[6] P. M. R. Gouveia et al., "EMG amplitude and frequency parameters of muscular activity: Effect of resistance training based on electromyographic fatigue threshold," Journal of Electromyography and Kinesiology, vol. 17, no. 5, pp. 601–610, 2007, doi: 10.1016/j.jelekin.2007.09.001.

## Anexo

[![Abrir en Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1SN__Tj-o-Aq6T_Jlf-ueDq0E4eHAB2d3?usp=sharing)
