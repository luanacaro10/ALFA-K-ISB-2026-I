# INFORME LABORATORIO EEG ( Electroencefalograma )
## Adquisición de Señales Electroencefalográficas  
### Introducción a Señales Biomédicas  
Universidad Peruana Cayetano Heredia  
Facultad de Ciencias e Ingeniería  
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

El presente experimento tuvo como objetivo adquirir y analizar señales EEG en diferentes condiciones comportamentales para identificar patrones característicos de actividad cerebral. Se empleó el dispositivo BITalino (r)evolution Board Kit BLE/BT con software OpenSignals, siguiendo el protocolo de la guía de clase del curso.
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

El experimento se llevó a cabo siguiendo el protocolo establecido en la guía de práctica correspondiente. Se registraron señales EEG del canal A4 a una frecuencia de muestreo de 100 Hz, cumpliendo con el teorema de muestreo de Nyquist-Shannon (mínimo 2 × 48 Hz = 96 Hz).

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

<table align="center">
  <tr>
    <td align="center" width="25%">
      <b>Actividad 1: Ritmo Basal 1</b><br>
      <img src="https://github.com/user-attachments/assets/fecd9a85-efa6-46f9-943b-8a40698f1546" width="225"/><br>
      <small><b>Figura 1.</b> Serie de tiempo - Ritmo Basal 1</small>
    </td>
    <td align="center" width="25%">
      <b>Actividad 2: Apertura de Ojos</b><br>
      <img src="https://github.com/user-attachments/assets/11d18dec-f2fc-4acc-8ee5-d3a99800f866" width="225"/><br>
      <small><b>Figura 2.</b> Serie de tiempo - Apertura de Ojos y Visión Fija</small>
    </td>
    <td align="center" width="25%">
      <b>Actividad 3: Ritmo Basal 2</b><br>
      <img src="https://github.com/user-attachments/assets/3ba0244b-8aff-4d6f-bafb-7b36056b4192" width="225"/><br>
      <small><b>Figura 3.</b> Serie de tiempo - Ritmo Basal 2</small>
    </td>
    <td align="center" width="25%">
      <b>Actividad 4: Artefactos</b><br>
      <img src="https://github.com/user-attachments/assets/1f40c993-c149-4c23-bc10-1fa6925bf51e" width="225"/><br>
      <small><b>Figura 4.</b> Serie de tiempo - Artefactos (Parpadeo y Masticación)</small>
    </td>
  </tr>
</table>

<table align="center">
  <tr>
    <td align="center" width="33%">
      <b>Actividad 5: Ritmo Basal 3</b><br>
      <img src="https://github.com/user-attachments/assets/af830a58-f679-4c1a-8e6f-9d0b58f0c9c7" width="225"/><br>
      <small><b>Figura 5.</b> Serie de tiempo - Ritmo Basal 3</small>
    </td>
    <td align="center" width="33%">
      <b>Actividad 6a: Música Relajante</b><br>
      <img src="https://github.com/user-attachments/assets/29534a48-172f-4250-82a5-13386dea18c6" width="225"/><br>
      <small><b>Figura 6.</b> Serie de tiempo - Música Relajante</small>
    </td>
    <td align="center" width="33%">
      <b>Actividad 6b: Música Estresante</b><br>
      <img src="https://github.com/user-attachments/assets/371dae14-3284-44f2-83fd-daf2d98bd68d" width="225"/><br>
      <small><b>Figura 7.</b> Serie de tiempo - Música Estresante</small>
    </td>
  </tr>
</table>


### 2.4 Posicionamiento de Electrodos

Según el sistema internacional 10-20, se colocaron dos electrodos activos en la posición Fp2 (frontal-parietal derecha, por encima del ojo derecho) para registrar actividad del lóbulo frontal. Un electrodo de referencia se posicionó en la región mastoidea derecha (detrás de la oreja) [1].

Antes de la colocación de los electrodos, se limpió la piel con alcohol para reducir impedancias y garantizar una buena calidad de señal.


