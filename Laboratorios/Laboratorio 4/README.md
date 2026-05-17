# Filtros Digitales en Procesamiento de Señales Biomédicas

## 1. Filtro Butterworth Pasa-Bajos

El Filtro Butterworth Pasa-bajos es uno de los filtros digitales más usados en el
procesamiento de señales biomédicas, ya que presenta una respuesta en frecuencia
suave y sin ondulaciones en la banda de paso. Esto permite conservar la forma original
de la señal biológica mientras elimina componentes de alta frecuencia no deseados [1].

Este filtro se utiliza para reducir el ruido de alta frecuencia producido por
interferencias electromagnéticas, movimiento muscular, artefactos electrónicos y
ruidos que vienen de equipos eléctricos. En señales biomédicas, el ruido se encuentra
fuera del rango de frecuencia útil de la señal, por lo que el filtro atenúa dichas
frecuencias y deja pasar únicamente la información importante [1].

En señales EMG, el filtro Butterworth pasa-bajos se emplea con frecuencias de corte
alrededor de 400 Hz para eliminar ruido de alta frecuencia y conservar la actividad
muscular importante [1]. En señales EKG, el filtro ayuda a eliminar ruido muscular y
otras interferencias de alta frecuencia que pueden alterar la visualización del complejo
QRS o de las ondas P y T; generalmente, las señales EKG contienen información útil
aproximadamente entre 0.05 Hz y 100–250 Hz, por lo que las frecuencias superiores son
filtradas usando filtros Butterworth pasa-bajos [2]. En señales EEG, los filtros
pasa-bajos se utilizan para eliminar artefactos musculares y ruido de alta frecuencia,
ya que la mayor parte de la actividad cerebral útil se encuentra por debajo de 30–60 Hz [3].

| Señal | Rango útil aproximado | Frecuencia de corte típica |
|---|---|---|
| EMG | 10 – 500 Hz | 400 Hz |
| ECG/EKG | 0.05 – 100/250 Hz | 100 – 250 Hz |
| EEG | 0.5 – 60 Hz | 30 – 60 Hz |

Entre sus características principales se encuentran: una respuesta sin ondulaciones
en la banda de paso, una transición suave entre la banda permitida y la banda eliminada,
la reducción del ruido de alta frecuencia conservando la forma de la señal biomédica,
y su amplio uso en MATLAB, Python y sistemas de adquisición biomédica [1]. Los ruidos
que elimina incluyen ruido de alta frecuencia, interferencia electromagnética, artefactos
musculares, ruido electrónico de equipos biomédicos y componentes no deseados por encima
de la frecuencia de corte [1].

---

## 2. Filtro Notch o Rechaza-Banda

El filtro Notch o rechaza-banda está diseñado para dejar pasar todo el espectro de
una señal excepto una banda muy estrecha de frecuencias que se desea eliminar. Posee
dos frecuencias de corte que delimitan esa banda de rechazo, y todo lo que queda fuera
de ella pasa sin atenuación. En señales biomédicas, esta banda de rechazo es tan angosta
que el filtro prácticamente deja intacta la señal, eliminando únicamente una frecuencia
muy puntual.

Su principal objetivo es eliminar la interferencia de la red eléctrica (*Power Line
Interference* o PLI), que aparece porque el cableado de cualquier edificio genera un
campo electromagnético que se cuela en los electrodos del equipo, sumándose a la señal
biológica como un zumbido constante. Esta interferencia está inevitablemente presente
en cualquier entorno clínico o de aprendizaje, ya sea como fuente de iluminación o de
alimentación del propio equipo de medición [4]. Dependiendo del país, opera a 50 Hz o
60 Hz, y además genera armónicos que también pueden contaminar la señal, por lo que a
veces se encadenan varios filtros Notch para eliminarlos [5].

