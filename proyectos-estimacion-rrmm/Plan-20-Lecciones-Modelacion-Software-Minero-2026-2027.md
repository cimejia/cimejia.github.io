**Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental (FIGEMPA)**

Ingeniería de Minas

**PLAN DE 20 LECCIONES**

_Exposición por grupos de estudiantes_

**MODELACIÓN Y SOFTWARE MINERO**

_Banco de ejemplos demostrativos: Galería de Proyectos de Estimación de Recursos Minerales (FIGEMPA-UCE)_

<https://cimejia.github.io/proyectos-estimacion-rrmm/>

| **Código**                | IMP06PPP03                                                          |
| ------------------------- | ------------------------------------------------------------------- |
| **Nivel**                 | Sexto semestre                                                      |
| **Modalidad**             | Presencial                                                          |
| **Período académico**     | Octubre 2026 – Febrero 2027                                         |
| **Duración**              | 16 semanas · 80 horas                                               |
| **Docente**               | Christian Mejía E., Ph.D.                                           |
| **Elaborado a partir de** | Sílabo IMP06PPP03 (2026-2027) y planificación de clases Clases.xlsx |

# Contenido

1\. Presentación y propósito del plan

2\. Datos generales de la asignatura y organización del aprendizaje

3\. Parámetros de diseño del plan

4\. Resultados de aprendizaje y su cobertura

5\. Estructura general: las 20 lecciones

6\. Cronograma académico 2026-2027

7\. Grupos de trabajo y asignación de lecciones

8\. La Galería de Proyectos como banco de ejemplos demostrativos

9\. Fichas de las 20 lecciones

10\. Sistema de evaluación de las exposiciones

11\. Normas de operación, entregables y uso ético de la IA

12\. Notas de adaptación

Anexo A. Plantilla de planificación de una lección

Anexo B. Lista de verificación de calidad de la exposición

# 1\. Presentación y propósito del plan

El presente documento operacionaliza el sílabo de la asignatura Modelación y Software Minero (IMP06PPP03, sexto semestre, período octubre 2026 – febrero 2027) en un itinerario de 20 lecciones. Cada lección es diseñada, preparada y expuesta por un grupo de estudiantes, con una duración estimada según su densidad conceptual y demostrativa.

La estrategia didáctica del curso invierte el rol tradicional del aula: el estudiante deja de ser receptor y se convierte en profesor de sus pares. El docente actúa como diseñador instruccional, curador de contenidos, verificador de rigor técnico y evaluador. Esta decisión se fundamenta en tres razones:

- La asignatura es eminentemente práctica y basada en software; explicar un procedimiento es la forma más exigente —y por ello la más efectiva— de dominarlo.
- El sector minero demanda profesionales capaces de comunicar resultados técnicos ante equipos multidisciplinarios; la exposición es, en sí misma, una competencia de egreso.
- El número de herramientas (Surfer, RecMin, R/RStudio, SagaGIS, SGeMS, QGIS, Python) excede lo que un solo expositor puede cubrir con profundidad en 32 horas; el trabajo distribuido permite especialización por grupo.

El eje vertebrador es el proyecto semestral de estimación de recursos minerales. Cada grupo construye, a lo largo del curso, un proyecto propio completo (datos sintéticos de sondajes → compósitos → modelo de bloques → estimación geoestadística y por Machine Learning → diseño de explotación) y, además, adopta un «caso espejo» publicado en la Galería de Proyectos de Estimación de Recursos Minerales de FIGEMPA-UCE. La parte demostrativa de cada lección se construye sobre ese caso espejo: el grupo no muestra una captura de pantalla ajena, sino que reproduce, explica y critica un resultado real ya publicado, y luego lo traslada a su propio proyecto.

**Página de la galería:** <https://cimejia.github.io/proyectos-estimacion-rrmm/>

El resultado esperado es que, al finalizar el curso, la clase disponga no solo de 20 exposiciones de calidad, sino de un repositorio colectivo de datos, scripts, proyectos de software y guías de taller reutilizables por las siguientes promociones.

# 2\. Datos generales de la asignatura y organización del aprendizaje

| **Campo**                              | **Detalle**                                                                |
| -------------------------------------- | -------------------------------------------------------------------------- |
| Facultad                               | Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental (FIGEMPA) |
| Carrera / Nivel                        | Ingeniería de Minas · Sexto semestre                                       |
| Asignatura / Código                    | Modelación y Software Minero · IMP06PPP03                                  |
| Prerrequisito                          | SIG y Teledetección (IMP05PPP03)                                           |
| Modalidad / Período                    | Presencial · Octubre 2026 – Febrero 2027                                   |
| Duración                               | 16 semanas · 2 sesiones por semana                                         |
| Componente de docencia                 | 32 horas                                                                   |
| Práctica, aplicación y experimentación | 32 horas                                                                   |
| Trabajo autónomo                       | 16 horas                                                                   |
| Total de la asignatura                 | 80 horas                                                                   |

## 2.1 Organización semanal

Cada semana dispone de dos sesiones presenciales de dos horas. La Clase 1 se destina a la lección expuesta por el grupo responsable (componente de docencia) y la Clase 2 al taller de aplicación guiado (práctica, aplicación y experimentación), en el que la clase completa reproduce la demostración sobre el caso espejo y cada grupo la aplica a su proyecto semestral. El grupo expositor conduce también el taller de su lección, con acompañamiento del docente.

| **Componente**             | **Sesión**     | **Contenido**                                                                 | **Responsable**           |
| -------------------------- | -------------- | ----------------------------------------------------------------------------- | ------------------------- |
| Docencia (20 lecciones)    | Clase 1        | Lección expuesta con parte demostrativa sobre la galería y el proyecto propio | Grupo expositor           |
| Práctica y experimentación | Clase 2        | Taller guiado de reproducción y aplicación; avance del proyecto semestral     | Grupo expositor + docente |
| Trabajo autónomo           | —              | Lecturas, tutoriales, preparación de la lección y desarrollo del proyecto     | Estudiante / grupo        |
| Evaluación                 | Semanas 8 y 16 | Evaluación sumativa intermedia y final                                        | Docente                   |

# 3\. Parámetros de diseño del plan

El plan se construyó con los siguientes supuestos, explícitos para facilitar su ajuste:

| **Parámetro**                   | **Valor adoptado**                                   | **Justificación**                                                                                                                                                                                                                                                             |
| ------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Número de lecciones             | 20                                                   | Cubre íntegramente los contenidos de las cuatro unidades del sílabo, incluidos los temas incorporados en la planificación de clases (R, SagaGIS, SGeMS, prompting e IA).                                                                                                      |
| Duración por lección            | 60, 90 o 120 minutos                                 | Se asigna según densidad conceptual: 60 min para lecciones de encuadre o de un único procedimiento; 90 min para lecciones con demostración y actividad; 120 min para las lecciones con taller práctico extenso (Surfer II, modelización geológica, bloques, kriging, diseño). |
| Duración total de las lecciones | 1 680 minutos (28 h)                                 | Equivale al 87,5 % del componente de docencia (32 h); el resto se destina al encuadre, la coevaluación, la evaluación sumativa intermedia y la final.                                                                                                                         |
| Lecciones por sesión            | Una lección de 90–120 min, o dos lecciones de 60 min | Las lecciones de 60 min comparten sesión para aprovechar íntegramente el bloque de dos horas.                                                                                                                                                                                 |
| Grupos                          | 8 grupos (base) o 10 grupos (variante)               | Cada grupo expone entre 2 y 3 lecciones afines, de modo que se especializa en una familia de herramientas.                                                                                                                                                                    |
| Tamaño sugerido del grupo       | 4 a 5 estudiantes                                    | Permite que todos expongan y que exista división real de tareas (teoría, demostración, datos, guía).                                                                                                                                                                          |
| Casos de la galería             | 1 caso espejo por grupo                              | Se asignan los 7 proyectos publicados; un caso puede repetirse con énfasis distinto.                                                                                                                                                                                          |
| Semana 16                       | Sin lecciones                                        | Reservada a la evaluación sumativa final y a la sustentación del proyecto semestral.                                                                                                                                                                                          |

# 4\. Resultados de aprendizaje y su cobertura

| **Unidad**                                                | **Resultados de aprendizaje**                                                                                                                                                                                                                       | **Lecciones** |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| 1\. Modelos y modelización                                | Comprende el propósito, definición, elementos y tipos de modelos y su importancia en Ingeniería de Minas. Aplica el proceso de modelización. Genera mapas digitales 2D y 3D.                                                                        | L1 – L5       |
| 2\. Software minero                                       | Importa, valida y visualiza datos de sondajes y topografía. Aplica herramientas de dibujo, perfiles y secciones. Emplea mallados T3 y calcula volúmenes. Genera modelos de bloques y compósitos. Aplica la metodología geoestadística y el kriging. | L6 – L13      |
| 3\. Estimación de recursos minerales con Machine Learning | Adquiere una base sólida en ML. Implementa algoritmos de ML. Emplea la metodología de ML para la estimación de recursos minerales con herramientas computacionales.                                                                                 | L14 – L18     |
| 4\. Diseño de explotación                                 | Diseña el Open Pit con las herramientas del software minero. Diseña los elementos básicos de un modelo subterráneo de explotación.                                                                                                                  | L19 – L20     |

# 5\. Estructura general: las 20 lecciones

La Tabla 5.1 resume el itinerario completo. La columna «Grupo» corresponde al plan base de 8 grupos; la columna «Min» indica la duración estimada de la exposición.

| **N°** | **Título de la lección**                                                               | **Unidad** | **Min** | **Sem.** | **Grupo** | **Software principal**                               |
| ------ | -------------------------------------------------------------------------------------- | ---------- | ------- | -------- | --------- | ---------------------------------------------------- |
| 1      | Modelos en Ingeniería de Minas: propósito, tipos y elementos                           | U1         | 90      | S1       | G1        | Navegador web; hoja de cálculo                       |
| 2      | El proceso de modelización: del problema al modelo validado                            | U1         | 90      | S2       | G1        | Diagramadores (draw.io, Lucidchart); hoja de cálculo |
| 3      | Modelos computacionales: MDT, SIG y CAD aplicados a minería                            | U1         | 60      | S3       | G2        | OpenTopography, QGIS, SagaGIS, AutoCAD               |
| 4      | Mapas digitales 2D y 3D con Surfer (I): datos, interpolación y mapas base              | U1         | 60      | S3       | G2        | Surfer (Golden Software)                             |
| 5      | Mapas digitales 2D y 3D con Surfer (II): análisis, superposición y volúmenes           | U1         | 120     | S4       | G2        | Surfer (Golden Software)                             |
| 6      | Introducción a RecMin: arquitectura, módulos y ciclo Entrada–Proceso–Salida            | U2         | 60      | S5       | G3        | RecMin                                               |
| 7      | Gestión de datos de sondajes, muestras y topografía                                    | U2         | 60      | S5       | G3        | RecMin; Google Earth                                 |
| 8      | Análisis exploratorio de datos, distribución de clases y R/RStudio                     | U2         | 90      | S6       | G3        | RecMin; R y RStudio (local y en la nube)             |
| 9      | Modelización geológica: secciones, mallado T3 y cálculo de volúmenes                   | U2         | 120     | S7       | G4        | RecMin; Excel                                        |
| 10     | Modelo de bloques y compositación de muestras                                          | U2         | 120     | S8       | G4        | RecMin; SGeMS                                        |
| 11     | Metodología geoestadística: variable regionalizada y análisis variográfico             | U2         | 60      | S9       | G5        | R y RStudio; SagaGIS                                 |
| 12     | Variograma experimental y variograma modelo                                            | U2         | 60      | S9       | G5        | R y RStudio; SGeMS                                   |
| 13     | SGeMS y Kriging: estimación de bloques y categorización de recursos                    | U2         | 120     | S10      | G5        | SGeMS; RecMin                                        |
| 14     | Inteligencia artificial y Machine Learning: conceptos e ingeniería de prompting        | U3         | 60      | S11      | G6        | Gemini / ChatGPT; navegador web                      |
| 15     | Metodología de ML, generación de datos sintéticos e ingeniería de características      | U3         | 60      | S11      | G6        | Python (NumPy, Pandas, scikit-learn), Jupyter/Colab  |
| 16     | Redes neuronales artificiales: del perceptrón al perceptrón multicapa                  | U3         | 60      | S12      | G6        | Python (scikit-learn, TensorFlow/Keras)              |
| 17     | Entrenamiento de la red: forward propagation, backpropagation y descenso del gradiente | U3         | 60      | S12      | G7        | Python (TensorFlow/Keras, Matplotlib)                |
| 18     | Evaluación, predicción y comparación geoestadística frente a Machine Learning          | U3         | 90      | S13      | G7        | Python; SGeMS; RecMin                                |
| 19     | Diseño de explotación subterránea asistido por software                                | U4         | 120     | S14      | G8        | RecMin; AutoCAD                                      |
| 20     | Diseño de explotación superficial: Open Pit, pistas, plataformas y maquinaria          | U4         | 120     | S15      | G8        | RecMin; AutoCAD                                      |