### 2.5 Configuración del Software

Se utilizó OpenSignals (r)evolution con los siguientes parámetros: canal A4 configurado como EEG, frecuencia de muestreo de 100 Hz, ganancia interna del amplificador de 40,000×, y filtro hardware pasa-banda de 0.8–48 Hz.

Esta configuración permite capturar todas las bandas de frecuencia relevantes de EEG (delta, theta, alpha, beta y gamma) con una resolución ADC de 10 bits (resolución aprox ≈ 3.2 µV/LSB).


### 2.6 Procesamiento de la señales de EEG

Los datos crudos (*raw data*) de EEG adquiridos mediante el dispositivo BITalino se registran originalmente como valores digitales discretos (cuentas del convertidor analógico-digital). Para que estos datos tengan validez en el análisis fisiológico, es necesario someterlos a un procesamiento de acondicionamiento digital que consta de dos pasos fundamentales: la conversión a unidades físicas y la eliminación del nivel continuo (DC offset).

#### 2.6.1. Conversión de Unidades Digitales a Microvoltios ($\mu\text{V}$)
Para transformar los valores cuantizados por el ADC a unidades de potencial eléctrico, se emplea la función de transferencia específica del sensor EEG del fabricante [3]. Esta ecuación revierte la cuantización y compensa la amplificación del hardware:

$$V_{\text{EEG}} (\text{V}) = \frac{\left(\frac{ADC}{2^{n}} - \frac{1}{2}\right) \cdot V_{cc}}{G_{\text{EEG}}}$$

Donde los parámetros fijos del sistema corresponden a:
*   $ADC$: Valor crudo registrado por el sensor en la columna del canal correspondiente.
*   $n = 10$: Resolución del convertidor ADC.
*   $V_{cc} = 3.3\text{ V}$: Voltaje de alimentación de operación del BITalino.
*   $G_{\text{EEG}} = 40000$: Ganancia interna del amplificador instrumental.

Dado que los potenciales eléctricos a nivel cortical son extremadamente pequeños, el resultado obtenido en voltios se multiplica por un factor de $10^6$ para escalar la señal directamente a **microvoltios ($\mu\text{V}$)**, que es la magnitud estándar para la lectura y análisis clínico de encefalogramas.

#### 2.6.2. Eliminación del Componente de Corriente Continua (DC Offset)
Las señales bioeléctricas registradas suelen presentar una desviación o nivel continuo en su línea base, conocido como *DC offset*. Este fenómeno se debe a los potenciales galvánicos que se generan en la interfaz entre los electrodos y la piel, así como a las características del acoplamiento electrónico.

Para aislar estrictamente las fluctuaciones de la actividad neuronal y preparar la señal, esta debe estar centrada en un promedio de cero voltios [4]. Para lograrlo, se resta la media aritmética global de la serie de tiempo a cada uno de los puntos de la señal previamente convertida:

$$EEG_{\text{centrado}}[i] = EEG_{\text{convertido}}[i] - \mu$$

Donde $\mu$ es el valor promedio de la amplitud de toda la señal en microvoltios. Este centrado es un paso estrictamente necesario antes de proceder a la aplicación de filtros digitales frecuenciales (para extraer bandas delta, theta, alfa, beta y gamma) o realizar la transformación al dominio de la frecuencia mediante la Transformada Rápida de Fourier (FFT).

---

## 3. Resultados


### 3.1 Adquisición de Señales por Actividad

A continuación, se presentan las señales electroencefalográficas (EEG) capturadas durante las siete etapas del protocolo experimental. Las señales han sido acondicionadas (convertidas a $\mu$V y con el *DC offset* removido) para representar la amplitud real de los biopotenciales en el dominio del tiempo.

<div align="center">
  <img src="https://github.com/user-attachments/assets/1a765e8a-f1c0-4248-af69-ce3d1a3ede1b" width="800"/><br>
  <p><b>Figura 1.</b> Series de tiempo de las señales EEG registradas durante las distintas fases del protocolo de adquisición.</p>
