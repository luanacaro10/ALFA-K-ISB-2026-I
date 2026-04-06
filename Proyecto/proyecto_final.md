# INTRODUCCIÓN A LAS SEÑALES BIOMÉDICAS - PROYECTO FINAL

## Introducción
El corazón es uno de los órganos más sensibles a las variaciones del estado fisiológico y emocional del ser humano. Su actividad eléctrica puede ser registrada de manera no invasiva mediante el electrocardiograma, pues permite medir tanto la frecuencia cardiaca, expresada en latidos por minuto, como el ritmo cardiaco, posibilitando así la identificación de variaciones fisiológicas provocadas por factores externos [1]. 

Entre los factores externos con mayor impacto sobre la actividad cardiaca se encuentra el estrés, el cual puede provocar un aumento significativo de la presión arterial y de la frecuencia cardiaca. En el contexto académico, este fenómeno adquiere especial relevancia: el estrés académico tiende a intensificarse en momentos de alta exigencia, como la proximidad de evaluaciones importantes, manifestándose en algunos casos como taquicardia, lo que puede afectar directamente la concentración y el rendimiento del estudiante [2].

Frente a esta problemática, el análisis de la variabilidad de la frecuencia cardiaca (VFC) a partir de la señal ECG surge como una herramienta prometedora para la medición objetiva del estrés. A diferencia de los instrumentos de autoinforme, la VFC permite cuantificar de forma continua y no invasiva la respuesta del sistema nervioso autónomo ante situaciones estresantes, ofreciendo una perspectiva fisiológica complementaria al estudio del bienestar estudiantil.

## Problemática a abordar
El estrés académico constituye una de las problemáticas de salud más extendidas en el ámbito universitario contemporáneo. Los estudios en Latinoamérica concuerdan en mostrar una elevada incidencia de estrés en estudiantes universitarios, alcanzando valores superiores al 67% de la población estudiada en la categoría de estrés moderado [3]. En el contexto peruano, esta situación no es ajena: el 83% de los estudiantes universitarios peruanos reportan mayormente niveles entre medios y medianamente altos de estrés académico, identificándose como principales factores de estrés la sobrecarga académica y las evaluaciones de los profesores [4]

Experimentar altos niveles de estrés académico está asociado directamente con mayores niveles de depresión y ansiedad [5], autolesiones [6], así como una menor autoestima y autoeficacia académica, además de impactar negativamente el desempeño académico. A nivel fisiológico, entre las manifestaciones físicas del estrés académico se identifican el incremento de la frecuencia cardiaca, trastornos del sueño, fatiga crónica y cefalea, así como reacciones conductuales como el deterioro del desempeño, aislamiento y desgano [7].

A pesar de esta elevada prevalencia, la medición del estrés en entornos académicos sigue dependiendo fundamentalmente de instrumentos de autodiagnóstico, como cuestionarios y escalas psicométricas. Si bien estas herramientas poseen validez reconocida, presentan limitaciones inherentes relacionadas con sesgos de percepción, variabilidad en la expresión emocional y la incapacidad de capturar la respuesta fisiológica en tiempo real. Los métodos de medición de estrés empleados en la práctica suelen ser subjetivos, o en el caso de los marcadores biológicos como el cortisol o la amilasa, requieren extracción de sangre, lo que los hace impracticables para un monitoreo continuo [5]. Esto genera una brecha importante entre la experiencia subjetiva del estrés y su objetivación clínica y experimental.

Ante esta limitación, el análisis de la Variabilidad de la Frecuencia Cardíaca (VFC) en base a señales proporcionadas por el electrocardiograma (ECG) surge como una alternativa más precisa, objetiva y no invasiva, siendo considerado como un indicador del bienestar general mental [8].  La VFC es la fluctuación entre los intervalos de tiempo entre ciclos cardíacos, donde se refleja la interacción entre la rama simpática y parasimpática del sistema nervioso autónomo. Mientras que una alta variabilidad es signo de bienestar mental, un ritmo cardíaco más monótono y regular indica el predominio de la rama simpática, característica de estados psicológicos, entre ellos el estrés. Esto respalda su uso para la evaluación objetiva de la salud mental en el contexto académico [5,6]. 