_Total de exposición: 1680 minutos = 28.0 horas distribuidas en 20 lecciones._

# 6\. Cronograma académico 2026-2027

La Clase 1 de cada semana aloja la exposición de la lección o lecciones; la Clase 2 aloja el taller de aplicación. La semana 16 no contiene lecciones: se destina a la evaluación sumativa final y a la sustentación del proyecto.

| **Sem.** | **Fechas**           | **Clase 1 — Lección expuesta por el grupo**                                                                                                                                                       | **Grupo** | **Clase 2 — Taller de aplicación**                                                                      | **Observaciones**                                                                                          |
| -------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| S1       | 19 – 23 oct 2026     | L1 (90 min) — Modelos en Ingeniería de Minas: propósito, tipos y elementos                                                                                                                        | G1        | Matriz comparativa de los 7 proyectos de la galería y ficha de modelado conceptual del proyecto propio. |                                                                                                            |
| S2       | 26 – 30 oct 2026     | L2 (90 min) — El proceso de modelización: del problema al modelo validado                                                                                                                         | G1        | Diagrama de flujo de modelización del proyecto propio (hito 1).                                         |                                                                                                            |
| S3       | 02 – 06 nov 2026     | L3 (60 min) — Modelos computacionales: MDT, SIG y CAD aplicados a minería + L4 (60 min) — Mapas digitales 2D y 3D con Surfer (I): datos, interpolación y mapas base                               | G2        | MDT del área propia en QGIS/SagaGIS y dibujo CAD de un elemento de infraestructura.                     | Feriado nacional 2 y 3 nov (Difuntos / Independencia de Cuenca)                                            |
| S4       | 09 – 13 nov 2026     | L5 (120 min) — Mapas digitales 2D y 3D con Surfer (II): análisis, superposición y volúmenes                                                                                                       | G2        | Georreferenciación, interpolación y mapa base con curvas de nivel del proyecto propio.                  |                                                                                                            |
| S5       | 16 – 20 nov 2026     | L6 (60 min) — Introducción a RecMin: arquitectura, módulos y ciclo Entrada–Proceso–Salida + L7 (60 min) — Gestión de datos de sondajes, muestras y topografía                                     | G3        | Mapa compuesto 3D, cálculo de áreas y volúmenes por capa y análisis de sitio óptimo.                    |                                                                                                            |
| S6       | 23 – 27 nov 2026     | L8 (90 min) — Análisis exploratorio de datos, distribución de clases y R/RStudio                                                                                                                  | G3        | Instalación de RecMin y exploración del proyecto espejo de la galería.                                  |                                                                                                            |
| S7       | 30 nov – 04 dic 2026 | L9 (120 min) — Modelización geológica: secciones, mallado T3 y cálculo de volúmenes                                                                                                               | G4        | Importación, control de calidad y visualización de sondajes y topografía del proyecto propio (hito 2).  |                                                                                                            |
| S8       | 07 – 11 dic 2026     | L10 (120 min) — Modelo de bloques y compositación de muestras                                                                                                                                     | G4        | AED del proyecto propio, tratamiento de outliers y generación de intervalos de clase.                   | Fin del I hemisemestre · Evaluación sumativa intermedia · Posible feriado local 7 dic (Fundación de Quito) |
| S9       | 14 – 18 dic 2026     | L11 (60 min) — Metodología geoestadística: variable regionalizada y análisis variográfico + L12 (60 min) — Variograma experimental y variograma modelo                                            | G5        | Modelo geológico de dos dominios, mallado T3 y cálculo comparado de volúmenes.                          | Inicio del II hemisemestre                                                                                 |
| S10      | 21 – 25 dic 2026     | L13 (120 min) — SGeMS y Kriging: estimación de bloques y categorización de recursos                                                                                                               | G5        | Modelo de bloques 10×10×10 m y compósitos por dominio; exportación a SGeMS.                             | Feriado 25 dic (Navidad)                                                                                   |
| S11      | 28 dic – 01 ene 2027 | L14 (60 min) — Inteligencia artificial y Machine Learning: conceptos e ingeniería de prompting + L15 (60 min) — Metodología de ML, generación de datos sintéticos e ingeniería de características | G6        | Nubes direccionales, normal score y mapa variográfico del proyecto propio.                              | Feriado 1 ene (Año Nuevo)                                                                                  |
| S12      | 04 – 08 ene 2027     | L16 (60 min) — Redes neuronales artificiales: del perceptrón al perceptrón multicapa + L17 (60 min) — Entrenamiento de la red: forward propagation, backpropagation y descenso del gradiente      | G6 / G7   | Variograma modelo por dominio en las tres direcciones y tabla de parámetros.                            |                                                                                                            |
| S13      | 11 – 15 ene 2027     | L18 (90 min) — Evaluación, predicción y comparación geoestadística frente a Machine Learning                                                                                                      | G7        | Kriging por dominio, validación cruzada y categorización de recursos (hito 3).                          |                                                                                                            |
| S14      | 18 – 22 ene 2027     | L19 (120 min) — Diseño de explotación subterránea asistido por software                                                                                                                           | G8        | Definición del problema de ML y bitácora de prompts del proyecto propio.                                |                                                                                                            |
| S15      | 25 – 29 ene 2027     | L20 (120 min) — Diseño de explotación superficial: Open Pit, pistas, plataformas y maquinaria                                                                                                     | G8        | Notebook de preparación de datos y matriz de características (hito 4).                                  | Exposiciones finales del proyecto semestral                                                                |
| S16      | 01 – 05 feb 2027     | —                                                                                                                                                                                                 | —         | Evaluación sumativa final y sustentación del proyecto semestral.                                        | Evaluación sumativa final                                                                                  |

# 7\. Grupos de trabajo y asignación de lecciones

## 7.1 Plan base: 8 grupos

| **Grupo** | **Denominación**                           | **Lecciones** | **Min.** | **Caso espejo en la galería**   | **Foco temático**                                                                 |
| --------- | ------------------------------------------ | ------------- | -------- | ------------------------------- | --------------------------------------------------------------------------------- |
| G1        | Fundamentos de modelación                  | L1, L2        | 180      | P7 — Proyecto minero Carlés     | Bases conceptuales: qué es un modelo, para qué sirve y cómo se construye.         |
| G2        | Modelos computacionales y Surfer           | L3, L4, L5    | 240      | P4 — Tarapacá–Atacama (Chile)   | MDT, SIG, CAD y la suite cartográfica Surfer 2D/3D.                               |
| G3        | RecMin: datos y análisis exploratorio      | L6, L7, L8    | 210      | P6 — Mina «0 Nivel»             | Ingreso, validación y visualización de sondajes, muestras y topografía; AED y R.  |
| G4        | Modelización geológica y modelo de bloques | L9, L10       | 240      | P5 — Zona de El Oro (2025-2026) | Secciones, mallado T3, volúmenes, bloques y compósitos.                           |
| G5        | Geoestadística y Kriging                   | L11, L12, L13 | 240      | P1 — Zarandajas (2026)          | Variable regionalizada, variografía, SGeMS, kriging y categorización de recursos. |
| G6        | IA, ML y redes neuronales                  | L14, L15, L16 | 180      | P3 — Loja (2026)                | Marco de IA/ML, prompting, datos sintéticos, ingeniería de características y RNA. |
| G7        | Entrenamiento y evaluación de modelos ML   | L17, L18      | 150      | P2 — El Oro (2026)              | Backpropagation, métricas, validación y comparación con geoestadística.           |
| G8        | Diseño de explotación                      | L19, L20      | 240      | P7 Carlés + P4 Tarapacá         | Diseño subterráneo y diseño superficial (Open Pit) asistido por software.         |

La carga de exposición es homogénea en el eje vertical (todos los grupos se aproximan a las 3,5 horas de exposición). La carga total se equilibra además asignando a los grupos con menos minutos de exposición la responsabilidad de conducir el taller de su lección y de acompañar un hito del proyecto semestral.

## 7.2 Variante para clases numerosas: 10 grupos

| **Grupo** | **Denominación**                  | **Lecciones** | **Min.** | **Caso espejo**         |
| --------- | --------------------------------- | ------------- | -------- | ----------------------- |
| G1        | Fundamentos de modelación         | L1, L2        | 180      | P7 — Carlés             |
| G2        | Modelos computacionales y Surfer  | L3, L4        | 120      | P4 — Tarapacá–Atacama   |
| G3        | Surfer avanzado y RecMin          | L5, L6        | 180      | P4 — Tarapacá–Atacama   |
| G4        | Datos mineros y AED               | L7, L8        | 150      | P6 — Mina «0 Nivel»     |
| G5        | Modelización geológica y bloques  | L9, L10       | 240      | P5 — El Oro (2025-2026) |
| G6        | Geoestadística y variografía      | L11, L12      | 120      | P1 — Zarandajas         |
| G7        | SGeMS, Kriging y ML introductorio | L13, L14      | 180      | P1 — Zarandajas         |
| G8        | Metodología ML y RNA              | L15, L16      | 120      | P3 — Loja               |
| G9        | Entrenamiento y evaluación        | L17, L18      | 150      | P2 — El Oro (2026)      |
| G10       | Diseño de explotación             | L19, L20      | 240      | P7 Carlés + P4 Tarapacá |

## 7.3 Roles internos de cada grupo