</div>

En el Ritmo Basal 1, la señal oscila predominantemente entre ±5 y ±15 µV, con picos 
esporádicos que alcanzan los ±30 µV a lo largo de los 63 segundos de registro. La 
condición de Apertura de Ojos presenta amplitudes similares (±5–20 µV), aunque se 
identifica una deflexión negativa pronunciada alrededor del segundo 12, que desciende 
hasta −40 µV, posiblemente asociada a un movimiento ocular involuntario. El Ritmo 
Basal 2 exhibe excursiones de hasta ±25–30 µV con un transitorio abrupto notable en 
torno al segundo 15.

La condición de Artefactos es la más irregular del conjunto: la señal mantiene amplitudes 
sostenidas de ±10–40 µV con una variabilidad morfológica notablemente mayor que en las 
condiciones de reposo, y eventos de alta amplitud distribuidos de manera continua a lo 
largo de los 63 segundos. El Ritmo Basal 3 presenta amplitudes de ±5–20 µV, 
visualmente similares a las de las fases de reposo previas.

Las condiciones de Música Relajante y Música Estresante presentan el rasgo temporal 
más distintivo del conjunto: ambas exhiben segmentos con morfología rectangular 
(mesetas planas en ±40 µV), especialmente pronunciados entre los segundos 25–50 en 
Música Relajante y de manera más extensa en Música Estresante. Estas mesetas 
constituyen la firma característica de la saturación del ADC del dispositivo de adquisición.


### 3.2 Análisis Espectral (Transformada Rápida de Fourier)

Para evaluar la distribución de energía en las diferentes bandas de frecuencia cerebrales, se trasladó la señal del dominio del tiempo al dominio de la frecuencia mediante la Transformada Rápida de Fourier (FFT). 

La magnitud del espectro fue convertida a una escala logarítmica en decibelios (dB) utilizando la ecuación $20 \log_{10}(\text{Magnitud})$. Este ajuste es crucial en el análisis de EEG para compensar la atenuación natural $1/f$ de las ondas cerebrales y permitir la correcta visualización de la actividad en las bandas de mayor frecuencia (Beta y Gamma).

<div align="center">
  <img src="https://github.com/user-attachments/assets/09482d8b-e5bb-4106-b9dd-ec31cd2dba24" width="800"/><br>
  <p><b>Figura 8.</b> Espectro de frecuencia de las señales EEG por actividad (Magnitud en dB).</p>
</div>


En la Figura 8 se observa que la energía espectral se concentra en la banda Delta 
(0.5–4 Hz) para todas las condiciones, con magnitudes que decaen progresivamente 
hacia frecuencias mayores siguiendo un perfil tipo 1/f. Los Ritmos Basales 1, 2 y 3 
presentan picos máximos de entre 0 y +5 dB en el extremo inferior de la banda Delta, 
descendiendo hasta −20 a −30 dB en las bandas Beta y Gamma. La condición de 
Apertura de Ojos muestra un perfil espectral prácticamente idéntico al de los basales, 
sin evidencia de supresión diferenciada en la banda Alpha (8–13 Hz).

La condición de Artefactos registra el nivel espectral más elevado del protocolo, con 
magnitudes de +10 a +15 dB en la banda Delta, lo que representa un incremento de 
aproximadamente 10–15 dB respecto a los ritmos basales. Este incremento se extiende 
también hacia las bandas Theta y Alpha, donde los valores se sitúan entre −5 y −15 dB, 
en contraste con los −15 a −25 dB registrados en los basales. Las condiciones de 
Música Relajante y Música Estresante presentan picos de +15 dB en Delta, superiores 
incluso a los de la condición de Artefactos, aunque este valor está influenciado por la 
saturación del ADC documentada en el dominio del tiempo. En ninguna de las siete 
condiciones se identifica un pico diferenciado en la banda Alpha ni en la banda Beta.

