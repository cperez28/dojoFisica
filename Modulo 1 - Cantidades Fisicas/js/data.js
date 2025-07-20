// data.js — Lista de exámenes del módulo Cantidades Físicas
// Campos: file (nombre real del archivo en /examenes/), titulo, tag, nivel, descripcion, icon

const exams = [
  {
    file: "Examen - Sistemas de Referencia Inerciales y No Inerciales (Olimpiadas).html",
    titulo: "Sistemas de Referencia (Olimpiadas)",
    tag: "Referencias",
    nivel: "Avanzado",
    descripcion: "Inerciales vs no inerciales, fuerzas ficticias y análisis competitivo.",
    icon: "tiempo"
  },
  {
    file: "Examen 1- Definición de Cantidades Físicas.html",
    titulo: "Definición de Cantidades",
    tag: "Fundamentos",
    nivel: "Básico",
    descripcion: "Naturaleza y rol de las magnitudes físicas en la modelación.",
    icon: "cantidad"
  },
  {
    file: "Examen 2- Magnitudes Escalares y Vectoriales.html",
    titulo: "Escalares vs Vectoriales",
    tag: "Fundamentos",
    nivel: "Básico",
    descripcion: "Diferencias, ejemplos y clasificación conceptual.",
    icon: "vector"
  },
  {
    file: "Examen 3 - Representación Gráfica de Escalares y Vectores.html",
    titulo: "Representación Gráfica",
    tag: "Vectores",
    nivel: "Básico",
    descripcion: "Flechas, sentido, módulo y convenciones en diagramas.",
    icon: "vector"
  },
  {
    file: "Examen 4- Conversión entre Forma Cartesiana y Polar.html",
    titulo: "Cartesianas ↔ Polares",
    tag: "Vectores",
    nivel: "Básico",
    descripcion: "Transformación de coordenadas y ángulos de referencia.",
    icon: "longitud"
  },
  {
    file: "Examen 5- Componentes Rectangulares de un Vector en 2D.html",
    titulo: "Componentes Rectangulares",
    tag: "Vectores",
    nivel: "Básico",
    descripcion: "Descomposición y reconstrucción vectorial en 2D.",
    icon: "vector"
  },
  {
    file: "Examen 6- Suma de Vectores por Método Gráfico de Componentes.html",
    titulo: "Suma Gráfica (Componentes)",
    tag: "Vectores",
    nivel: "Básico",
    descripcion: "Paralelogramo, triángulo y componentes superpuestas.",
    icon: "vector"
  },
  {
    file: "Examen 7- Suma de Vectores por Método de Vectores Unitarios.html",
    titulo: "Suma con Unitarios",
    tag: "Vectores",
    nivel: "Intermedio",
    descripcion: "Uso de i, j (k), normalización y combinación lineal.",
    icon: "vector"
  },
  {
    file: "Examen 8- Suma de Vectores por Método Analítico con Trigonometría.html",
    titulo: "Suma Analítica (Trig)",
    tag: "Vectores",
    nivel: "Intermedio",
    descripcion: "Magnitud resultante y ángulo usando seno/coseno.",
    icon: "vector"
  },
  {
    file: "Examen 9- Multiplicación de un Escalar por un Vector nivel I.html",
    titulo: "Escalar × Vector I",
    tag: "Vectores",
    nivel: "Básico",
    descripcion: "Escalamiento, dirección y signos.",
    icon: "masa"
  },
  {
    file: "Examen 10- Multiplicación Escalar nivel II.html",
    titulo: "Escalar × Vector II",
    tag: "Vectores",
    nivel: "Intermedio",
    descripcion: "Aplicaciones físicas con unidades compuestas.",
    icon: "masa"
  },
  {
    file: "Examen 11- Resta de Vectores como Suma del Opuesto.html",
    titulo: "Resta como Suma Opuesto",
    tag: "Vectores",
    nivel: "Intermedio",
    descripcion: "Transformación A − B en A + (−B), interpretación geométrica.",
    icon: "vector"
  },
  {
    file: "Examen 12- Producto Escalar - Definición, Fórmula e Interpretación Geométrica.html",
    titulo: "Producto Escalar",
    tag: "Vectores",
    nivel: "Intermedio",
    descripcion: "a·b = |a||b|cosθ y proyecciones.",
    icon: "energia"
  },
  {
    file: "Examen 13- Aplicaciones del Producto Escalar - Trabajo y Potencia.html",
    titulo: "Trabajo y Potencia (·)",
    tag: "Vectores",
    nivel: "Avanzado",
    descripcion: "W = F·d y potencia instantánea.",
    icon: "energia"
  },
  {
    file: "Examen 14 - Potencia Mecánica como Producto Escalar - P = F · v.html",
    titulo: "Potencia Mecánica",
    tag: "Vectores",
    nivel: "Avanzado",
    descripcion: "Demostración P = F·v y casos típicos.",
    icon: "energia"
  },
  {
    file: "Examen 15- Producto Vectorial - Definición, Mano Derecha y Propiedades.html",
    titulo: "Producto Vectorial",
    tag: "Vectores",
    nivel: "Avanzado",
    descripcion: "a×b, regla de la mano derecha y propiedades.",
    icon: "torque"
  },
  {
    file: "Examen 16- Aplicaciones del Producto Vectorial - Torque y Momento Angular.html",
    titulo: "Torque y Momento Angular",
    tag: "Vectores",
    nivel: "Avanzado",
    descripcion: "τ = r×F, L = r×p en ejemplos.",
    icon: "torque"
  },
  {
    file: "Examen 17- Operaciones Mixtas con Vectores en Contextos Físicos.html",
    titulo: "Operaciones Mixtas",
    tag: "Vectores",
    nivel: "Avanzado",
    descripcion: "Secuencias de sumas, productos y proyecciones.",
    icon: "formula"
  },
  {
    file: "Examen 18- Conversión de Expresiones Escritas a Vector.html",
    titulo: "Expresiones → Vector",
    tag: "Vectores",
    nivel: "Intermedio",
    descripcion: "Traducción simbólica a notación vectorial.",
    icon: "formula"
  },
  {
    file: "Examen 19- Cifras Significativas y sus Reglas.html",
    titulo: "Cifras Significativas",
    tag: "Fundamentos",
    nivel: "Básico",
    descripcion: "Redondeo, ceros, operaciones y reporte.",
    icon: "precision"
  },
  {
    file: "Examen 20- Unidades Fundamentales y Derivadas.html",
    titulo: "Unidades Base / Derivadas",
    tag: "Fundamentos",
    nivel: "Básico",
    descripcion: "SI base, derivadas y coherencia dimensional.",
    icon: "units"
  },
  {
    file: "Examen 21- Conversión de Unidades en Contextos Físicos.html",
    titulo: "Conversión de Unidades",
    tag: "Fundamentos",
    nivel: "Básico",
    descripcion: "Factores, prefijos y encadenamiento.",
    icon: "units"
  },
  {
    file: "Examen 22- Análisis Dimensional.html",
    titulo: "Análisis Dimensional",
    tag: "Fundamentos",
    nivel: "Intermedio",
    descripcion: "Verificación, derivación y escalamiento.",
    icon: "formula"
  }
];