| **Rol**                     | **Responsabilidad**                                                                                                               |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Coordinador/a               | Planifica el cronograma interno, controla tiempos, entrega los materiales en el aula virtual y es el interlocutor con el docente. |
| Responsable teórico         | Construye el marco conceptual, la bibliografía y las diapositivas; verifica el rigor técnico.                                     |
| Responsable de demostración | Reproduce el caso espejo de la galería, prepara los datos y ejecuta la demostración en vivo.                                      |
| Responsable del taller      | Diseña la guía de práctica, el conjunto de datos y el script reproducible; conduce la Clase 2.                                    |
| Responsable de evaluación   | Elabora las preguntas de coevaluación, recoge las fichas de los compañeros y sistematiza la retroalimentación.                    |

_Todos los integrantes rotan por al menos dos roles a lo largo del semestre y todos exponen._

# 8\. La Galería de Proyectos como banco de ejemplos demostrativos

La Galería de Proyectos de Estimación de Recursos Minerales reúne los trabajos finales de promociones anteriores del curso. Constituye el banco oficial de ejemplos demostrativos: los grupos deben reproducir —no solo mostrar— al menos un resultado publicado, explicar las decisiones metodológicas detrás de él y contrastarlo con su propio proyecto. Este procedimiento tiene tres ventajas: ancla la enseñanza en evidencia real, expone a los estudiantes a estándares de calidad alcanzables y genera una cultura de mejora continua entre promociones.

| **Cód.** | **Proyecto publicado**                                                                                               | **Año**   | **Uso principal en el plan**                                             |
| -------- | -------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------ |
| P1       | Generación de datos sintéticos y estimación de recursos minerales — Caso: Zarandajas, Ecuador                        | 2026      | Lecciones de geoestadística y variografía; contraste de metodologías.    |
| P2       | Generación de datos sintéticos y estimación de recursos minerales — Caso: El Oro, Ecuador                            | 2026      | Lecciones de entrenamiento y evaluación de modelos de ML.                |
| P3       | Generación de datos sintéticos y estimación de recursos minerales — Caso: Loja, Ecuador                              | 2026      | Lecciones de IA/ML, datos sintéticos e ingeniería de características.    |
| P4       | Generación de datos sintéticos y estimación de recursos minerales — Caso: región de Tarapacá–Atacama, norte de Chile | 2025-2026 | Lecciones de MDT, SIG/CAD, Surfer y diseño superficial.                  |
| P5       | Generación de datos sintéticos y estimación de recursos minerales — Caso: zona de El Oro, Ecuador                    | 2025-2026 | Lecciones de modelización geológica, mallado y modelo de bloques.        |
| P6       | Estimación con Geoestadística y ML — Caso: mina «0 Nivel»                                                            | 2025      | Lecciones de datos mineros, AED, kriging y comparación con ML.           |
| P7       | Estimación con Geoestadística y ML — Caso: proyecto minero Carlés                                                    | 2025      | Caso de referencia transversal: modelización, bloques, kriging y diseño. |

## 8.1 Reglas de uso de la galería en la parte demostrativa

- Cada grupo reproduce al menos un producto del caso espejo que le fue asignado (mapa, modelo, tabla o estimación) y lo explica paso a paso.
- La demostración debe ser reproducible: se entregan los datos, el script o el proyecto de software utilizados.
- Se debe citar el proyecto de la galería como fuente, indicando autoría y año.
- El grupo debe señalar al menos una limitación o posible mejora del trabajo publicado: la galería se usa como referencia crítica, no como plantilla incuestionable.
- Además del caso espejo, cada grupo aplica el procedimiento a su propio proyecto semestral y muestra la comparación.

# 9\. Fichas de las 20 lecciones

Cada ficha contiene la información mínima que el grupo expositor debe respetar. El grupo puede ampliar contenidos, pero no reducir la cobertura ni modificar la duración sin autorización del docente.

## Lección 1. Modelos en Ingeniería de Minas: propósito, tipos y elementos

| **Campo**                | **Detalle**                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Unidad                   | U1 — Modelos y modelización                                                                                                     |
| Duración estimada        | 90 minutos                                                                                                                      |
| Semana / sesión          | S1 · Clase 1 (la Clase 2 de esa semana aloja el taller)                                                                         |
| Grupo expositor          | G1                                                                                                                              |
| Software principal       | Navegador web; hoja de cálculo                                                                                                  |
| Resultado de aprendizaje | Comprende el propósito, la definición, los elementos y los tipos de modelos, así como su importancia en la Ingeniería de Minas. |

### Contenidos

- Modelo y modelización: propósito, importancia y campo de aplicación.
- Definición y características de un modelo útil.
- Tipos de modelos: gráficos, geométricos, matemáticos y estadísticos, físicos, conceptuales, computacionales e híbridos: propósito, apariencia y aplicaciones.
- Elementos de un modelo: datos, variables (dimensiones), parámetros, restricciones, error, optimización, predecir / estimar / pronosticar.
- El modelo de capas y su lectura en un proyecto minero.

### Parte demostrativa (ejemplos de la galería)

- Recorrido guiado por la Galería de Proyectos de Estimación de Recursos Minerales (7 casos publicados): identificar en cada uno el propósito, el tipo de modelo y sus elementos.
- Caso espejo asignado (P7 — Carlés): descomposición del proyecto en sus modelos constituyentes (geológico, de bloques, económico).
- Contraste rápido con los casos P1 (Zarandajas) y P6 (mina «0 Nivel») para mostrar la diversidad de enfoques.

### Taller de aplicación (Clase 2)

- Elaborar una matriz comparativa de los 7 proyectos de la galería: caso, tipo de modelo, entradas, salidas y uso.
- Redactar la ficha de modelado conceptual del proyecto semestral propio: qué se quiere predecir, con qué datos y bajo qué supuestos.

### Vinculación con el proyecto semestral

Cada grupo define y presenta por escrito el propósito y el alcance del modelo de su propio proyecto semestral.

### Agenda detallada

| **Bloque** | **Actividad**                                                               | **Acumulado** |
| ---------- | --------------------------------------------------------------------------- | ------------- |
| 10 min     | Apertura, presentación del plan de 20 lecciones y conformación de grupos    | 10 min        |
| 30 min     | Exposición: modelo, modelización, tipos y elementos                         | 40 min        |
| 30 min     | Demostración guiada con los 7 proyectos de la galería                       | 70 min        |
| 15 min     | Actividad de clasificación de modelos en casos mineros (trabajo en parejas) | 85 min        |
| 5 min      | Cierre, preguntas y encargo del taller                                      | 90 min        |

### Entregables del grupo

- Diapositivas (PDF) y guion de la sesión.
- Matriz comparativa de los 7 proyectos de la galería.
- Guía del taller de la Clase 2.

### Criterios de evaluación específicos

Rigor conceptual, calidad de la demostración con casos reales publicados y claridad didáctica.

### Recursos y referencias

- Galería de proyectos: <https://cimejia.github.io/proyectos-estimacion-rrmm/>
- Farinango, W. y Mejía-Escobar, C. (2025). Estimación de recursos minerales mediante geoestadística y machine learning. FIGEMPA-UCE.

## Lección 2. El proceso de modelización: del problema al modelo validado

| **Campo**                | **Detalle**                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------- |
| Unidad                   | U1 — Modelos y modelización                                                                 |
| Duración estimada        | 90 minutos                                                                                  |
| Semana / sesión          | S2 · Clase 1 (la Clase 2 de esa semana aloja el taller)                                     |
| Grupo expositor          | G1                                                                                          |
| Software principal       | Diagramadores (draw.io, Lucidchart); hoja de cálculo                                        |
| Resultado de aprendizaje | Aplica el proceso de modelización para la creación de un modelo útil en un proyecto minero. |

### Contenidos

- Etapas del proceso: propósito, alcance y limitaciones, recolección de datos, identificación de variables y parámetros, formulación de relaciones, validación, calibración y simulación.
- Diagrama de flujo del proceso de modelización y puntos de retorno (iteración).
- Uso convencional del software dentro del proceso y el modelo de capas.
- Modelos gráficos (mapas), matemáticos (ecuaciones) y probabilísticos dentro de un mismo proyecto.

### Parte demostrativa (ejemplos de la galería)

- Reconstrucción del flujo de modelización publicado en la galería para el caso espejo: desde la generación de datos sintéticos hasta la estimación final.
- Comparación de los flujos de dos proyectos de la galería con enfoques distintos (P6: geoestadística + ML, frente a P1: enfoque ML).
- Modelo matemático mínimo ejecutado en vivo (ley media ponderada, cálculo del error y validación).

### Taller de aplicación (Clase 2)

- Construir el diagrama de flujo de modelización del proyecto semestral propio, con entradas, procesos, salidas y criterios de validación.
- Identificar variables, parámetros y fuentes de error del propio caso.

### Vinculación con el proyecto semestral

Entrega del diagrama de flujo de modelización del proyecto semestral (primer hito del proyecto).

### Agenda detallada

| **Bloque** | **Actividad**                                                                 | **Acumulado** |
| ---------- | ----------------------------------------------------------------------------- | ------------- |
| 5 min      | Apertura y repaso de la lección anterior                                      | 5 min         |
| 30 min     | Exposición: etapas del proceso de modelización y diagrama de flujo            | 35 min        |
| 25 min     | Demostración: flujo de modelización de dos proyectos publicados en la galería | 60 min        |
| 25 min     | Taller exprés: diagrama de flujo del proyecto propio                          | 85 min        |
| 5 min      | Cierre, preguntas y encargo                                                   | 90 min        |

### Entregables del grupo

- Diapositivas (PDF) y diagrama de flujo comentado.
- Plantilla de diagrama de flujo para el taller.

### Criterios de evaluación específicos

Coherencia del flujo propuesto, identificación de variables y parámetros, tratamiento del error.

### Recursos y referencias