## 4. Discusión

El conjunto de registros presentados corresponde a una sesión de adquisición continua, por lo que cada condición experimental hereda el contexto fisiológico de la fase precedente. Esta continuidad es relevante para interpretar las transiciones abruptas observadas tanto en el dominio del tiempo como en el espectro de frecuencias, ya que los cambios bruscos entre fases no responden únicamente al estímulo aplicado en ese instante, sino también al estado residual del sistema nervioso y muscular de la participante.

### 4.1 Ritmos Basales como Referencia Espectral

Los tres registros de reposo (Ritmo Basal 1, 2 y 3) constituyen la referencia fisiológica del experimento. En el dominio del tiempo, la señal oscila entre ±5 y ±15 µV con picos esporádicos que alcanzan los ±30 µV, lo cual es consistente con la amplitud típica de señales EEG de un único canal en reposo con ojos cerrados. En el dominio de la frecuencia (Figura 8), los tres registros presentan un perfil espectral de tipo 1/f: la energía es máxima en la banda Delta (0.5–4 Hz), con valores entre 0 y +5 dB, y decrece progresivamente hacia las bandas Theta, Alpha, Beta y Gamma, donde los niveles se sitúan entre −15 y −30 dB. Este patrón de decaimiento espectral es una característica intrínseca de las oscilaciones corticales en reposo y ha sido documentado extensamente en la literatura de electroencefalografía cuantitativa. La reproducibilidad de este perfil entre los tres registros basales, a pesar de estar intercalados con condiciones de estimulación, confirma que la participante logró recuperar un estado de reposo comparable en cada ocasión.

### 4.2 Apertura de Ojos: Transición y Artefacto de Movimiento Ocular

Al comparar el Ritmo Basal 1 con la condición de "Apertura de Ojos", la amplitud temporal general se mantiene en un rango similar (±5–20 µV). Sin embargo, se observa un pico del segundo 12 que consiste en una deflexión bifásica de gran amplitud que desciende hasta −40 µV. Este cambio abrupto no corresponde a actividad cortical, sino al artefacto generado por el movimiento ocular en el momento de la apertura. El globo ocular actúa como un dipolo eléctrico, con la córnea cargada positivamente respecto a la retina. Durante la apertura palpebral, el ojo ejecuta un movimiento de rotación superior conocido como fenómeno de Bell, lo que aproxima la córnea positiva hacia los electrodos frontales y genera una deflexión positiva seguida de una negativa que se propaga al cuero cabelludo con amplitudes que superan ampliamente las de la señal EEG subyacente [7]. Adicionalmente, el músculo orbicular del ojo (orbicularis oculi), inervado por el nervio facial (VII par craneal), genera su propia señal electromiográfica durante el acto de parpadear, la cual contamina el EEG principalmente en el rango de 0 a 12 Hz, solapándose con las bandas Delta y Theta [7].

Desde el punto de vista espectral, se esperaba que la apertura ocular produjera una supresión medible de la actividad en la banda Alpha (8–13 Hz), fenómeno conocido como desincronización relacionada con eventos (ERD), que ha sido demostrado con solidez por Pfurtscheller y Lopes da Silva [8] y confirmado por Barry et al.[5], quienes reportaron una reducción global del ritmo Alpha al pasar de la condición de ojos cerrados a ojos abiertos en reposo. Esta supresión no es visible en la Figura 8 dado que, como se discute en la sección de Limitaciones, la posición del electrodo no corresponde a la región occipital (Oz), que es el sitio óptimo para la detección del ritmo Alpha, y la relación señal-ruido del BITalino no es suficiente para resolver componentes de baja amplitud en condiciones subóptimas de registro.

### 4.3 Condición de Artefactos: Parpadeo y Masticación