La literatura científica confirma que la VFC es una medida válida de la respuesta al estrés psicológico, siendo la raíz cuadrada de la media de las diferencias sucesivas al cuadrado (RMSSD) la métrica más reportada asociada significativamente con el estrés, tomando intervalos RR [6], junto con otras métricas de dominio frecuencial como LF/HF, que mide el equilibrio autonómico donde a mayor ratio predominancia del sistema simpático, y la potencia HF, indicador del sistema nervioso parasimpático, una menor potencia está ligada a episodios de estrés [9]. Asimismo, la VFC controlada por el nervio vago puede funcionar como un índice global de la flexibilidad y adaptabilidad del individuo ante los estresores, lo que la posiciona como un biomarcador fiable, no invasivo y de fácil aplicación en salud mental.

## Propuesta de solución
Nuestra propuesta de solución consiste en desarrollar un dispositivo no invasivo que pueda monitorear en tiempo real la señal ECG y detectar situaciones de estrés guiándonos de la VFC. Al momento de identificarlo, el sistema enviará un contenido de apoyo emocional mediante un mensaje vía Telegram, para que el estudiante pueda gestionar su ansiedad y tratar de calmarse antes de su examen.

## Plan de actividades
- **Semana 3** Establecer las especificaciones técnicas del sensor principal (ECG). Para ello, se propone investigar los módulos de adquisición del ritmo cardíaco disponibles en el mercado y seleccionar el más adecuado según su precisión, costo y otros criterios a evaluar. Asimismo, se propone definir los parámetros de la señal ECG, tal como la frecuencia de muestreo, la ventana de análisis y las métricas de la VFC más sensibles asociados al estrés.
  
- **Semana 4:** Proponer un diagrama de bloques de todo el sistema, que incluya y defina los módulos necesarios para que el dispositivo funcione. Se deben considerar los sensores a utilizar, el microcontrolador, los actuadores, y la parte procesamiento interno del sistema. De la misma manera, se deben evaluar los posibles protocolos de obtención de datos ECG bajo la condición de estrés que sería empleado más adelante. 

- **Semana 5:** Comprar los componentes escogidos para el hardware del dispositivo y comprobar que funcionen correctamente. Además, plantear el diseño del circuito y del prototipo, así como las configuraciones de comunicación necesarias para que el sistema logre enviar el contenido de apoyo emocional planteado en la propuesta.

- **Semana 6:** Implementar el procesamiento de la señal de ECG para obtener los valores y rangos que se requieren. Para ello consideraremos el uso de filtros digitales para eliminar las interferencias y obtener la señal deseada de forma más limpia para poder verificar que estén las ondas de ECG necesarias para el análisis según lo descrito en la literatura y el desarrollo de un algoritmo de detección de puntos característicos de la señal en base a lo decidido en la semana 3. 

- **Semana 7:** Obtener los datos de ECG bajo condiciones de no estrés, empleando los protocolos. De esta manera se evaluará la eficacia del procesamiento de señales que se desarrolló previamente: filtrado e identificación de las ondas de ECG. Realizar ajustes de ser necesario. 

- **Semana 8:** Obtener datos de ECG bajo condiciones estresantes. De esta manera, se busca realizar una comparativa entre los datos recolectados en la semana 7 y esta semana, para establecer umbrales diferenciales para la calibración del algoritmo. 

- **Semana 9:** Examen Parcial.

- **Semana 10:** Contrastar los datos procesados de la semana 7 y 8 para definir y establecer umbrales de activación del sistema como parte del algoritmo de detección. A partir de esto se busca evaluar y comparar con los umbrales y valores teóricos. Realizar ajustes funcionales o estéticos al diseño de la carcasa del prototipo si se considera necesario. 