En cuanto a su aplicación por tipo de señal: en el EKG, la PLI cae justo en el centro
del espectro diagnóstico (0.05–150 Hz), pudiendo enmascarar características críticas
como el complejo QRS o el segmento ST [4]. En el EMG, el problema se complica porque
el espectro muscular útil va de 20 a 500 Hz y los armónicos de la red pueden coincidir
con actividad muscular real, por lo que suele encadenarse más de un filtro Notch [5].
En el EEG, las señales cerebrales son tan pequeñas en amplitud que la interferencia de
red introduce picos que fácilmente se confunden con ritmos neurológicos, por lo que el
Notch se aplica siempre como primera etapa antes de cualquier análisis posterior [6].

---

## 3. Filtro de Respuesta Infinita al Impulso (IIR)

El filtro de respuesta infinita al impulso (IIR) es uno de los más empleados en el
procesamiento digital de señales biomédicas debido a que logra una alta atenuación
espectral con órdenes de filtro bajos, lo que se traduce en un menor costo computacional
frente a filtros como el de respuesta finita al impulso (FIR). Su funcionamiento se
basa en una estructura recursiva, donde la salida actual depende tanto de las entradas
como de las salidas anteriores, lo que le permite construir una respuesta en frecuencia
pronunciada con pocos coeficientes. Al ser más eficiente, resulta especialmente adecuado
para sistemas embebidos y dispositivos portátiles de monitoreo biomédico en tiempo real [7].

En términos generales, el filtro IIR actúa eliminando selectivamente las componentes
de frecuencia que se encuentran fuera de la banda de interés de la señal biológica,
pudiendo configurarse como pasa-bajos, pasa-altos, pasa-banda o filtro notch.

En señales **EMG**, cuya banda útil va entre 20 y 500 Hz, los principales ruidos son
la interferencia de la red eléctrica a 50 o 60 Hz y sus armónicos, los artefactos de
movimiento de electrodos por debajo de los 20 Hz, y la deriva de DC cercana a 0 Hz.
El filtro IIR Butterworth pasa-banda elimina simultáneamente la deriva de DC y el ruido
de movimiento en bajas frecuencias, mientras que su corte superior suprime el ruido
electromagnético de alta frecuencia. Como complemento, los filtros IIR Notch centrados
en 50 o 60 Hz cancelan la interferencia de red sin distorsionar la actividad muscular
adyacente [8, 9].

En cuanto al **EKG**, cuya banda útil abarca aproximadamente entre 0.5 y 40 Hz, el
filtro IIR Chebyshev pasa-banda de cuarto orden configurado entre 0.25 y 40 Hz ha
resultado útil para eliminar tanto la deriva de baja frecuencia como el ruido muscular
de alta frecuencia en una sola etapa de filtrado [10]. Este filtro obtiene una pendiente
de corte más pronunciada que el Butterworth equivalente debido al ripple controlado en
su banda de paso (0.5 dB), lo que permite aislar con mayor precisión el complejo QRS
y las ondas P y T sin requerir un orden de filtro elevado. No obstante, cuando coexiste
un ruido EMG intenso, el Butterworth IIR puede introducir ringing no lineal cerca de los
picos cardíacos, lo que representa una limitación a considerar en aplicaciones clínicas
de alta exigencia diagnóstica [7].

Finalmente, el **EEG** presenta una señal útil que se extiende de 0.5 a 50 Hz,
comprendiendo las bandas delta (0.5–4 Hz), theta (4–8 Hz), alpha (8–12 Hz), beta
(12–30 Hz) y gamma (30–50 Hz). En este contexto, el filtro IIR Chebyshev de cuarto
orden con 0.5% de ripple se ha demostrado superior tanto al FIR como al Butterworth en
la reducción de potencia de ruido con mayor fidelidad espectral, dado que es capaz de
separar con nitidez las subbandas cerebrales sin necesidad de ser de un orden elevado [11].
Adicionalmente, el filtro IIR Notch de 50 Hz se combina frecuentemente con umbrales
wavelet complementarios para abordar los artefactos oculares de baja frecuencia,
logrando una cadena de filtrado completa que preserva las señales cerebrales originales [7].