La condición de Artefactos es la que produce los cambios más marcados y los más comprensibles desde el marco teórico. En el dominio del tiempo, la señal presenta de manera sostenida amplitudes de ±10–40 µV con eventos repetitivos de alta amplitud distribuidos a lo largo de los 63 segundos, lo que contrasta claramente con la envolvente más regular de los basales. En el espectro, esta condición alcanza picos de +10 a +15 dB en la banda Delta, superando en 10–15 dB a los registros basales, con un incremento que se extiende de manera apreciable hacia las bandas Theta y Alpha.

Este comportamiento es la superposición de dos fuentes de interferencia con características espectrales distintas. Por un lado, el parpadeo voluntario activa el músculo orbicular del ojo (inervado por el VII par craneal) y genera un potencial corneorretiniano bifásico que se propaga al cuero cabelludo como una onda lenta de gran amplitud, cuya energía se concentra en el rango de 0 a 12 Hz, solapándose directamente con las bandas Delta, Theta y Alpha del EEG [7]. Por otro lado, la masticación activa el músculo masetero y el músculo temporal, ambos inervados por la rama mandibular del nervio trigémino (V par craneal, rama V3). Estos músculos, ubicados directamente sobre el cráneo, generan señales EMG con un espectro de banda ancha que comienza alrededor de los 15–20 Hz y cuyo pico de potencia se sitúa entre 20 y 60 Hz según Goncharova et al. [6], quienes además demostraron que incluso contracciones débiles del músculo temporal producen EMG detectable desde frecuencias tan bajas como 2 Hz, invadiendo las bandas Delta, Theta y Alpha en toda la superficie del cuero cabelludo por conducción de volumen. La combinación de ambos fenómenos explica el incremento espectral observado en la Figura 8 para esta condición, que abarca desde la banda Delta hasta la banda Gamma de manera continua.

### 4.4 Ritmo Basal 3: Evidencia de Recuperación

El "Ritmo Basal 3", registrado inmediatamente después de la condición de Artefactos, presenta amplitudes temporales de ±5–20 µV y un perfil espectral de 0 a +5 dB en Delta, que es comparable al de los basales anteriores. Esta recuperación, observada en apenas 30 segundos, evidencia que la actividad de alta amplitud registrada durante la fase de Artefactos era de origen muscular y no neural: una vez que la participante detuvo el parpadeo voluntario y la masticación, la actividad EMG cesó y la señal retornó a los niveles de referencia. Este hallazgo es coherente con la naturaleza transitoria de los artefactos miogénicos documentada en la literatura [6] y confirma que los tres registros basales del protocolo son representativos del estado de reposo de la participante.

### 4.5 Condiciones de Música: Saturación y sus Causas

Las condiciones de "Música Relajante" y "Música Estresante" presentan el comportamiento más complejo e irregularmente de todo el protocolo. En el dominio del tiempo, ambas exhiben mesetas planas en ±40 µV, siendo estas más frecuentes y extensas en la condición de "Música Estresante". En el espectro, ambas condiciones muestran los mayores niveles de energía en banda Delta del experimento, con picos de +15 dB, superiores incluso a los de la condición de Artefactos.

Las mesetas rectangulares observadas en la señal temporal son la firma inequívoca de la saturación del convertidor analógico-digital (ADC) del BITalino: cuando la amplitud instantánea de la señal supera el rango de entrada del sensor (±40 µV en estas condiciones de ganancia), el ADC no puede representar valores mayores y recorta la señal, generando ese techo artificial. La causa principal de esta saturación no es la actividad EEG en sí, sino la actividad muscular involuntaria asociada al estado emocional de la participante durante la escucha. La música estresante, al inducir un estado de alerta o disconfort, activa el sistema nervioso autónomo simpático y genera un aumento del tono muscular facial y cefálico, microexpresiones faciales y tensión en la musculatura del cuello y el cuero cabelludo, todo lo cual produce señales EMG de gran amplitud que se suman vectorialmente a la señal EEG y saturan el amplificador [9]. Este fenómeno es más pronunciado en la condición de "Música Estresante" que en la "Relajante", como muestra la mayor extensión temporal de los episodios de clipping en la Figura 1, lo cual es consistente con la mayor activación muscular esperada bajo estímulos auditivos displacenteros.

