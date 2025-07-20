const exams = [
  {
    file: "Examen 23- Posición y Desplazamiento 1D 2D 3D.html",
    titulo: "Posición y Desplazamiento",
    tag: "Posición",
    nivel: "Básico",
    descripcion: "Definición de posición y vectores desplazamiento en 1D/2D/3D.",
    icon: "longitud"
  },
  {
    file: "Examen 24- Razonamiento Distancia vs Desplazamiento.html",
    titulo: "Distancia vs Desplazamiento",
    tag: "Conceptual",
    nivel: "Básico",
    descripcion: "Comparación escalar vs vector y casos límite.",
    icon: "formula"
  },
  {
    file: "Examen 25- Razonamiento Velocidad vs Rapidez Media.html",
    titulo: "Velocidad vs Rapidez Media",
    tag: "Conceptual",
    nivel: "Básico",
    descripcion: "Diferencias, ejemplos y confusiones frecuentes.",
    icon: "tiempo"
  },
  {
    file: "Examen 26- Velocidad Media Vectorial.html",
    titulo: "Velocidad Media Vectorial",
    tag: "Velocidad",
    nivel: "Intermedio",
    descripcion: "Δr/Δt y dirección de la velocidad promedio.",
    icon: "vector"
  },
  {
    file: "Examen 27- Rapidez Velocidad Instantanea 2D 3D.html",
    titulo: "Velocidad Instantánea 2D/3D",
    tag: "Velocidad",
    nivel: "Intermedio",
    descripcion: "Límites de Δr/Δt y módulo vs componente.",
    icon: "vector"
  },
  {
    file: "Examen 28- Aceleracion Media e Instantanea.html",
    titulo: "Aceleración Media/Instantánea",
    tag: "Aceleración",
    nivel: "Intermedio",
    descripcion: "Δv/Δt, derivadas y significado geométrico.",
    icon: "formula"
  },
  {
    file: "Examen 29- Graficas Posicion vs Tiempo.html",
    titulo: "Gráficas x–t",
    tag: "Gráficas",
    nivel: "Básico",
    descripcion: "Pendiente como velocidad y lectura cualitativa.",
    icon: "precision"
  },
  {
    file: "Examen 30- Graficas Velocidad y Rapidez vs Tiempo.html",
    titulo: "Gráficas v–t",
    tag: "Gráficas",
    nivel: "Intermedio",
    descripcion: "Área → desplazamiento; pendiente → aceleración.",
    icon: "precision"
  },
  {
    file: "Examen 31- Grafica Aceleracion vs Tiempo.html",
    titulo: "Gráficas a–t",
    tag: "Gráficas",
    nivel: "Intermedio",
    descripcion: "Integración escalonada y cambios de régimen.",
    icon: "precision"
  },
  {
    file: "Examen 32- Movimiento Rectilineo Uniforme.html",
    titulo: "MRU Fundamentos",
    tag: "MRU",
    nivel: "Básico",
    descripcion: "Ecuación x = x0 + vt y análisis de trayectorias.",
    icon: "tiempo"
  },
  {
    file: "Examen 33- Encuentros y Alcances MRU.html",
    titulo: "Encuentros MRU",
    tag: "MRU",
    nivel: "Intermedio",
    descripcion: "Cálculo de tiempo y posición de encuentro.",
    icon: "tiempo"
  },
  {
    file: "Examen 34- MRUA Movimiento Rectilineo Uniformemente Acelerado.html",
    titulo: "MRUA Ecuaciones",
    tag: "MRUA",
    nivel: "Básico",
    descripcion: "Cinco ecuaciones y condiciones iniciales.",
    icon: "formula"
  },
  {
    file: "Examen 35- MRUV Dos Particulas Encuentro y Alcance.html",
    titulo: "MRUA Dos Partículas",
    tag: "MRUA",
    nivel: "Intermedio",
    descripcion: "Intersección de trayectorias con aceleración.",
    icon: "formula"
  },
  {
    file: "Examen 36- Caida Libre y Tiro Vertical Casos Unicos.html",
    titulo: "Caída Libre y Tiro",
    tag: "Vertical",
    nivel: "Intermedio",
    descripcion: "Signo de g, máximos y tiempos característicos.",
    icon: "longitud"
  },
  {
    file: "Examen 37- Encuentros Tiro Vertical Caida Libre.html",
    titulo: "Encuentros Verticales",
    tag: "Vertical",
    nivel: "Avanzado",
    descripcion: "Cruces simultáneos en ascenso/descenso.",
    icon: "longitud"
  },
  {
    file: "Examen 38- MRU y MRUV Dos Particulas.html",
    titulo: "MRU vs MRUA",
    tag: "Comparado",
    nivel: "Intermedio",
    descripcion: "Análisis mixto partícula uniforme + acelerada.",
    icon: "comparado" // Añade icono si lo defines; de lo contrario cambia a 'formula'
  },
  {
    file: "Examen 39- Proyeccion Horizontal.html",
    titulo: "Proyección Horizontal",
    tag: "Parabólico",
    nivel: "Intermedio",
    descripcion: "Separación ejes y tiempo de vuelo.",
    icon: "vector"
  },
  {
    file: "Examen 40- Tiro Parabolico Trayectoria Completa.html",
    titulo: "Tiro Parabólico Completo",
    tag: "Parabólico",
    nivel: "Avanzado",
    descripcion: "Alcance, altura y optimización de ángulo.",
    icon: "vector"
  },
  {
    file: "Examen 41- Tiro Parabolico Incompleto.html",
    titulo: "Tiro Parabólico Parcial",
    tag: "Parabólico",
    nivel: "Intermedio",
    descripcion: "Segmentos de trayectoria y tiempos parciales.",
    icon: "vector"
  },
  {
    file: "Examen 42- Conceptos Movimiento 2D.html",
    titulo: "Conceptos Movimiento 2D",
    tag: "2D",
    nivel: "Básico",
    descripcion: "Desacople de coordenadas y vectores velocidad.",
    icon: "vector"
  },
  {
    file: "Examen 43- Movimiento Circular Uniforme Unicos.html",
    titulo: "MCU Casos Únicos",
    tag: "Circular",
    nivel: "Intermedio",
    descripcion: "Fases angulares y sincronización circular.",
    icon: "torque"
  },
  {
    file: "Examen 44- Conceptos MCU.html",
    titulo: "Conceptos MCU",
    tag: "Circular",
    nivel: "Básico",
    descripcion: "ω, T, f y aceleración centrípeta básica.",
    icon: "torque"
  },
  {
    file: "Examen 45 - Velocidad Relativa Actualizado.html",
    titulo: "Velocidad Relativa",
    tag: "Relativo",
    nivel: "Intermedio",
    descripcion: "Transformaciones de referencia y suma vectorial.",
    icon: "formula"
  },
  {
    file: "Examen 47 - MCU y Proyeccion Horizontal.html",
    titulo: "MCU + Proyección",
    tag: "Combinado",
    nivel: "Avanzado",
    descripcion: "Transición circular a trayecto parabólico.",
    icon: "vector"
  },
  {
    file: "Examen 48- Movimiento Relativo 2D No Inerciales.html",
    titulo: "Relativo No Inercial 2D",
    tag: "Relativo",
    nivel: "Avanzado",
    descripcion: "Efectos de marcos acelerados y correcciones.",
    icon: "formula"
  }
];