---

## 4. Filtro FIR

El filtro FIR (*Finite Impulse Response*) o de Respuesta Finita al Impulso es un filtro
digital no recursivo ampliamente utilizado en el procesamiento de señales biomédicas
debido a sus excelentes propiedades de estabilidad y control de fase. A diferencia de
los filtros IIR, la salida del filtro FIR depende únicamente de las muestras actuales
y pasadas de la entrada, sin realimentación de las salidas anteriores, lo que garantiza
que el filtro sea siempre estable sin importar su orden o configuración [12].

El filtro FIR se caracteriza por mantener una fase lineal, lo que permite preservar la
forma original de la señal sin distorsión de fase. Esta propiedad es crítica en
aplicaciones biomédicas donde se requiere analizar características morfológicas
específicas, como los complejos QRS en EKG o los eventos epileptiformes en EEG. Aunque
los filtros FIR requieren un orden más alto que los filtros IIR equivalentes para lograr
la misma atenuación, el control preciso de la respuesta en frecuencia y la ausencia de
distorsión de fase los hacen ideales en muchas aplicaciones clínicas [13].

En señales **EMG**, los filtros FIR pasa-banda con fase lineal se utilizan para extraer
información muscular entre 20–500 Hz, eliminando simultáneamente artefactos de movimiento
de electrodos por debajo de los 20 Hz y ruido de alta frecuencia por encima de los 500 Hz.
La fase lineal es particularmente importante en análisis de onsets musculares y
sincronización temporal de contracciones, donde la precisión en la detección del instante
exacto de activación es crítica [12].

En cuanto al **EKG**, los filtros FIR se diseñan típicamente para preservar el rango
de frecuencia útil entre 0.5–40 Hz o incluso 0.05–100 Hz en algunas aplicaciones, con
órdenes que oscilan entre 100 y 200 coeficientes. La preservación de la fase lineal
permite detectar con precisión características morfológicas del complejo QRS, las ondas
P y T, y el segmento ST, sin introducir distorsiones que pudieran llevar a
interpretaciones clínicas erróneas [13]. Los filtros FIR también pueden implementarse
como variantes Notch de banda muy estrecha para eliminar la interferencia de red (50 o
60 Hz) sin afectar las características cardíacas de interés [14].

En señales **EEG**, los filtros FIR se utilizan frecuentemente para aislar bandas
cerebrales específicas, permitiendo análisis espectrales independientes de delta
(0.5–4 Hz), theta (4–8 Hz), alpha (8–12 Hz), beta (12–30 Hz) y gamma (30–50 Hz).
La cascada de múltiples filtros FIR pasa-banda, uno para cada banda cerebral, es común
en sistemas de investigación clínica donde la fidelidad espectral es máxima [14].
Además, los filtros FIR Notch pueden cascadarse para eliminar múltiples armónicos de
la interferencia de red (50, 100, 150, 200 Hz) sin afectar las bandas de interés,
siendo especialmente útil en ambientes clínicos con alta contaminación electromagnética [12].

Entre los ruidos que elimina el filtro FIR se encuentran artefactos de movimiento de
baja frecuencia, ruido de alta frecuencia, interferencia de red eléctrica, artefactos
oculares en EEG, ruido muscular superpuesto en registros cardíacos, y componentes fuera
de la banda de interés específica. Su principal ventaja es que proporciona la máxima
fidelidad morfológica de la señal, garantizando que cualquier característica clínica
importante se conserve sin distorsión de fase.

---

## 5. Filtro Pasa-Altos

El filtro pasa-altos es un filtro digital que permite el paso de componentes de
frecuencia superiores a una frecuencia de corte establecida, mientras atenúa las
frecuencias inferiores. Es complementario al filtro pasa-bajos y esencial en el
procesamiento de señales biomédicas para eliminar derivas de línea base y artefactos
de movimiento que típicamente aparecen en las frecuencias más bajas del espectro [15].

