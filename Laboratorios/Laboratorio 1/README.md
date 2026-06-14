# INTRODUCCIÓN A SEÑALES BIOMÉDICAS - PROYECTO FINAL

##
Integrantes:
- Andree Pascale Merino Contreras
- Luana Teresa Caro Saravia
- Francisco Aquiles Hidalgo Pilco
- Alexandra Camila Lema Torres
- Kiara Muñoz Benites

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