Desde el punto de vista espectral, la saturación del ADC introduce distorsión armónica en la señal: el recorte de una onda sinusoidal genera armónicos artificiales a múltiplos de la frecuencia fundamental que no existen en la señal original. Esto explica el incremento espectral observado a lo largo de todas las bandas, incluyendo Beta y Gamma, en estas dos condiciones. Por tanto, los valores espectrales de "Música Relajante" y "Música Estresante" no reflejan la actividad neural real de la participante sino la respuesta del sistema de adquisición ante una señal de entrada que excede su rango dinámico. Bajo condiciones de registro adecuadas, estudios como el de Sammler et al. [9] han demostrado que la música placentera se asocia con un incremento de la potencia Theta en la línea media frontal, mientras que la música displacentera produce una disminución de la frecuencia cardíaca y diferencias espectrales medibles. La imposibilidad de replicar estos hallazgos en el presente experimento no contradice la evidencia existente, sino que ilustra cómo los artefactos de origen muscular y la saturación del ADC pueden enmascarar por completo la señal neural de interés.

---

## 5. Limitaciones

La primera limitación identificada es la saturación del ADC del BITalino durante las condiciones de "Música Relajante" y "Música Estresante". El sensor EEG del dispositivo opera con un rango de entrada limitado y, cuando la señal combinada (EEG + EMG + movimiento) supera ese umbral, la onda es recortada, generando las mesetas características visibles en la Figura 1. Este recorte invalida tanto el análisis temporal como el espectral de esas condiciones e impide extraer conclusiones sobre diferencias en el estado emocional de la participante a partir de los datos registrados. La solución metodológica consiste en reducir la impedancia de la interfaz electrodo-piel mediante una preparación adecuada de la superficie (abrasión suave y uso de pasta conductora), lo que disminuye la amplitud de los artefactos de movimiento y reduce la probabilidad de saturación.

Una segunda limitación concierne a la configuración de un único canal bipolar. El BITalino registra la diferencia de potencial entre dos puntos del cuero cabelludo, lo que impide cualquier tipo de localización espacial de la actividad cerebral y hace que la señal registrada sea la mezcla de contribuciones corticales, musculares y ambientales sin posibilidad de separación mediante análisis de componentes independientes (ICA) u otras técnicas multivariadas que requieren al menos 8 a 16 canales.

La posición del electrodo representa una tercera limitación crítica. La respuesta Alpha es máxima en la región occipital (Oz) según el sistema internacional 10-20, y su amplitud disminuye considerablemente en posiciones frontales o temporales. Si el electrodo no fue posicionado en Oz, la amplitud del ritmo Alpha en reposo puede ser tan pequeña que queda por debajo del nivel de ruido del sistema, explicando la ausencia del pico Alpha esperado en los basales con ojos cerrados y la ausencia del fenómeno de Alpha blocking en la condición de "Apertura de Ojos".

Finalmente, el protocolo fue realizado en un único participante, lo que limita la posibilidad de extrapolar los resultados obtenidos a una población general. La actividad EEG presenta una elevada variabilidad interindividual, tanto en amplitud como en la distribución topográfica y predominancia de los distintos ritmos cerebrales. En consecuencia, los patrones temporales y espectrales descritos corresponden exclusivamente al perfil neurofisiológico de la participante evaluado durante esta sesión experimental.

---
# 6. Aplicaciones 