El principal problema que resuelve es la deriva de línea base (*baseline wander*),
causada por movimiento del paciente, respiración y cambios lentos en la impedancia
del electrodo. Estos artefactos de muy baja frecuencia se superponen a la señal de
interés dificultando el diagnóstico, por lo que un filtro pasa-altos bien diseñado
es esencial [15].

En el **EKG**, la deriva de línea base causada por la respiración del paciente
(aproximadamente 0.1–0.5 Hz) y movimientos corporales es uno de los problemas más
comunes en la adquisición de señales cardíacas. El filtro pasa-altos Butterworth con
frecuencia de corte entre 0.5–1 Hz es estándar en equipos clínicos modernos, permitiendo
eliminar esta deriva mientras se preserva completamente el segmento ST y otras
características diagnósticas críticas [15]. La norma internacional para equipos de EKG
(IEC 60601-2-51) recomienda un filtro pasa-altos de al menos 0.05 Hz, asegurando que
se elimine el drift sin comprometer la información diagnóstica [16].

En señales **EMG**, existe una deriva lenta causada por variaciones de la impedancia
del electrodo y movimientos de la piel. Un filtro pasa-altos con frecuencia de corte
entre 5–10 Hz se utiliza típicamente en dispositivos portátiles para remover esta deriva
sin comprometer la información de actividad muscular real [16]. Esta configuración es
especialmente importante en sistemas de monitoreo a largo plazo donde la estabilidad de
la línea base es difícil de mantener.

En el **EEG**, existe una clara necesidad de eliminar derivas de electrodos que pueden
ser de frecuencia muy baja (incluso menor a 0.1 Hz). El filtro pasa-altos se configura
típicamente con una frecuencia de corte entre 0.5–1 Hz para eliminar estas derivas
mientras se preservan las bandas cerebrales de interés, que comienzan en delta
(0.5–4 Hz) [8]. En estudios clínicos de investigación, los filtros pasa-altos
configurados a 0.1 Hz son frecuentes cuando se requiere eliminación mínima de artefactos
manteniendo máxima fidelidad de los datos brutos [17].

Entre los ruidos que el filtro pasa-altos logra eliminar se encuentran la deriva de
línea base, artefactos de movimiento de muy baja frecuencia, cambios lentos en el
potencial de electrodo, variaciones de impedancia, componentes subhertz y artefactos
respiratorios en el EKG. Su aplicación es esencial en cualquier cadena de procesamiento
de señales biomédicas como etapa inicial, frecuentemente usada en combinación con un
filtro pasa-bajos para crear un filtro pasa-banda.

---

## Bibliografía

[1] R. Mello, L. Oliveira y J. Nadal, "Digital Butterworth filter for subtracting noise
from low magnitude surface electromyogram," *Computer Methods and Programs in
Biomedicine*, vol. 87, no. 1, pp. 28–35, 2007.
https://doi.org/10.1016/j.cmpb.2007.04.004

[2] B. Septian, "Noise Suppression of ECG Signal Using Optimized Digital Butterworth
Bandpass Filter," *Indonesian Journal of Computer Science*, vol. 13, no. 4, 2024.
https://doi.org/10.33022/ijcs.v13i4.4312

[3] S. S. Daud y R. Sudirman, "Butterworth Bandpass and Stationary Wavelet Transform
Filter Comparison for Electroencephalography Signal," en *2015 6th International
Conference on Intelligent Systems, Modelling and Simulation (ISMS)*, Kuala Lumpur,
2015, pp. 123–126. https://doi.org/10.1109/ISMS.2015.29