- **Semana 11:** Desarrollar el algoritmo para el soporte emocional planteado en la propuesta de solución a partir de los umbrales identificados en la semana previa. Se debe proponer e implementar una posible lógica para las decisiones que tomaría el sistema en base a los valores de VFC que detecta, considerando también los mensajes que se enviarán vía Telegram y el cómo se enviarán (el posible uso de un bot o alguna otra alternativa). 

- **Semana 12:** Integrar el hardware con el algoritmo desarrollado (software) y verificar que el procesamiento de señales de ECG funcione correctamente en tiempo real. También se debe evaluar la funcionalidad de la interfaz de apoyo emocional que se desarrolló, considerando si es estable o si necesita algún tipo de ajuste. 

- **Semana 13:** Realizar pruebas de validación en ambientes de no estrés y estrés simulado para poder medir las métricas de rendimiento del sistema construido hasta ahora, y con ello identificar bajo qué condiciones se generan errores y cómo se podrían solucionar.

- **Semana 14:** Recopilar y procesar los resultados de las mediciones realizadas hasta el momento con la finalidad de evaluar si dichos resultados son consistentes y coherentes bajo ambas condiciones de uso (estrés y no estrés).  

- **Semana 15:** Terminar con la documentación del proyecto (informe final). Realizar algún retoque estético al diseño del prototipo y al sistema de apoyo. Finalmente, preparar lo necesario para la presentación final (póster). 

- **Semana 16:** Presentación Final: informe, exposición oral y presentación de póster. 

## Referencias
[1] Mayo Clinic, "Electrocardiograma (ECG o EKG)," Mayo Clinic. [En línea]. Disponible en: https://www.mayoclinic.org/es/tests-procedures/ekg/about/pac-20384983

[2] V. Shusterman y R. Lampert, "Role of Stress in Cardiac Arrhythmias," PMC - PubMed Central, 2016. [En línea]. Disponible en: https://pmc.ncbi.nlm.nih.gov/articles/PMC5153185/

[3] C. Román, F. Ortiz, y Y. Hernández, "El estrés académico en estudiantes latinoamericanos de la carrera de Medicina," Revista Iberoamericana de Educación, vol. 46, no. 7, 2008.

[4] M. Cassaretto, P. Vilela, y L. Tello, "Estrés académico en universitarios peruanos," Liberabit, vol. 27, no. 2, 2021, doi: 10.24265/liberabit.2021.v27n2.07.

[5] H. G. Kim, E. J. Cheon, D. S. Bai, Y. H. Lee, y B. H. Koo, "Stress and Heart Rate Variability: A Meta-Analysis and Review of the Literature," Psychiatry Investigation, vol. 15, no. 3, pp. 235–245, 2018. [En línea]. Disponible en: https://pmc.ncbi.nlm.nih.gov/articles/PMC5900369/

[6] T. Föhr et al., "Heart Rate Variability for Evaluating Psychological Stress Changes in Healthy Adults: A Scoping Review," Neuropsychobiology, vol. 82, no. 4, 2023, doi: 10.1159/000530398.

[7] G. Perna et al., "Heart rate variability: Can it serve as a marker of mental health resilience?" Journal of Affective Disorders, vol. 263, pp. 754–761, 2020.

[8] C. Besson, A. L. Baggish, P. Monteventi, L. Schmitt, F. Stucky, y V. Gremeaux, "Assessing the clinical reliability of short-term heart rate variability: Insights from controlled dual-environment and dual-position measurements," Scientific Reports, vol. 15, Art. no. 5611, 2025, doi: 10.1038/s41598-025-89892-3.

[9] F. Shaffer and J. P. Ginsberg, “An overview of heart rate variability metrics and norms,” Front. Public Health, vol. 5, p. 258, 2017.