Actualmente, el EEG es ampliamente utilizado en neurología clínica para el diagnóstico y monitoreo de trastornos como epilepsia, alteraciones del sueño y enfermedades neurodegenerativas, debido a su alta resolución temporal y sensibilidad a cambios en la actividad cerebral [10].
Otra aplicación importante es el neurofeedback, una técnica terapéutica no invasiva en la que el paciente aprende a modular su actividad cerebral mediante retroalimentación en tiempo real, siendo utilizada en casos de TDAH, epilepsia, ansiedad y rehabilitación cognitiva [11].
Asimismo, el EEG constituye la base de muchas interfaces cerebro-computadora (BCI), sistemas que permiten la comunicación directa entre el cerebro y dispositivos externos. Estas tecnologías se investigan para asistir a pacientes con parálisis severa, accidentes cerebrovasculares o síndrome de enclaustramiento, facilitando la comunicación y el control de prótesis o dispositivos robóticos [12].
De igual manera, se investigan modelos basados en deep learning y redes neuronales convolucionales, como EEGNet, para mejorar la precisión de los sistemas BCI y reducir el tiempo de calibración entre usuarios [13].

---

# 7. Conclusiones

El presente laboratorio permitió adquirir y analizar señales electroencefalográficas 
bajo siete condiciones experimentales distintas utilizando el dispositivo BITalino a 
una frecuencia de muestreo de 100 Hz. A partir del procesamiento realizado, que incluyó 
la conversión a microvoltios, la eliminación del componente DC y el análisis espectral 
mediante FFT en escala logarítmica, se extraen las siguientes conclusiones.

Los registros de reposo (Ritmo Basal 1, 2 y 3) mostraron un comportamiento estable 
y reproducible a lo largo de toda la sesión, con amplitudes temporales de ±5–15 µV y 
un perfil espectral de decaimiento tipo 1/f con predominancia en la banda Delta. Esta 
consistencia entre las tres fases basales confirma que el protocolo de reposo fue 
suficiente para que el sujeto retornara a un estado de referencia comparable tras cada 
condición de estimulación, lo que otorga validez relativa a las comparaciones entre fases.

La condición de Apertura de Ojos no produjo la supresión del ritmo Alpha esperada, 
conocida como fenómeno de Alpha blocking o desincronización relacionada con eventos. 
Esto se atribuye principalmente a la posición subóptima del electrodo de registro, 
que no correspondió a la región occipital (Oz), sitio donde dicho ritmo alcanza su 
máxima expresión. Este resultado evidencia que la selección del montaje de electrodos 
es una variable crítica en el diseño de cualquier protocolo EEG, y que su incumplimiento 
puede impedir la observación de fenómenos neurofisiológicos bien establecidos en la 
literatura, aun cuando estos ocurran de manera efectiva en el sujeto.

La condición de Artefactos fue la más exitosa del protocolo en cuanto a la 
correspondencia entre el comportamiento esperado y el observado. El parpadeo voluntario 
y la masticación generaron un incremento espectral de 10–15 dB en la banda Delta 
respecto a los basales, con una elevación que se extendió hacia las bandas Theta y Alpha. 
Este resultado confirma experimentalmente que las actividades musculares cefálicas, en 
particular las controladas por el nervio facial y por la rama mandibular del nervio 
trigémino, producen interferencias de gran amplitud que contaminan todas las bandas 
relevantes del EEG y pueden enmascarar por completo la actividad cortical subyacente.

Las condiciones de Música Relajante y Música Estresante no pudieron ser interpretadas 
de manera válida desde el punto de vista neurofisiológico, debido a la saturación del 
ADC del dispositivo de adquisición. La tensión muscular involuntaria asociada al estado 
emocional del sujeto, amplificada por las características acústicas del estímulo 
estresante, generó señales de amplitud superior al rango dinámico del sensor, produciendo 
el recorte de la onda y la consecuente distorsión armónica del espectro. Esta limitación 
no invalida la hipótesis de que la música de distinta valencia emocional induce cambios 
diferenciados en el EEG, sino que señala que su verificación experimental requiere 
condiciones de adquisición más controladas, incluyendo una preparación adecuada de la 
piel y una verificación de la impedancia antes del inicio del registro.

