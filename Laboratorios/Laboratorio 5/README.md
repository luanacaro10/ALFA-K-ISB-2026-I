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

Según el sistema internacional 10-20, se colocaron dos electrodos activos en la posición Fp2 (frontal-parietal derecha, por encima del ojo derecho) para registrar actividad del lóbulo frontal. Un electrodo de referencia se posicionó en la región mastoidea derecha (detrás de la oreja).

Antes de la colocación de los electrodos, se limpió la piel con alcohol para reducir impedancias y garantizar una buena calidad de señal.


### 2.5 Configuración del Software

Se utilizó OpenSignals (r)evolution con los siguientes parámetros: canal A4 configurado como EEG, frecuencia de muestreo de 100 Hz, ganancia interna del amplificador de 40,000×, y filtro hardware pasa-banda de 0.8–48 Hz.

Esta configuración permite capturar todas las bandas de frecuencia relevantes de EEG (delta, theta, alpha, beta y gamma) con una resolución ADC de 10 bits (resolución aprox ≈ 3.2 µV/LSB).


### 2.6 Procesamiento de la señales de EEG

Los datos crudos (*raw data*) de EEG adquiridos mediante el dispositivo BITalino se registran originalmente como valores digitales discretos (cuentas del convertidor analógico-digital). Para que estos datos tengan validez en el análisis fisiológico, es necesario someterlos a un procesamiento de acondicionamiento digital que consta de dos pasos fundamentales: la conversión a unidades físicas y la eliminación del nivel continuo (DC offset).

#### 2.6.1. Conversión de Unidades Digitales a Microvoltios ($\mu\text{V}$)
Para transformar los valores cuantizados por el ADC a unidades de potencial eléctrico, se emplea la función de transferencia específica del sensor EEG del fabricante. Esta ecuación revierte la cuantización y compensa la amplificación del hardware:

$$V_{\text{EEG}} (\text{V}) = \frac{\left(\frac{ADC}{2^{n}} - \frac{1}{2}\right) \cdot V_{cc}}{G_{\text{EEG}}}$$

Donde los parámetros fijos del sistema corresponden a:
*   $ADC$: Valor crudo registrado por el sensor en la columna del canal correspondiente.
*   $n = 10$: Resolución del convertidor ADC.
*   $V_{cc} = 3.3\text{ V}$: Voltaje de alimentación de operación del BITalino.
*   $G_{\text{EEG}} = 40000$: Ganancia interna del amplificador instrumental.

Dado que los potenciales eléctricos a nivel cortical son extremadamente pequeños, el resultado obtenido en voltios se multiplica por un factor de $10^6$ para escalar la señal directamente a **microvoltios ($\mu\text{V}$)**, que es la magnitud estándar para la lectura y análisis clínico de encefalogramas.

#### 2.6.2. Eliminación del Componente de Corriente Continua (DC Offset)
Las señales bioeléctricas registradas suelen presentar una desviación o nivel continuo en su línea base, conocido como *DC offset*. Este fenómeno se debe a los potenciales galvánicos que se generan en la interfaz entre los electrodos y la piel, así como a las características del acoplamiento electrónico.

Para aislar estrictamente las fluctuaciones de la actividad neuronal y preparar la señal, esta debe estar centrada en un promedio de cero voltios. Para lograrlo, se resta la media aritmética global de la serie de tiempo a cada uno de los puntos de la señal previamente convertida:

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