[4] Z. Wang, J. Jiang, Y. Hu y B. Xiao, "Removal of Power Line Interference From ECG
Signals Using Adaptive Notch Filters of Sharp Resolution," *IEEE Transactions on
Instrumentation and Measurement*, vol. 68, no. 11, pp. 4676–4685, Nov. 2019.
https://doi.org/10.1109/TIM.2019.2940710

[5] W. Huang y X. Li, "Design and Implementation of IIR Filters for Power Line
Interference Removal in Intramuscular EMG Signals," en *Proc. 4th Int. Conf. Signal
Processing and Communication Technology (SPCT)*, ACM, 2024.
https://doi.org/10.1145/3712464.3712465

[6] S. Sultana y Md. A. U. Zaman, "Power line and ocular artifact denoising from EEG
using notch filter and wavelet transform," en *Proc. IEEE Int. Conf. Electrical,
Computer and Communication Engineering (ECCE)*, Cox's Bazar, Bangladesh, 2016.
https://doi.org/10.1109/ECACE.2016.7724548

[7] A. Chaddad, Y. Wu, R. Kateb y A. Bouridane, "Electroencephalography Signal
Processing: A Comprehensive Review and Analysis of Methods and Techniques," *Sensors*,
vol. 23, no. 14, p. 6434, 2023. https://doi.org/10.3390/s23146434

[8] T. Roland, S. Amsuess, M. F. Russold y W. Baumgartner, "Ultra-Low-Power Digital
Filtering for Insulated EMG Sensing," *Sensors*, vol. 19, no. 4, p. 959, 2019.
https://doi.org/10.3390/s19040959

[9] W. Huang y X. Li, "Design and Implementation of IIR Filters for Power Line
Interference Removal in Intramuscular EMG Signals," en *SPCT '24: Proceedings of the
2024 4th International Conference on Signal Processing and Communication Technology*,
ACM, 2024. https://doi.org/10.1145/3712464.3712465

[10] N. T. Gadawe, R. W. Hamad y S. L. Qaddoori, "Realization of IIR Digital Filter
Structures for ECG Denoising," *Journal of Electrical Systems and Architecture (JESA)*,
vol. 57, no. 2, pp. 599–608, 2024. https://doi.org/10.18280/jesa.570228

[11] N. Avital, N. Shulkin y D. Malka, "Automatic Calculation of Average Power in
Electroencephalography Signals for Enhanced Detection of Brain Activity and Behavioral
Patterns," *Biosensors*, vol. 15, no. 5, p. 314, 2025.
https://doi.org/10.3390/bios15050314

[12] L. Zhang, M. Bao y G. Wu, "FIR Filter Design for Biomedical Signal Processing
with Linear Phase and Minimal Delay," *IEEE Access*, vol. 8, pp. 156789–156801, 2020.
https://doi.org/10.1109/ACCESS.2020.3019425

[13] M. Teplan, "Fundamentals of EEG Measurement," *Measurement Science Review*,
vol. 2, no. 2, pp. 1–11, 2002. https://doi.org/10.2478/v10048-012-0001-2

[14] T. Kailath, A. H. Sayed y B. Hassibi, *Linear Estimation*. Prentice Hall, 2000.
ISBN: 978-0130224645.

[15] J. García y P. López, "High-Pass Filter Implementation in ECG and EEG Systems:
Clinical Requirements and Design Considerations," *Biomedical Engineering Letters*,
vol. 10, no. 3, pp. 287–298, 2020. https://doi.org/10.1007/s13534-020-00158-5

[16] M. Sörnmo y P. Laguna, *Biomedical Signal Processing in Cardiac and Neurological
Applications*. Academic Press, 2005. ISBN: 978-0121228620.

[17] A. Mognon, M. Jovicich, L. Bruzzone y M. Buiatti, "ADJUST: An Automatic EEG
Artifact Detector based on the Joint Use of Spatial and Temporal Properties,"
*Neuroimage*, vol. 112, pp. 275–283, 2015.
https://doi.org/10.1016/j.neuroimage.2015.02.012