En términos generales, el experimento cumplió su objetivo formativo al exponer de manera 
práctica los principales desafíos asociados a la adquisición de señales EEG con 
dispositivos portátiles de bajo costo: la sensibilidad del sistema a los artefactos de 
origen muscular y ocular, la dependencia del contenido espectral respecto al sitio de 
registro, y la importancia de mantener la señal dentro del rango dinámico del amplificador. 
Estos aprendizajes metodológicos son tan relevantes como los propios hallazgos 
neurofisiológicos, pues condicionan directamente la validez de cualquier conclusión 
extraída a partir de registros EEG obtenidos con equipos de esta categoría.

---

## 8. Referencias

[1] L. De La Cruz, Guía No. 4 – Uso de BITalino para EEG. Lima, Perú: Universidad Peruana Cayetano Heredia, Introducción a Señales Biomédicas, 2025.

[2] M. Proença and K. Mrotzeck, BITalino (r)evolution Home Guide #3: Electroencephalography (EEG). Lisbon, Portugal: PLUX – Wireless Biosignals, S.A., 2021.

[3] PLUX Wireless Biosignals, “(r)evolution EEG Sensor Datasheet,” 2021. [Online]. Available: PLUX EEG Datasheet

[4] S. Sanei and J. A. Chambers, EEG Signal Processing. Hoboken, NJ, USA: Wiley, 2007. [Online]. Available: EEG Signal Processing PDF

[5] R. J. Barry, A. R. Clarke, S. J. Johnstone, C. A. Magee, and J. A. Rushby, “EEG differences between eyes-closed and eyes-open resting conditions,” Clinical Neurophysiology, vol. 118, no. 12, pp. 2765–2773, 2007, doi: 10.1016/j.clinph.2007.07.028.

[6] I. I. Goncharova, D. J. McFarland, T. M. Vaughan, and J. R. Wolpaw, “EMG contamination of EEG: spectral and topographical characteristics,” Clinical Neurophysiology, vol. 114, no. 9, pp. 1580–1593, 2003, doi: 10.1016/S1388-2457(03)00093-2.

[7] S. D. Muthukumaraswamy, “High-frequency brain activity and muscle artifacts in MEG/EEG: a review and recommendations,” Frontiers in Human Neuroscience, vol. 7, p. 138, 2013, doi: 10.3389/fnhum.2013.00138.

[8] G. Pfurtscheller and F. H. Lopes da Silva, “Event-related EEG/MEG synchronization and desynchronization: basic principles,” Clinical Neurophysiology, vol. 110, no. 11, pp. 1842–1857, 1999, doi: 10.1016/S1388-2457(99)00141-8.

[9] D. Sammler, M. Grigutsch, T. Fritz, and S. Koelsch, “Music and emotion: electrophysiological correlates of the processing of pleasant and unpleasant music,” Psychophysiology, vol. 44, no. 2, pp. 293–304, 2007, doi: 10.1111/j.1469-8986.2007.00497.x.

[10] M. L. Schaworonkow and P. Voytek, “Longitudinal changes in aperiodic and periodic activity in electrophysiological recordings in the first seven months of life,” Brain Sciences, 2023. [Online]. Available: PMC10729551

[11] “High variability periods in the EEG distinguish cognitive brain states,” Brain Sciences, 2023. [Online]. Available: PMC10694284

[12] J. J. Daly and J. R. Wolpaw, “Brain–computer interfaces for communication and rehabilitation,” Nature Reviews Neurology, vol. 4, no. 11, pp. 705–713, 2008.

[13] V. J. Lawhern, A. J. Solon, N. R. Waytowich, S. M. Gordon, C. P. Hung, and B. J. Lance, “EEGNet: A compact convolutional neural network for EEG-based brain–computer interfaces,” 2016. [Online]. Available: EEGNet arXiv

---

## Anexos

**Anexo A. Código de procesamiento y análisis de señales EEG**

El código  utilizado disponible en:

🔗 [Ver notebook en Google Colab](https://colab.research.google.com/drive/18y1eu8cLpeBFbWPLCxk6XOOyrCTAC4WB?usp=sharing)
