// Datos y lógica de negocio del frontend: llamada a la API de ML,
// historial de sesiones (localStorage) y datos estáticos del equipo.
// Consolidado desde data/analyzeSignal.js, data/history.js y data/team.js.

const API_BASE_URL = "http://localhost:8001";

export async function runInference(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_BASE_URL}/analizar`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.detail || "No se pudo analizar la señal. Verifica que la API esté activa.");
  }

  return response.json();
}

export const recommendationsByLevel = {
  estable: [
    { icon: "leaf", title: "Mantén tu rutina", desc: "Tu cuerpo está en equilibrio, sigue así." },
    { icon: "sun", title: "Luz natural", desc: "Sal al exterior 10 min para sostener tu estado." },
    { icon: "book", title: "Aprovecha el enfoque", desc: "Es un buen momento para tareas complejas." },
    { icon: "moon", title: "Cuida tu sueño", desc: "Mantén un horario de descanso regular." },
  ],
  moderado: [
    { icon: "activity", title: "Pausa activa", desc: "Levántate y estira por 5 min." },
    { icon: "wind", title: "Respiración 4-7-8", desc: "Calma el sistema nervioso." },
    { icon: "coffee", title: "Evita cafeína", desc: "No consumas más por hoy." },
    { icon: "users", title: "Buscar soporte", desc: "Prioridad moderada.", highlight: true },
    { icon: "sun", title: "Luz natural", desc: "Sal al exterior 10 min." },
  ],
  alto: [
    { icon: "users", title: "Busca apoyo", desc: "Contacta tutoría académica o bienestar universitario.", highlight: true },
    { icon: "wind", title: "Respiración guiada", desc: "Practica el método 4-7-8 por 5 minutos." },
    { icon: "pause", title: "Detén la tarea actual", desc: "Toma un descanso de al menos 15 min." },
    { icon: "coffee", title: "Evita estimulantes", desc: "Nada de cafeína ni azúcar por ahora." },
  ],
};

export const relaxVideos = [
  {
    id: "37cGrt670aA",
    title: "Cats Cute Overload",
    desc: "Compilación de gatitos para bajar el pulso rápidamente.",
  },
  {
    id: "N6QRiwrS_CE",
    title: "Los Gatos y Perros Más Divertidos",
    desc: "Intenta no reír — distracción cómica garantizada.",
  },
  {
    id: "G_v-vk4Vxw8",
    title: "FUNNIEST Baby Animals",
    desc: "Animales bebé en situaciones cómicas para relajarte.",
  },
];

const HISTORY_KEY = "neurostress_sessions";

export function getSessions() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveSession(result) {
  const sessions = getSessions();
  sessions.unshift({ ...result, id: crypto.randomUUID() });
  localStorage.setItem(HISTORY_KEY, JSON.stringify(sessions.slice(0, 30)));
}

export const team = [
  {
    name: "Andree Pascale Merino Contreras",
    role: "Procesamiento ECG",
    bio: "Especialista en la extracción y limpieza de señales bioeléctricas, asegurando la integridad de los datos cardíacos en entornos de alta demanda cognitiva.",
    initials: "AM",
  },
  {
    name: "Luana Teresa Caro Saravia",
    role: "Desarrollo ML",
    bio: "Encargada de la arquitectura del modelo y los algoritmos predictivos que clasifican los estados de estrés a partir de biomarcadores fisiológicos.",
    initials: "LC",
  },
  {
    name: "Francisco Aquiles Hidalgo Pilco",
    role: "Protocolo Experimental",
    bio: "Diseñador de las pruebas de estrés cognitivo y supervisor de las fases de recolección de datos bajo estándares éticos y científicos.",
    initials: "FH",
  },
  {
    name: "Alexandra Camila Lema Torres",
    role: "UX / UI Design",
    bio: "Responsable de la interfaz y experiencia de usuario, enfocada en reducir la carga cognitiva mediante una estética de 'Claridad Terapéutica'.",
    initials: "AL",
  },
  {
    name: "Kiara Muñoz Benites",
    role: "Documentación",
    bio: "Responsable de la síntesis de hallazgos, redacción técnica y gestión del repositorio de conocimiento del proyecto NeuroStress.",
    initials: "KM",
  },
];