- Galería de proyectos: <https://cimejia.github.io/proyectos-estimacion-rrmm/>
- Curso sobre modelos digitales del terreno. Felicísimo Pérez, Á. (<https://www6.uniovi.es/~feli/CursoMDT/CursoMDT.html>).

## Lección 3. Modelos computacionales: MDT, SIG y CAD aplicados a minería

| **Campo**                | **Detalle**                                                                                                 |
| ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| Unidad                   | U1 — Modelos y modelización                                                                                 |
| Duración estimada        | 60 minutos                                                                                                  |
| Semana / sesión          | S3 · Clase 1 (la Clase 2 de esa semana aloja el taller)                                                     |
| Grupo expositor          | G2                                                                                                          |
| Software principal       | OpenTopography, QGIS, SagaGIS, AutoCAD                                                                      |
| Resultado de aprendizaje | Genera modelos digitales del terreno y modelos 2D/3D de infraestructura minera mediante software SIG y CAD. |

### Contenidos

- Representación geográfica con software SIG: modelo digital de elevación (DEM/MDT).
- Fuentes y formatos de datos: SRTM, ALOS, GeoTIFF, XYZ, DXF, STL.
- Infraestructura minera con software CAD: dibujo 2D y extrusión 3D.
- Cadena de trabajo SIG–CAD–RecMin dentro del modelo de capas.

### Parte demostrativa (ejemplos de la galería)

- Descarga y despliegue de un MDT desde OpenTopography para el área de un caso de la galería (P4 Tarapacá–Atacama o P5 El Oro).
- Visualización 2D y 3D del MDT en QGIS y SagaGIS; comparación de simbologías.
- Dibujo 2D y extrusión 3D de un elemento básico de infraestructura minera (tolva, plataforma o pique) en CAD.

### Taller de aplicación (Clase 2)

- Generar el modelo 2D y 3D de la zona geográfica del proyecto propio a partir de un MDT.
- Generar el modelo 2D y 3D de un objeto de infraestructura minera y exportarlo en formato intercambiable.

### Vinculación con el proyecto semestral

El grupo incorpora a su proyecto el MDT de su zona de estudio y un primer elemento de infraestructura.

### Agenda detallada

| **Bloque** | **Actividad**                                              | **Acumulado** |
| ---------- | ---------------------------------------------------------- | ------------- |
| 5 min      | Apertura y objetivos                                       | 5 min         |
| 20 min     | Exposición: MDT, SIG y CAD en el flujo minero              | 25 min        |
| 25 min     | Demostración: descarga de MDT, despliegue SIG y dibujo CAD | 50 min        |
| 10 min     | Cierre, preguntas y encargo del taller                     | 60 min        |

### Entregables del grupo

- Diapositivas (PDF) y guía paso a paso de descarga y procesamiento del MDT.
- Archivos de ejemplo (MDT recortado y dibujo CAD).

### Criterios de evaluación específicos

Reproducibilidad del procedimiento, manejo de sistemas de referencia y calidad gráfica.

### Recursos y referencias

- OpenTopography (<https://opentopography.org/>).
- Curso MDT de Felicísimo Pérez (<https://www6.uniovi.es/~feli/CursoMDT/CursoMDT.html>).

## Lección 4. Mapas digitales 2D y 3D con Surfer (I): datos, interpolación y mapas base

| **Campo**                | **Detalle**                                                                    |
| ------------------------ | ------------------------------------------------------------------------------ |
| Unidad                   | U1 — Modelos y modelización                                                    |
| Duración estimada        | 60 minutos                                                                     |
| Semana / sesión          | S3 · Clase 1 (la Clase 2 de esa semana aloja el taller)                        |
| Grupo expositor          | G2                                                                             |
| Software principal       | Surfer (Golden Software)                                                       |
| Resultado de aprendizaje | Genera mapas digitales 2D mediante Surfer a partir de datos georreferenciados. |

### Contenidos

- Propósito, instalación, interfaz gráfica, hoja de datos (worksheet) y trazados (plot).
- Gestión de datos e interpolación: kriging, distancia inversa, vecino natural y criterios de elección.
- Georreferenciación de imágenes y construcción del mapa base.
- Mapa de curvas de nivel 2D y su edición.

### Parte demostrativa (ejemplos de la galería)

- Con datos topográficos de un caso de la galería, construir el mapa base y el mapa de contornos 2D desde cero.
- Comparación del efecto de tres métodos de interpolación sobre la misma nube de puntos.

### Taller de aplicación (Clase 2)

- Georreferenciar una imagen del área de estudio propia en Surfer.
- Importar datos XYZ, interpolar (GRID) y producir el mapa base con curvas de nivel.

### Vinculación con el proyecto semestral

Mapa base y de curvas de nivel del proyecto propio, listo para superponer capas temáticas.

### Agenda detallada

| **Bloque** | **Actividad**                                                 | **Acumulado** |
| ---------- | ------------------------------------------------------------- | ------------- |
| 5 min      | Apertura y objetivos                                          | 5 min         |
| 20 min     | Exposición: Surfer, datos, interpolación y georreferenciación | 25 min        |
| 25 min     | Demostración: del archivo XYZ al mapa de contornos            | 50 min        |
| 10 min     | Cierre, preguntas y encargo del taller                        | 60 min        |

### Entregables del grupo

- Diapositivas (PDF), archivo .SRF de ejemplo y conjunto de datos de práctica.
- Tabla comparativa de métodos de interpolación.

### Criterios de evaluación específicos

Correcta georreferenciación, justificación del método de interpolación y calidad cartográfica.

### Recursos y referencias

- Curso MDT de Felicísimo Pérez (<https://www6.uniovi.es/~feli/CursoMDT/CursoMDT.html>).
- Proyectos publicados en la galería del curso.

## Lección 5. Mapas digitales 2D y 3D con Surfer (II): análisis, superposición y volúmenes

| **Campo**                | **Detalle**                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Unidad                   | U1 — Modelos y modelización                                                                                                        |
| Duración estimada        | 120 minutos                                                                                                                        |
| Semana / sesión          | S4 · Clase 1 (la Clase 2 de esa semana aloja el taller)                                                                            |
| Grupo expositor          | G2                                                                                                                                 |
| Software principal       | Surfer (Golden Software)                                                                                                           |
| Resultado de aprendizaje | Genera y combina mapas de wireframe, superficie 3D, vectores, perfiles, relieve, cuencas y visibilidad; calcula áreas y volúmenes. |

### Contenidos

- Mapa de vectores (gradiente/pendientes); perfil longitudinal, transversal y diagonal.
- Relieve sombreado y color; límites de cuencas y subcuencas hidrográficas.
- Mapa de visibilidad (área visible desde un punto de observación) y wireframe / superficie 3D.
- Operaciones con mapas: combinación (overlay) y cálculo de áreas y volúmenes por capas.
- Análisis de sitio óptimo.

### Parte demostrativa (ejemplos de la galería)

- Suite completa de mapas sobre el MDT de un caso de la galería, generados en vivo.
- Combinación 3D de la topografía con la capa de leyes o de infraestructura del proyecto de referencia.
- Cálculo del volumen de cada capa de suelo y determinación de un sitio óptimo (botadero o planta).

### Taller de aplicación (Clase 2)

- Mapa compuesto 3D del proyecto propio con al menos cuatro capas superpuestas.
- Cálculo de áreas y volúmenes por capa e informe de sitio óptimo.

### Vinculación con el proyecto semestral

Producto cartográfico integrado del proyecto semestral (MDT + infraestructura + volúmenes).

### Agenda detallada

| **Bloque** | **Actividad**                                                     | **Acumulado** |
| ---------- | ----------------------------------------------------------------- | ------------- |
| 5 min      | Apertura y repaso de Surfer I                                     | 5 min         |
| 25 min     | Exposición: mapas derivados, superposición y cálculo de volúmenes | 30 min        |
| 45 min     | Demostración: suite completa de mapas y combinación 3D            | 75 min        |
| 35 min     | Taller guiado sobre el proyecto propio                            | 110 min       |
| 10 min     | Cierre, preguntas y encargo                                       | 120 min       |

### Entregables del grupo

- Diapositivas (PDF), proyecto .SRF comentado y guía del taller.
- Informe breve de áreas y volúmenes calculados.

### Criterios de evaluación específicos

Completitud de la suite, correcta superposición de mapas y exactitud del cálculo de volúmenes.

### Recursos y referencias

- Curso MDT de Felicísimo Pérez (<https://www6.uniovi.es/~feli/CursoMDT/CursoMDT.html>).

## Lección 6. Introducción a RecMin: arquitectura, módulos y ciclo Entrada–Proceso–Salida

| **Campo**                | **Detalle**                                                                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Unidad                   | U2 — Software minero                                                                                                                     |
| Duración estimada        | 60 minutos                                                                                                                               |
| Semana / sesión          | S5 · Clase 1 (la Clase 2 de esa semana aloja el taller)                                                                                  |
| Grupo expositor          | G3                                                                                                                                       |
| Software principal       | RecMin                                                                                                                                   |
| Resultado de aprendizaje | Reconoce el propósito, los módulos y la interfaz gráfica de RecMin y explica su funcionamiento mediante el ciclo Entrada–Proceso–Salida. |

### Contenidos

- RecMin: propósito, características, origen y evolución; alternativas de software minero libre y comercial.
- Metodología de aprendizaje de software: exploración guiada, caja blanca frente a caja negra.
- Descarga, instalación y tipos de archivos.
- Módulos del programa e interfaz gráfica de usuario.
- Ciclo Entrada–Proceso–Salida aplicado a un proyecto minero completo.

### Parte demostrativa (ejemplos de la galería)

- Recorrido comentado por la GUI de RecMin mostrando cada módulo y su función.
- Apertura de un proyecto completo publicado en la galería para ilustrar el ciclo Entrada–Proceso–Salida de punta a punta.
- Demostración de un error típico de ruta de archivos y su solución.

### Taller de aplicación (Clase 2)

- Instalación de RecMin y configuración del entorno de trabajo.
- Apertura y exploración del proyecto espejo de la galería; inventario de los archivos que lo componen.

### Vinculación con el proyecto semestral

Entorno de trabajo del proyecto propio configurado y respaldado en el repositorio del grupo.

### Agenda detallada

| **Bloque** | **Actividad**                                         | **Acumulado** |
| ---------- | ----------------------------------------------------- | ------------- |
| 5 min      | Apertura y objetivos                                  | 5 min         |
| 20 min     | Exposición: qué es RecMin, módulos y ciclo E–P–S      | 25 min        |
| 25 min     | Demostración: GUI y recorrido de un proyecto completo | 50 min        |
| 10 min     | Cierre, preguntas y encargo de instalación            | 60 min        |

### Entregables del grupo

- Diapositivas (PDF) y guía de instalación y primeros pasos.
- Mapa de módulos de RecMin con su función.

### Criterios de evaluación específicos

Claridad de la explicación, exactitud técnica y utilidad de la guía de instalación.

### Recursos y referencias

- RecMin (<https://www.recmin.com/>).
- Galería de proyectos: <https://cimejia.github.io/proyectos-estimacion-rrmm/>

## Lección 7. Gestión de datos de sondajes, muestras y topografía

| **Campo**                | **Detalle**                                                                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| Unidad                   | U2 — Software minero                                                                                                                 |
| Duración estimada        | 60 minutos                                                                                                                           |
| Semana / sesión          | S5 · Clase 1 (la Clase 2 de esa semana aloja el taller)                                                                              |
| Grupo expositor          | G3                                                                                                                                   |
| Software principal       | RecMin; Google Earth                                                                                                                 |
| Resultado de aprendizaje | Realiza la importación y el almacenamiento de datos de sondajes y topografía, valida los datos y presenta la información en 2D y 3D. |

### Contenidos

- Estructura de la base de datos: collar, levantamiento (survey), litología, alteración y muestras.
- Coordenadas cortas y reales; sistema de referencia.
- Importación de topografía: mallado y curvas de nivel; verificación en Google Earth.
- Verificación y corrección de errores: duplicados, longitudes negativas, leyes fuera de rango y desviaciones.
- Visualización 2D y 3D; detalle de sondeos y muestras (barras de leyes).

### Parte demostrativa (ejemplos de la galería)

- Importación en vivo del conjunto de sondajes sintéticos de un proyecto de la galería.
- Detección y corrección guiada de errores deliberadamente sembrados en el conjunto de datos.
- Visualización 2D/3D de sondajes y topografía, y contraste con Google Earth.

### Taller de aplicación (Clase 2)

- Importar la topografía y los sondajes del proyecto propio y validar la base de datos con una lista de verificación.
- Entregar un informe de errores detectados y su corrección.

### Vinculación con el proyecto semestral

Base de datos del proyecto semestral validada y respaldada (segundo hito del proyecto).

### Agenda detallada

| **Bloque** | **Actividad**                                                         | **Acumulado** |
| ---------- | --------------------------------------------------------------------- | ------------- |
| 5 min      | Apertura y objetivos                                                  | 5 min         |
| 15 min     | Exposición: estructura de datos mineros y control de calidad          | 20 min        |
| 25 min     | Demostración: importación, detección de errores y visualización 2D/3D | 45 min        |
| 10 min     | Reto de errores para la clase y cierre                                | 55 min        |
| 5 min      | Preguntas y encargo del taller                                        | 60 min        |

### Entregables del grupo

- Diapositivas (PDF), conjunto de datos de práctica con errores y lista de verificación (checklist).
- Guía de importación de sondajes y topografía.

### Criterios de evaluación específicos

Exhaustividad del control de calidad y capacidad de resolver errores reales de datos.

### Recursos y referencias

- Datos sintéticos publicados en la galería de proyectos.
- RecMin (<https://www.recmin.com/>).

## Lección 8. Análisis exploratorio de datos, distribución de clases y R/RStudio

| **Campo**                | **Detalle**                                                                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Unidad                   | U2 — Software minero                                                                                                                  |
| Duración estimada        | 90 minutos                                                                                                                            |
| Semana / sesión          | S6 · Clase 1 (la Clase 2 de esa semana aloja el taller)                                                                               |
| Grupo expositor          | G3                                                                                                                                    |
| Software principal       | RecMin; R y RStudio (local y en la nube)                                                                                              |
| Resultado de aprendizaje | Realiza el análisis exploratorio de datos de muestras, aplica métodos de distribución de clases y visualiza la información en barras. |

### Contenidos

- Estadística descriptiva e inferencial de leyes: tendencia central, dispersión, asimetría y curtosis.
- Análisis de valores extremos (outliers) y criterios de truncamiento (capping).
- Métodos de distribución de clases: intervalos iguales, cuantiles, cortes naturales y agrupamiento.
- Visualización en barras de muestras en RecMin.
- R y RStudio: metodología de software, entorno local y en la nube, importación de muestras.

### Parte demostrativa (ejemplos de la galería)

- Reproducción del AED publicado para un dominio del caso Carlés de la galería, comparando resultados.
- Comparación en R de cuatro métodos de distribución de clases sobre las mismas leyes.
- Generación de barras de muestras en RecMin a partir de los intervalos definidos.

### Taller de aplicación (Clase 2)

- AED completo del proyecto propio: histogramas, estadísticos, outliers y clases.
- Generación de intervalos por ley y por litología, e informe de decisión.

### Vinculación con el proyecto semestral

Informe de AED del proyecto propio con la justificación del método de clases elegido.

### Agenda detallada

| **Bloque** | **Actividad**                                                         | **Acumulado** |
| ---------- | --------------------------------------------------------------------- | ------------- |
| 5 min      | Apertura y objetivos                                                  | 5 min         |
| 25 min     | Exposición: AED, outliers y métodos de distribución de clases         | 30 min        |
| 30 min     | Demostración: AED en R sobre un caso de la galería y clases en RecMin | 60 min        |
| 25 min     | Taller exprés sobre el proyecto propio                                | 85 min        |
| 5 min      | Cierre, preguntas y encargo                                           | 90 min        |

### Entregables del grupo

- Diapositivas (PDF), notebook de R y conjunto de datos de práctica.
- Tabla comparativa de métodos de distribución de clases.

### Criterios de evaluación específicos

Corrección estadística, justificación del método y reproducibilidad del notebook.

### Recursos y referencias

- R y RStudio (<https://posit.co/download/rstudio-desktop/>).
- Datos del proyecto Carlés publicados en la galería.

## Lección 9. Modelización geológica: secciones, mallado T3 y cálculo de volúmenes

| **Campo**                | **Detalle**                                                                                                                 |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| Unidad                   | U2 — Software minero                                                                                                        |
| Duración estimada        | 120 minutos                                                                                                                 |
| Semana / sesión          | S7 · Clase 1 (la Clase 2 de esa semana aloja el taller)                                                                     |
| Grupo expositor          | G4                                                                                                                          |
| Software principal       | RecMin; Excel                                                                                                               |
| Resultado de aprendizaje | Aplica herramientas de dibujo, perfiles y secciones para crear cuerpos geológicos, emplea mallados T3 y calcula su volumen. |

### Contenidos

- Cortes y secciones geológicas: construcción manual y control de calidad geométrico.
- Objetos de dibujo: punto, línea, polilínea y superficie; creación y modificación.
- Dibujo y edición de secciones basado en litologías y en leyes de corte.
- Mallado o triangulación T3: criterios, cierre de sólidos y reparación de errores.
- Cálculo de volumen por el método geométrico de secciones y por mallado T3; comparación y validación.
- Secciones paralelas automáticas y guardado en archivos; exportación de resultados a Excel.

### Parte demostrativa (ejemplos de la galería)

- Construcción en vivo del cuerpo mineralizado de un caso de la galería a partir de secciones dibujadas.
- Generación del mallado T3 y cálculo del volumen por dos métodos, con análisis de la diferencia.
- Uso de secciones paralelas automáticas para densificar el modelo.

### Taller de aplicación (Clase 2)

- Modelo geológico de dos dominios del proyecto propio con secciones manuales y paralelas automáticas.
- Cálculo y comparación de volúmenes; exportación de la tabla de resultados a Excel.

### Vinculación con el proyecto semestral

Cuerpos geológicos y mineralizados del proyecto propio mallados, con volumen calculado y validado.

### Agenda detallada

| **Bloque** | **Actividad**                                          | **Acumulado** |
| ---------- | ------------------------------------------------------ | ------------- |
| 5 min      | Apertura y objetivos                                   | 5 min         |
| 25 min     | Exposición: secciones, mallado T3 y métodos de volumen | 30 min        |
| 45 min     | Demostración: del corte al sólido y al volumen         | 75 min        |
| 35 min     | Taller guiado sobre el proyecto propio                 | 110 min       |
| 10 min     | Cierre, preguntas y encargo                            | 120 min       |

### Entregables del grupo

- Diapositivas (PDF), proyecto RecMin de ejemplo y guía del taller.
- Hoja de cálculo comparativa de volúmenes por método.

### Criterios de evaluación específicos

Calidad geométrica del mallado, correcta interpretación geológica y trazabilidad del cálculo.

### Recursos y referencias

- RecMin (<https://www.recmin.com/>).
- Cuerpos geológicos publicados en la galería de proyectos.

## Lección 10. Modelo de bloques y compositación de muestras

| **Campo**                | **Detalle**                                                                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| Unidad                   | U2 — Software minero                                                                                                |
| Duración estimada        | 120 minutos                                                                                                         |
| Semana / sesión          | S8 · Clase 1 (la Clase 2 de esa semana aloja el taller)                                                             |
| Grupo expositor          | G4                                                                                                                  |
| Software principal       | RecMin; SGeMS                                                                                                       |
| Resultado de aprendizaje | Genera un modelo de bloques por dominio geológico y realiza la regularización de muestras (compósitos) por dominio. |

### Contenidos

- Base de datos de bloques: creación de tabla, configuración del tamaño de bloque y relleno del cuerpo geológico.
- Selección de bloques por dominio geológico y recorte con topografía.
- Exportación de bloques y cruce con RecMin.
- Compositación: necesidad, definición de la longitud del compósito, intervalo y filtros por código litológico.
- Zonas en RecMin para generar compósitos por dominio geológico-mineralizado.

### Parte demostrativa (ejemplos de la galería)

- Generación en vivo de un modelo de bloques de 10 × 10 × 10 m sobre el cuerpo mallado del caso espejo.
- Compositación por dominio y comparación de la distribución de leyes antes y después.
- Exportación del modelo de bloques y de los compósitos hacia SGeMS.

### Taller de aplicación (Clase 2)

- Modelo de bloques y compósitos por dominio del proyecto propio.
- Recorte con topografía y validación del número de bloques y de la pérdida de información.

### Vinculación con el proyecto semestral

Modelo de bloques y base de compósitos del proyecto propio exportados a SGeMS.

### Agenda detallada

| **Bloque** | **Actividad**                                          | **Acumulado** |
| ---------- | ------------------------------------------------------ | ------------- |
| 5 min      | Apertura y objetivos                                   | 5 min         |
| 25 min     | Exposición: modelo de bloques y compositación          | 30 min        |
| 45 min     | Demostración: bloques, dominios y compósitos en RecMin | 75 min        |
| 35 min     | Taller guiado sobre el proyecto propio                 | 110 min       |
| 10 min     | Cierre, preguntas y encargo                            | 120 min       |

### Entregables del grupo

- Diapositivas (PDF) y proyecto RecMin con bloques y compósitos de ejemplo.
- Guía de exportación RecMin → SGeMS.

### Criterios de evaluación específicos

Correcta definición del tamaño de bloque y de la longitud de compósito; coherencia por dominio.

### Recursos y referencias

- RecMin (<https://www.recmin.com/>).
- SGeMS (<https://sgems.sourceforge.net/>).

## Lección 11. Metodología geoestadística: variable regionalizada y análisis variográfico

| **Campo**                | **Detalle**                                                                                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unidad                   | U2 — Software minero                                                                                                                               |
| Duración estimada        | 60 minutos                                                                                                                                         |
| Semana / sesión          | S9 · Clase 1 (la Clase 2 de esa semana aloja el taller)                                                                                            |
| Grupo expositor          | G5                                                                                                                                                 |
| Software principal       | R y RStudio; SagaGIS                                                                                                                               |
| Resultado de aprendizaje | Aplica la metodología geoestadística: fenómeno y variable regionalizada, soporte geométrico, análisis direccional y transformación de la variable. |

### Contenidos

- Origen, fundamentos y aplicaciones de la geoestadística en la industria minera; etapas de la metodología.
- Fenómeno y variable regionalizada; cuerpo y soporte geométrico; relaciones entre compósitos y bloques.
- Hipótesis de estacionariedad y sus implicaciones prácticas.
- Representación espacial de muestras y nubes direccionales en R.
- Transformación de la variable a distribución normal (normal score) en R.
- Exportación de datos desde R hacia SagaGIS y construcción del mapa de superficie variográfica.
- Determinación de anisotropía e isotropía.

### Parte demostrativa (ejemplos de la galería)

- Nubes direccionales y mapa variográfico de un dominio del caso de la galería (P6 mina «0 Nivel» / P7 Carlés), ejecutados en R.
- Transformación normal de la variable y verificación de la mejora en la simetría.
- Recorrido del flujo R → SagaGIS y lectura del mapa de superficie variográfica para decidir direcciones de anisotropía.

### Taller de aplicación (Clase 2)

- Aplicar la metodología geoestadística completa al proyecto propio: soporte, nubes direccionales, normal score y mapa variográfico.
- Documentar las decisiones de anisotropía adoptadas.

### Vinculación con el proyecto semestral

Informe de análisis exploratorio espacial y definición de direcciones de anisotropía del proyecto propio.

### Agenda detallada

| **Bloque** | **Actividad**                                                            | **Acumulado** |
| ---------- | ------------------------------------------------------------------------ | ------------- |
| 5 min      | Apertura y objetivos                                                     | 5 min         |
| 20 min     | Exposición: metodología geoestadística y soporte geométrico              | 25 min        |
| 25 min     | Demostración: nubes direccionales, normal score y mapa variográfico en R | 50 min        |
| 10 min     | Cierre, preguntas y encargo                                              | 60 min        |

### Entregables del grupo

- Diapositivas (PDF) y notebook de R con el análisis direccional.
- Guía de exportación R → SagaGIS.

### Criterios de evaluación específicos

Rigor metodológico, correcta interpretación de las nubes direccionales y justificación de la anisotropía.

### Recursos y referencias

- Farinango, W. y Mejía-Escobar, C. (2025). Estimación de recursos minerales mediante geoestadística y machine learning.
- SagaGIS (<https://saga-gis.sourceforge.io/>).

## Lección 12. Variograma experimental y variograma modelo

| **Campo**                | **Detalle**                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- |
| Unidad                   | U2 — Software minero                                                                                          |
| Duración estimada        | 60 minutos                                                                                                    |
| Semana / sesión          | S9 · Clase 1 (la Clase 2 de esa semana aloja el taller)                                                       |
| Grupo expositor          | G5                                                                                                            |
| Software principal       | R y RStudio; SGeMS                                                                                            |
| Resultado de aprendizaje | Calcula e interpreta el variograma experimental y ajusta el variograma modelo en una, dos y tres dimensiones. |

### Contenidos

- Elementos del variograma: ejes, alcance, meseta, efecto pepita y fórmula.
- Variograma experimental en 1D, 2D y 3D; malla regular e irregular.
- Resumen de parámetros de distancia y ángulos.
- Variograma modelo: concepto, utilidad y funciones matemáticas (esférica, exponencial, gaussiana y cúbica).
- Variograma principal, ortogonal y vertical; radios del elipsoide de búsqueda (alcances mayor, medio y menor) y ajuste de meseta y efecto pepita.

### Parte demostrativa (ejemplos de la galería)

- Cálculo del variograma experimental del caso espejo y ajuste interactivo del modelo.
- Comparación del ajuste propio con el variograma publicado en la galería para el mismo caso.
- Lectura del elipsoide de búsqueda resultante y su traducción a parámetros de kriging.

### Taller de aplicación (Clase 2)

- Variograma modelo por dominio del proyecto propio, en las direcciones principal, ortogonal y vertical.
- Tabla resumen de parámetros (alcances, meseta y pepita) lista para SGeMS.

### Vinculación con el proyecto semestral

Modelo variográfico completo del proyecto propio, documentado y parametrizado.

### Agenda detallada

| **Bloque** | **Actividad**                                         | **Acumulado** |
| ---------- | ----------------------------------------------------- | ------------- |
| 5 min      | Apertura y objetivos                                  | 5 min         |
| 20 min     | Exposición: variograma experimental y modelo          | 25 min        |
| 25 min     | Demostración: cálculo, ajuste y lectura de parámetros | 50 min        |
| 10 min     | Cierre, preguntas y encargo                           | 60 min        |

### Entregables del grupo

- Diapositivas (PDF), script de variografía y tabla de parámetros.
- Guía de ajuste del variograma modelo.

### Criterios de evaluación específicos

Calidad del ajuste, coherencia geológica del modelo y correcta definición del elipsoide.

### Recursos y referencias

- Farinango, W. y Mejía-Escobar, C. (2025). Estimación de recursos minerales mediante geoestadística y machine learning.
- SGeMS (<https://sgems.sourceforge.net/>).

## Lección 13. SGeMS y Kriging: estimación de bloques y categorización de recursos

| **Campo**                | **Detalle**                                                                                                                |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Unidad                   | U2 — Software minero                                                                                                       |
| Duración estimada        | 120 minutos                                                                                                                |
| Semana / sesión          | S10 · Clase 1 (la Clase 2 de esa semana aloja el taller)                                                                   |
| Grupo expositor          | G5                                                                                                                         |
| Software principal       | SGeMS; RecMin                                                                                                              |
| Resultado de aprendizaje | Configura y ejecuta el algoritmo de Kriging, valida la estimación y categoriza los recursos usando la varianza de kriging. |

### Contenidos

- SGeMS: propósito, origen y evolución, descarga, instalación e interfaz gráfica.
- Configuración del algoritmo de Kriging: variograma, elipsoide de búsqueda, número de muestras, kriging ordinario y simple.
- Ejecución de la estimación de bloques, visualización y validación (validación cruzada).
- Varianza de kriging como criterio de categorización: recursos medidos, indicados e inferidos.
- Exportación de bloques estimados a RecMin; filtros de ley y visualización 2D/3D.

### Parte demostrativa (ejemplos de la galería)

- Kriging ordinario completo sobre el caso de la galería: definición de parámetros, ejecución y diagnóstico.
- Validación cruzada y análisis de residuos.
- Mapa de categorías de recursos obtenido a partir de la varianza de kriging y visualización en RecMin.

### Taller de aplicación (Clase 2)

- Estimación por dominio y categorización de recursos del proyecto propio.
- Importación de los bloques estimados a RecMin, filtros de concentración y visualización 2D/3D.

### Vinculación con el proyecto semestral

Modelo de bloques estimado por kriging y categorizado del proyecto semestral (tercer hito).

### Agenda detallada

| **Bloque** | **Actividad**                                         | **Acumulado** |
| ---------- | ----------------------------------------------------- | ------------- |
| 5 min      | Apertura y objetivos                                  | 5 min         |
| 25 min     | Exposición: SGeMS, kriging y varianza de kriging      | 30 min        |
| 45 min     | Demostración: estimación, validación y categorización | 75 min        |
| 35 min     | Taller guiado sobre el proyecto propio                | 110 min       |
| 10 min     | Cierre, preguntas y encargo                           | 120 min       |

### Entregables del grupo

- Diapositivas (PDF), proyecto SGeMS de ejemplo y guía de parametrización.
- Tabla de categorías de recursos y criterios aplicados.

### Criterios de evaluación específicos

Corrección de los parámetros de kriging, calidad de la validación y coherencia de la categorización.

### Recursos y referencias

- SGeMS (<https://sgems.sourceforge.net/>).
- Farinango, W. y Mejía-Escobar, C. (2025).

## Lección 14. Inteligencia artificial y Machine Learning: conceptos e ingeniería de prompting

| **Campo**                | **Detalle**                                                                                                          |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| Unidad                   | U3 — Estimación de recursos minerales con Machine Learning                                                           |
| Duración estimada        | 60 minutos                                                                                                           |
| Semana / sesión          | S11 · Clase 1 (la Clase 2 de esa semana aloja el taller)                                                             |
| Grupo expositor          | G6                                                                                                                   |
| Software principal       | Gemini / ChatGPT; navegador web                                                                                      |
| Resultado de aprendizaje | Distingue IA, ML y DL, reconoce los tipos de problemas y aplica ingeniería de prompting como herramienta de trabajo. |

### Contenidos

- IA, Machine Learning y Deep Learning: definiciones, relaciones y diferencias con los métodos tradicionales.
- Tipos de ML: supervisado, no supervisado y por refuerzo.
- Tipos de problemas y algoritmos: clasificación, regresión y agrupamiento; ejemplos en minería.
- Aplicaciones reales en exploración, estimación de recursos, geotecnia y mantenimiento.
- Ingeniería de prompting: concepto, estructura, elementos y fórmula; ejemplos y buenas prácticas.

### Parte demostrativa (ejemplos de la galería)

- Demostración en vivo con Gemini/ChatGPT: construcción progresiva de un prompt para analizar el flujo de trabajo de un proyecto publicado en la galería.
- Comparación de un prompt pobre frente a un prompt estructurado, con análisis de la calidad de la respuesta.
- Recorrido por los proyectos con componente ML de la galería para identificar qué problema resuelve cada uno.

### Taller de aplicación (Clase 2)

- Elaborar y probar el prompt inicial del proyecto propio, documentando la versión final y su justificación.
- Clasificar el problema del proyecto propio (regresión o clasificación) y elegir la familia de algoritmos.

### Vinculación con el proyecto semestral

Documento de definición del problema de ML del proyecto propio y bitácora de prompts.

### Agenda detallada

| **Bloque** | **Actividad**                                                | **Acumulado** |
| ---------- | ------------------------------------------------------------ | ------------- |
| 5 min      | Apertura y objetivos                                         | 5 min         |
| 20 min     | Exposición: IA, ML, tipos de problemas y prompting           | 25 min        |
| 25 min     | Demostración: prompting aplicado a un proyecto de la galería | 50 min        |
| 10 min     | Cierre, preguntas y encargo                                  | 60 min        |

### Entregables del grupo

- Diapositivas (PDF) y biblioteca de prompts comentada.
- Guía de definición del problema de ML.

### Criterios de evaluación específicos

Claridad conceptual, calidad de los prompts demostrados y pertinencia de la aplicación minera.

### Recursos y referencias

- Curso intensivo de Machine Learning de Google (<https://developers.google.com/machine-learning/crash-course>).
- Bagnato, J. I. (2022). Aprende Machine Learning en español.

## Lección 15. Metodología de ML, generación de datos sintéticos e ingeniería de características

| **Campo**                | **Detalle**                                                                                                 |
| ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| Unidad                   | U3 — Estimación de recursos minerales con Machine Learning                                                  |
| Duración estimada        | 60 minutos                                                                                                  |
| Semana / sesión          | S11 · Clase 1 (la Clase 2 de esa semana aloja el taller)                                                    |
| Grupo expositor          | G6                                                                                                          |
| Software principal       | Python (NumPy, Pandas, scikit-learn), Jupyter/Colab                                                         |
| Resultado de aprendizaje | Emplea la metodología de ML para la estimación de recursos minerales mediante herramientas computacionales. |

### Contenidos

- Fases de un proyecto de ML: adquisición, recopilación, depuración, preprocesamiento, exploración, ingeniería de características, entrenamiento, evaluación y predicción.
- Generación de datos sintéticos de sondajes: motivación, simulación y control de calidad.
- Variables cualitativas a cuantitativas: codificación binaria y one-hot.
- Preprocesamiento: separación de variable dependiente e independientes, normalización y estandarización.
- Plataformas de desarrollo: local (Jupyter) y en la nube (Google Colab).

### Parte demostrativa (ejemplos de la galería)

- Análisis del pipeline de generación de datos sintéticos y de ingeniería de características de los proyectos publicados en la galería.
- Notebook en vivo: de los compósitos a la matriz de características lista para el entrenamiento.
- Demostración del efecto de la normalización sobre el entrenamiento.

### Taller de aplicación (Clase 2)

- Notebook de programación del proyecto propio: carga de compósitos, generación o depuración de datos y matriz de características.
- Informe de decisiones de preprocesamiento.

### Vinculación con el proyecto semestral

Notebook reproducible de preparación de datos del proyecto semestral (cuarto hito).

### Agenda detallada

| **Bloque** | **Actividad**                                               | **Acumulado** |
| ---------- | ----------------------------------------------------------- | ------------- |
| 5 min      | Apertura y objetivos                                        | 5 min         |
| 20 min     | Exposición: metodología de ML y datos sintéticos            | 25 min        |
| 25 min     | Demostración: pipeline de datos y características en Python | 50 min        |
| 10 min     | Cierre, preguntas y encargo                                 | 60 min        |

### Entregables del grupo

- Diapositivas (PDF) y notebook de preprocesamiento.
- Conjunto de datos de práctica y diccionario de variables.

### Criterios de evaluación específicos

Reproducibilidad del pipeline, correcta codificación de variables y justificación de las transformaciones.

### Recursos y referencias

- Curso intensivo de Machine Learning de Google (<https://developers.google.com/machine-learning/crash-course>).
- Google Colab (<https://colab.research.google.com/>).

## Lección 16. Redes neuronales artificiales: del perceptrón al perceptrón multicapa

| **Campo**                | **Detalle**                                                                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| Unidad                   | U3 — Estimación de recursos minerales con Machine Learning                                                          |
| Duración estimada        | 60 minutos                                                                                                          |
| Semana / sesión          | S12 · Clase 1 (la Clase 2 de esa semana aloja el taller)                                                            |
| Grupo expositor          | G6                                                                                                                  |
| Software principal       | Python (scikit-learn, TensorFlow/Keras)                                                                             |
| Resultado de aprendizaje | Conoce e implementa modelos de redes neuronales artificiales para el tratamiento de problemas geológicos y mineros. |

### Contenidos

- Estructura y funcionamiento de la neurona artificial y del perceptrón.
- Modelo lineal de regresión y de clasificación; limitaciones.
- No linealidad y funciones de activación (sigmoide, tanh, ReLU y softmax).
- Perceptrón multicapa (MLP): arquitectura, capas ocultas y número de neuronas.
- Teorema universal de aproximación y ejemplos aplicados.

### Parte demostrativa (ejemplos de la galería)

- Construcción en vivo de un perceptrón y de un MLP en Python sobre datos geológicos de un caso de la galería.
- Comparación del desempeño de un modelo lineal frente a un MLP sobre el mismo conjunto de datos.
- Visualización de la frontera de decisión y de las predicciones espaciales.

### Taller de aplicación (Clase 2)

- Diseño y construcción de la red neuronal del proyecto propio, con justificación de la arquitectura.
- Primer entrenamiento exploratorio y registro de resultados.

### Vinculación con el proyecto semestral

Arquitectura de red neuronal definida e implementada para el proyecto semestral.

### Agenda detallada

| **Bloque** | **Actividad**                                       | **Acumulado** |
| ---------- | --------------------------------------------------- | ------------- |
| 5 min      | Apertura y objetivos                                | 5 min         |
| 25 min     | Exposición: neurona, perceptrón, activaciones y MLP | 30 min        |
| 20 min     | Demostración: perceptrón y MLP en Python            | 50 min        |
| 10 min     | Cierre, preguntas y encargo                         | 60 min        |

### Entregables del grupo

- Diapositivas (PDF) y notebook de construcción de la red.
- Esquema comentado de la arquitectura propuesta.

### Criterios de evaluación específicos

Corrección conceptual, justificación de la arquitectura y claridad del código.

### Recursos y referencias

- Bagnato, J. I. (2022). Aprende Machine Learning en español.
- TensorFlow/Keras (<https://www.tensorflow.org/>).

## Lección 17. Entrenamiento de la red: forward propagation, backpropagation y descenso del gradiente

| **Campo**                | **Detalle**                                                                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unidad                   | U3 — Estimación de recursos minerales con Machine Learning                                                                                       |
| Duración estimada        | 60 minutos                                                                                                                                       |
| Semana / sesión          | S12 · Clase 1 (la Clase 2 de esa semana aloja el taller)                                                                                         |
| Grupo expositor          | G7                                                                                                                                               |
| Software principal       | Python (TensorFlow/Keras, Matplotlib)                                                                                                            |
| Resultado de aprendizaje | Explica y aplica el proceso de entrenamiento y aprendizaje de una red neuronal, incluidos el cálculo del error y la actualización de parámetros. |

### Contenidos

- Parámetros, inicialización de pesos y sesgos.
- Forward propagation y cálculo de la salida.
- Funciones de pérdida y cálculo del error (MSE, MAE y entropía cruzada).
- Backpropagation: regla de la cadena y cálculo de gradientes.
- Descenso del gradiente, tasa de aprendizaje, épocas, lotes y variantes (SGD, Adam).
- Curvas de aprendizaje y diagnóstico de sobreajuste y subajuste.

### Parte demostrativa (ejemplos de la galería)

- Entrenamiento paso a paso con visualización de la pérdida por época sobre el conjunto de datos de un caso de la galería.
- Ejercicio guiado de backpropagation resuelto a mano y verificado con código.
- Efecto de tres tasas de aprendizaje distintas sobre la convergencia.

### Taller de aplicación (Clase 2)

- Entrenamiento del modelo del proyecto propio con ajuste de hiperparámetros.
- Registro de curvas de aprendizaje e interpretación.

### Vinculación con el proyecto semestral

Bitácora de experimentos de entrenamiento del proyecto semestral.

### Agenda detallada

| **Bloque** | **Actividad**                                           | **Acumulado** |
| ---------- | ------------------------------------------------------- | ------------- |
| 5 min      | Apertura y objetivos                                    | 5 min         |
| 20 min     | Exposición: forward, error, backpropagation y gradiente | 25 min        |
| 25 min     | Demostración: entrenamiento y curvas de aprendizaje     | 50 min        |
| 10 min     | Cierre, preguntas y encargo                             | 60 min        |

### Entregables del grupo

- Diapositivas (PDF), notebook de entrenamiento y ejercicio de backpropagation resuelto.
- Plantilla de bitácora de experimentos.

### Criterios de evaluación específicos

Dominio matemático del algoritmo, correcta interpretación de las curvas y rigor del experimento.

### Recursos y referencias

- Curso intensivo de Machine Learning de Google (<https://developers.google.com/machine-learning/crash-course>).

## Lección 18. Evaluación, predicción y comparación geoestadística frente a Machine Learning

| **Campo**                | **Detalle**                                                                                                    |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| Unidad                   | U3 — Estimación de recursos minerales con Machine Learning                                                     |
| Duración estimada        | 90 minutos                                                                                                     |
| Semana / sesión          | S13 · Clase 1 (la Clase 2 de esa semana aloja el taller)                                                       |
| Grupo expositor          | G7                                                                                                             |
| Software principal       | Python; SGeMS; RecMin                                                                                          |
| Resultado de aprendizaje | Evalúa modelos de ML, realiza predicciones de leyes y compara los resultados con la estimación geoestadística. |

### Contenidos

- Métricas de evaluación: R², MAE, RMSE y MAPE; validación cruzada y conjunto de prueba.
- Estrategias de mejora del rendimiento: regularización, dropout, early stopping y aumento de datos.
- Predicción espacial de leyes e importación de resultados a RecMin.
- Comparación geoestadística frente a ML: validación cruzada, mapas de error, categorización de recursos y limitaciones de cada enfoque.
- Estructura del informe de estimación de recursos y de la sustentación oral.

### Parte demostrativa (ejemplos de la galería)

- Comparación publicada en la galería: estimación por red neuronal frente a kriging en la mina «0 Nivel» y en Carlés.
- Análisis crítico de discrepancias entre ambos métodos y de sus causas geológicas.
- Presentación del informe tipo de resultados y de la rúbrica de sustentación.

### Taller de aplicación (Clase 2)

- Comparación geoestadística frente a ML del proyecto propio, con métricas y mapas de error.
- Redacción del informe de resultados y preparación de la sustentación final.

### Vinculación con el proyecto semestral

Informe comparativo final y material de sustentación del proyecto semestral.

### Agenda detallada

| **Bloque** | **Actividad**                                                           | **Acumulado** |
| ---------- | ----------------------------------------------------------------------- | ------------- |
| 5 min      | Apertura y objetivos                                                    | 5 min         |
| 20 min     | Exposición: métricas, mejora del rendimiento y comparación de métodos   | 25 min        |
| 35 min     | Demostración: comparación RNA frente a kriging en un caso de la galería | 60 min        |
| 25 min     | Taller: estructura del informe y plan de sustentación                   | 85 min        |
| 5 min      | Cierre, preguntas y encargo                                             | 90 min        |

### Entregables del grupo

- Diapositivas (PDF), notebook de evaluación y plantilla de informe.
- Rúbrica de sustentación final.

### Criterios de evaluación específicos

Rigor del análisis comparativo, uso correcto de métricas y calidad del informe.

### Recursos y referencias

- Proyectos P6 y P7 publicados en la galería.
- Farinango, W. y Mejía-Escobar, C. (2025).

## Lección 19. Diseño de explotación subterránea asistido por software

| **Campo**                | **Detalle**                                                                  |
| ------------------------ | ---------------------------------------------------------------------------- |
| Unidad                   | U4 — Diseño de explotación                                                   |
| Duración estimada        | 120 minutos                                                                  |
| Semana / sesión          | S14 · Clase 1 (la Clase 2 de esa semana aloja el taller)                     |
| Grupo expositor          | G8                                                                           |
| Software principal       | RecMin; AutoCAD                                                              |
| Resultado de aprendizaje | Diseña los elementos básicos de un modelo subterráneo de explotación minera. |

### Contenidos

- Elementos del diseño subterráneo: bocamina, galería, galerías multinivel, pique, chimenea y rampa.
- Herramientas de dibujo: líneas paralelas, longitud, segmento y ángulo.
- Rampas en espiral y en elipse; criterios geométricos y de pendiente.
- Sección de galería personalizada y sección con bóveda circular.
- Manga de ventilación y criterios básicos de infraestructura.

### Parte demostrativa (ejemplos de la galería)

- Diseño subterráneo básico completo realizado en vivo sobre un caso de la galería.
- Construcción de una rampa en espiral y de una galería multinivel con sección personalizada.
- Recorrido 3D del diseño y verificación de la continuidad geométrica.

### Taller de aplicación (Clase 2)

- Diseño de minado subterráneo básico del proyecto propio: bocamina, galerías, pique, chimenea y rampa.
- Sección de galería con bóveda circular y exportación de la geometría.

### Vinculación con el proyecto semestral

Planos y modelo 3D del diseño subterráneo básico del proyecto semestral.

### Agenda detallada

| **Bloque** | **Actividad**                                               | **Acumulado** |
| ---------- | ----------------------------------------------------------- | ------------- |
| 5 min      | Apertura y objetivos                                        | 5 min         |
| 25 min     | Exposición: elementos y herramientas del diseño subterráneo | 30 min        |
| 45 min     | Demostración: galerías, rampas y secciones en RecMin        | 75 min        |
| 35 min     | Taller guiado sobre el proyecto propio                      | 110 min       |
| 10 min     | Cierre, preguntas y encargo                                 | 120 min       |

### Entregables del grupo

- Diapositivas (PDF), proyecto RecMin de ejemplo y guía de dibujo.
- Juego de planos (planta, perfil y secciones tipo).

### Criterios de evaluación específicos

Correcta aplicación de criterios geométricos, calidad gráfica y coherencia con el modelo geológico.

### Recursos y referencias

- RecMin (<https://www.recmin.com/>).
- Galería de proyectos: <https://cimejia.github.io/proyectos-estimacion-rrmm/>

## Lección 20. Diseño de explotación superficial: Open Pit, pistas, plataformas y maquinaria

| **Campo**                | **Detalle**                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Unidad                   | U4 — Diseño de explotación                                                                                                         |
| Duración estimada        | 120 minutos                                                                                                                        |
| Semana / sesión          | S15 · Clase 1 (la Clase 2 de esa semana aloja el taller)                                                                           |
| Grupo expositor          | G8                                                                                                                                 |
| Software principal       | RecMin; AutoCAD                                                                                                                    |
| Resultado de aprendizaje | Diseña el Open Pit con las herramientas del software minero, incluyendo pistas, plataformas y maquinaria, y recorta la topografía. |

### Contenidos

- Herramientas de dibujo: lápiz, línea, vértices y superficies.
- Creación del fondo de pit y generación de superficies a partir de una línea.
- Parámetros geomecánicos y geométricos: ángulo de talud, bermas y ancho de pista.
- Diseño de pista de acceso y plataformas horizontales; maquinaria minera.
- Mallado T3 del diseño superficial; recorte de la topografía y de los bloques con el pit.
- Traslación, escalado y giro de objetos para infraestructura superficial.

### Parte demostrativa (ejemplos de la galería)

- Diseño de un Open Pit completo en vivo sobre el caso espejo de la galería, con pista de acceso y plataforma.
- Recorte de la topografía y del modelo de bloques estimado con el pit generado.
- Inclusión de maquinaria y cálculo del volumen removido; presentación de la nueva topografía.

### Taller de aplicación (Clase 2)

- Diseño de minado superficial del proyecto propio con pista de acceso, plataforma y maquinaria.
- Recorte de bloques y presentación de la topografía final de mina.

### Vinculación con el proyecto semestral

Diseño final de mina superficial del proyecto semestral y topografía resultante (quinto hito).

### Agenda detallada

| **Bloque** | **Actividad**                                             | **Acumulado** |
| ---------- | --------------------------------------------------------- | ------------- |
| 5 min      | Apertura y objetivos                                      | 5 min         |
| 25 min     | Exposición: parámetros y herramientas del Open Pit        | 30 min        |
| 45 min     | Demostración: pit, pista, plataforma y recorte de bloques | 75 min        |
| 35 min     | Taller guiado sobre el proyecto propio                    | 110 min       |
| 10 min     | Cierre, preguntas y encargo                               | 120 min       |

### Entregables del grupo

- Diapositivas (PDF), proyecto RecMin de ejemplo y guía de parámetros de diseño.
- Planos de planta y secciones del pit, y topografía final.

### Criterios de evaluación específicos

Pertinencia de los parámetros geomecánicos, correcta operación de recorte y calidad del entregable final.

### Recursos y referencias

- RecMin (<https://www.recmin.com/>).
- Proyectos P4 y P7 publicados en la galería.

# 10\. Sistema de evaluación de las exposiciones

La exposición de las lecciones constituye la evaluación formativa colaborativa del sílabo, con un peso del 25 % (5 puntos sobre 20). La calificación es grupal en un 70 % e individual en un 30 %, de modo que se reconoce el trabajo del equipo sin diluir la responsabilidad personal.

## 10.1 Rúbrica de la exposición

| **Criterio**                                 | **Peso** | **Descriptor de nivel excelente**                                                                      |
| -------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------ |
| Dominio conceptual y rigor técnico           | 20 %     | Explica con precisión los conceptos, usa terminología correcta y responde con solvencia las preguntas. |
| Demostración con ejemplos de la galería      | 20 %     | Reproduce (no solo muestra) al menos un ejemplo publicado en la galería y lo adapta a su propio caso.  |
| Transferencia al proyecto semestral propio   | 15 %     | Vincula explícitamente la lección con los avances de su proyecto y genera un producto útil para él.    |
| Didáctica, claridad y gestión del tiempo     | 15 %     | Estructura clara, ritmo adecuado, lenguaje accesible y cumplimiento estricto del tiempo asignado.      |
| Recursos audiovisuales y guion               | 10 %     | Diapositivas sintéticas y legibles, figuras pertinentes, guion escrito y citas de las fuentes.         |
| Taller de aplicación y material de práctica  | 10 %     | Entrega conjunto de datos, script y guía reproducibles, y acompaña la práctica de la clase siguiente.  |
| Participación individual y trabajo en equipo | 10 %     | Todos los integrantes exponen, dominan su parte y el grupo evidencia coordinación.                     |

_Total: 100 %._

## 10.2 Escala de valoración

| **Nivel**         | **Descripción**                                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------- |
| Excelente (4)     | Cumple todos los criterios con creces y aporta valor adicional (datos extra, comparación crítica). |
| Bueno (3)         | Cumple todos los criterios con errores menores que no afectan el aprendizaje.                      |
| Aceptable (2)     | Cumple parcialmente; requiere correcciones sustantivas.                                            |
| Insuficiente (1)  | Incumple criterios esenciales; la exposición no permite alcanzar el resultado de aprendizaje.      |
| No presentado (0) | No expone en la fecha asignada sin justificación.                                                  |

## 10.3 Instrumentos complementarios

| **Instrumento**           | **Peso en la nota de la exposición** | **Descripción**                                                                                   |
| ------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------- |
| Rúbrica del docente       | 70 %                                 | Aplicada durante la exposición por el docente, con base en los criterios anteriores.              |
| Coevaluación entre grupos | 15 %                                 | Cada grupo no expositor entrega una ficha con dos preguntas técnicas y una valoración razonada.   |
| Autoevaluación del grupo  | 15 %                                 | El grupo expone su proceso, dificultades y aprendizajes; se contrasta con la evidencia entregada. |

## 10.4 Ponderación global de la asignatura

| **Componente**                                                   | **Peso** | **Puntos** | **Instrumento en este plan**                                            |
| ---------------------------------------------------------------- | -------- | ---------- | ----------------------------------------------------------------------- |
| Evaluación formativa individual (tareas, pruebas, participación) | 35 %     | 7          | Talleres de la Clase 2, pruebas cortas y participación en coevaluación. |
| Evaluación formativa colaborativa (proyecto con ML)              | 25 %     | 5          | Exposición de las 20 lecciones y proyecto semestral.                    |
| Evaluación sumativa intermedia                                   | 10 %     | 2          | Práctica de laboratorio en la semana 8.                                 |
| Evaluación sumativa final                                        | 30 %     | 6          | Sustentación y defensa del proyecto semestral en la semana 16.          |
| Total                                                            | 100 %    | 20         |                                                                         |

# 11\. Normas de operación, entregables y uso ético de la IA

## 11.1 Normas de operación

1\. Entrega de materiales (diapositivas en PDF, conjunto de datos, script/notebook y guía del taller) en el aula virtual hasta 48 horas antes de la exposición.

2\. Duración estricta: se concede una tolerancia máxima de 5 minutos; el tiempo restante de la sesión se destina a preguntas y coevaluación.

3\. Todos los integrantes del grupo deben exponer al menos un bloque y estar disponibles para responder preguntas.

4\. Uso obligatorio de al menos un caso publicado en la Galería de Proyectos de Estimación de Recursos Minerales y del proyecto semestral propio en la parte demostrativa.

5\. Reproducibilidad: los scripts deben ejecutarse sin intervención manual y declarar versiones de software y librerías.

6\. Uso ético de la IA: se debe declarar qué herramientas se usaron y adjuntar los prompts relevantes; la IA no reemplaza el criterio técnico.

7\. Los grupos no expositores entregan una ficha de coevaluación con dos preguntas técnicas por lección.

8\. Los datos confidenciales de empresas no pueden publicarse; se usan datos sintéticos o anonimizados.

9\. Puntualidad y presentación formal; el grupo responsable abre el aula y verifica los equipos 15 minutos antes.

## 11.2 Paquete de entrega por lección

| **Elemento**                     | **Formato**                   | **Plazo**    |
| -------------------------------- | ----------------------------- | ------------ |
| Diapositivas de la lección       | PDF, con guion en notas       | 48 h antes   |
| Conjunto de datos de práctica    | CSV / XLSX / RecMin / SGeMS   | 48 h antes   |
| Script o notebook reproducible   | .R, .py o .ipynb comentado    | 48 h antes   |
| Guía del taller de la Clase 2    | PDF de 1 a 2 páginas          | 48 h antes   |
| Ficha de fuentes y prompts de IA | PDF con enlaces y declaración | 48 h antes   |
| Autoevaluación del grupo         | Formulario del aula virtual   | 72 h después |

## 11.3 Uso ético de la inteligencia artificial

- La IA generativa es una herramienta permitida y fomentada, pero su uso debe declararse: herramienta utilizada, prompts relevantes y grado de intervención.
- El contenido técnico es responsabilidad exclusiva del grupo. Una respuesta de IA que el grupo no pueda defender en la ronda de preguntas se considera no aprendida.
- No se admite la generación automática de la totalidad de las diapositivas ni de los scripts sin comprensión verificable.
- Los datos de empresas son confidenciales: se emplean datos sintéticos o anonimizados, tal como lo hacen los proyectos publicados en la galería.

# 12\. Notas de adaptación

| **Aspecto**             | **Ajuste propuesto**                                                                                                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Número de grupos        | El plan base usa 8 grupos. Si la clase tiene más estudiantes, la sección 7 incluye una variante de 10 grupos que conserva las mismas 20 lecciones y duraciones.                            |
| Variante sin Surfer     | Si no se dispone de licencia de Surfer, las lecciones 4 y 5 (180 min) pueden sustituirse por «Mapas y volúmenes con QGIS + RecMin», o bien reasignar su tiempo a las lecciones 9, 10 y 13. |
| Feriados                | Las semanas 3, 10 y 11 tienen feriados nacionales; el contenido se recupera en la sesión de práctica o se adelanta de forma asíncrona mediante el aula virtual.                            |
| Semana 16               | Se reserva para la evaluación sumativa final y la sustentación del proyecto; no aloja lecciones.                                                                                           |
| Necesidades específicas | Se garantiza material previo, grabación de las sesiones y tutoría adicional a los grupos expositores.                                                                                      |

# Anexo A. Plantilla de planificación de una lección

El grupo expositor completa esta plantilla y la adjunta junto con sus materiales.

| **Apartado**                                 | **Contenido a completar** |
| -------------------------------------------- | ------------------------- |
| Lección N° / título                          |                           |
| Grupo e integrantes (con roles)              |                           |
| Resultado de aprendizaje esperado            |                           |
| Contenidos (máximo 5 bloques)                |                           |
| Caso espejo de la galería utilizado          |                           |
| Producto que se reproduce en la demostración |                           |
| Transferencia al proyecto semestral          |                           |
| Agenda minutada (suma exacta de la duración) |                           |
| Preguntas de coevaluación para la clase (2)  |                           |
| Fuentes y prompts de IA declarados           |                           |

# Anexo B. Lista de verificación de calidad de la exposición

| **N°** | **Verificación**                                                                       | **Sí / No** |
| ------ | -------------------------------------------------------------------------------------- | ----------- |
| 1      | Los materiales se entregaron en el aula virtual al menos 48 horas antes.               |             |
| 2      | La demostración se realizó en vivo y no se limitó a diapositivas o capturas.           |             |
| 3      | Se reprodujo al menos un producto del caso espejo de la galería y se citó su autoría.  |             |
| 4      | Se aplicó el procedimiento al proyecto semestral propio y se mostró el resultado.      |             |
| 5      | El script o notebook se ejecuta sin intervención manual y está comentado.              |             |
| 6      | Todos los integrantes expusieron y respondieron al menos una pregunta.                 |             |
| 7      | La suma de los tiempos de la agenda coincide con la duración asignada a la lección.    |             |
| 8      | Se declararon las fuentes, las herramientas de IA utilizadas y los prompts relevantes. |             |
| 9      | Se entregó la guía del taller de la Clase 2.                                           |             |
| 10     | Se identificó al menos una limitación o mejora del trabajo de la galería utilizado.    |             |