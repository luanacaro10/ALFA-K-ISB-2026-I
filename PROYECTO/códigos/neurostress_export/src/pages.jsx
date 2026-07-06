// Todas las páginas de la aplicación (rutas).
// Consolidado desde pages/Landing.jsx, Login.jsx, Register.jsx, Dashboard.jsx,
// AnalyzeSignal.jsx, Result.jsx, HistoryPage.jsx, Participants.jsx,
// Methodology.jsx y Help.jsx.

import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Radio, Activity, Cpu, Heart, CheckCircle2, Brain,
  User, Lock, ArrowRight, ArrowLeft,
  Mail, Shield, HeartPulse, GraduationCap, Droplet,
  History, Users, Microscope, ArrowRight as ArrowRightIcon,
  UploadCloud, FileText, Lock as LockIcon, BarChart3, Clock, Info,
  Leaf, Wind, Coffee, Sun, Moon, Book, Pause, Play, Download, RefreshCcw,
  TrendingUp, Calendar, ChevronRight,
  Sparkles,
  Filter, BarChart2, RefreshCw, ClipboardCheck, Lightbulb, AlertTriangle,
} from "lucide-react";
import { runInference, recommendationsByLevel, relaxVideos, getSessions, saveSession, team } from "./data";

// ---------------------------------------------------------------------------
// Landing
// ---------------------------------------------------------------------------

const objectives = [
  { icon: Radio, title: "Registro Biomédico", desc: "Captura precisa de señales ECG y EDA durante sesiones de estudio controladas." },
  { icon: Activity, title: "Extracción de HRV", desc: "Análisis de la variabilidad de la frecuencia cardíaca y conductancia de la piel." },
  { icon: Cpu, title: "Entrenamiento ML", desc: "Modelos de Machine Learning para clasificar estados de estrés con alta precisión." },
  { icon: Heart, title: "Feedback Directo", desc: "Entrega de resultados accionables para la gestión del estrés del usuario." },
];

const landingResults = [
  { title: "Diferenciación de Estados", desc: "Capacidad para distinguir objetivamente entre estados de calma, alerta y estrés crítico." },
  { title: "Umbrales de Activación", desc: "Identificación de puntos críticos donde el rendimiento cognitivo comienza a declinar por estrés." },
  { title: "Integración con Telegram", desc: "Canal de soporte inmediato mediante bots para notificaciones de estrés y técnicas de relajación." },
];

export function Landing() {
  return (
    <div className="min-h-screen bg-surface wave-bg">
      <header className="max-w-container mx-auto flex items-center justify-between px-6 md:px-10 py-6">
        <div className="flex items-center gap-2 font-display font-bold text-xl text-primary">
          <Brain size={24} />
          NeuroStress
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-on-surface-variant">
          <a href="#que-es" className="hover:text-primary">¿Qué es?</a>
          <a href="#objetivos" className="hover:text-primary">Objetivos</a>
          <a href="#equipo" className="hover:text-primary">Equipo</a>
        </nav>
        <Link to="/login" className="btn-secondary !py-2 !px-5 text-sm">
          Iniciar sesión
        </Link>
      </header>

      <section className="max-w-container mx-auto px-6 md:px-10 pt-10 pb-20 text-center">
        <h1 className="font-display font-bold text-3xl md:text-5xl leading-tight text-on-surface max-w-3xl mx-auto">
          NeuroStress: detección de estrés cognitivo mediante señales biomédicas
        </h1>
        <p className="text-on-surface-variant text-base md:text-lg max-w-xl mx-auto mt-5">
          Transformamos datos complejos de ECG y EDA en claridad terapéutica,
          ayudando a estudiantes a entender su respuesta fisiológica ante la
          carga académica.
        </p>
        <Link
          to="/registro"
          className="btn-primary mt-8 inline-flex !px-8 !py-4 text-base"
        >
          Iniciar sesión y empezar
        </Link>

        <div className="card max-w-2xl mx-auto mt-14 flex items-center justify-center h-40">
          <svg viewBox="0 0 300 60" className="w-2/3 h-16 text-primary">
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="0,30 40,30 55,10 70,50 85,30 110,30 125,15 140,45 155,30 300,30"
            />
          </svg>
        </div>
      </section>

      <section id="que-es" className="bg-surface-container-low py-20">
        <div className="max-w-container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-primary mb-4">
              ¿Qué es NeuroStress?
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              NeuroStress es un prototipo académico diseñado para cerrar la
              brecha entre el rigor de los datos médicos y el bienestar
              mental cotidiano. Buscamos caracterizar el estrés académico de
              manera objetiva, superando las limitaciones de los
              cuestionarios subjetivos.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Mediante la combinación de señales de Electrocardiografía (ECG)
              y Actividad Electrodérmica (EDA), nuestro sistema analiza los
              ritmos naturales del cuerpo para identificar patrones de
              activación cognitiva y carga emocional durante actividades de
              alta demanda, como exámenes o exposiciones.
            </p>
          </div>
          <div className="card h-64 flex items-center justify-center bg-water-green">
            <Activity size={72} className="text-primary/40" />
          </div>
        </div>
      </section>

      <section id="objetivos" className="max-w-container mx-auto px-6 md:px-10 py-20">
        <h2 className="font-display font-semibold text-2xl md:text-3xl text-center text-on-surface mb-10">
          Objetivos del proyecto
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {objectives.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card">
              <div className="w-11 h-11 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container mb-4">
                <Icon size={20} />
              </div>
              <p className="font-semibold mb-1.5">{title}</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-center text-white mb-10">
            Resultados Esperados
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {landingResults.map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white/10 border border-white/15 rounded-2xl p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={18} className="text-secondary-fixed" />
                  <p className="font-semibold text-white">{title}</p>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipo" className="max-w-container mx-auto px-6 md:px-10 py-20">
        <h2 className="font-display font-semibold text-2xl md:text-3xl text-center text-on-surface mb-10">
          Nuestro Equipo
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((m) => (
            <div key={m.name} className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-display font-bold text-xl mb-3">
                {m.initials}
              </div>
              <p className="font-semibold text-sm leading-tight">{m.name}</p>
              <p className="text-xs text-primary mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-outline-variant/30 py-6">
        <div className="max-w-container mx-auto px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-on-surface-variant">
          <span className="flex items-center gap-2">
            <Brain size={16} /> NeuroStress
          </span>
          <span>Introducción a Señales Biomédicas · 2026</span>
        </div>
      </footer>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Login
// ---------------------------------------------------------------------------

export function Login({ onLogin }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Prototipo académico: no hay backend de autenticación real.
    const name = localStorage.getItem("neurostress_name") || "Estudiante";
    onLogin({ name, id, initials: name.slice(0, 2).toUpperCase() });
    navigate("/app");
  }

  return (
    <div className="min-h-screen wave-bg flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white rounded-card shadow-ambient p-10">
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white mb-3">
            <Brain size={26} />
          </div>
          <h1 className="font-display font-bold text-xl text-primary">NeuroStress</h1>
          <p className="text-sm text-on-surface-variant">Claridad Terapéutica</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="text-sm font-medium mb-1.5 block">
              Email o ID Universitario
            </label>
            <div className="relative">
              <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
              <input
                className="input-field pl-10"
                placeholder="ej. u202412345"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Contraseña</label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
              <input
                type="password"
                className="input-field pl-10"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="text-right -mt-2">
            <a href="#" className="text-sm text-primary font-medium">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <button type="submit" className="btn-primary w-full">
            Iniciar sesión <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center text-sm text-on-surface-variant mt-6">
          ¿No tienes una cuenta?{" "}
          <Link to="/registro" className="text-primary font-semibold">
            Crear una cuenta
          </Link>
        </p>
      </div>
      <p className="text-xs text-on-surface-variant mt-6">
        Sensores activos &nbsp;|&nbsp; v1.0.0 Prototipo académico
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Register
// ---------------------------------------------------------------------------

export function Register({ onLogin }) {
  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    edad: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function update(field) {
    return (e) => setForm({ ...form, [field]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const fullName = `${form.nombre} ${form.apellidos}`.trim() || "Estudiante";
    localStorage.setItem("neurostress_name", fullName);
    onLogin({
      name: fullName,
      id: form.email,
      initials: fullName.slice(0, 2).toUpperCase(),
    });
    navigate("/app");
  }

  return (
    <div className="min-h-screen wave-bg flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white rounded-card shadow-ambient p-10">
        <div className="flex flex-col items-center mb-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white mb-3">
            <Brain size={26} />
          </div>
          <h1 className="font-display font-bold text-xl text-primary">NeuroStress</h1>
          <h2 className="font-display font-bold text-2xl mt-2">Crea tu cuenta</h2>
          <p className="text-sm text-on-surface-variant mt-1">
            Comienza tu viaje hacia el bienestar cognitivo y la gestión del
            estrés.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Nombre</label>
              <input
                className="input-field"
                placeholder="Ej. Ana"
                value={form.nombre}
                onChange={update("nombre")}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Apellidos</label>
              <input
                className="input-field"
                placeholder="Ej. García Ruiz"
                value={form.apellidos}
                onChange={update("apellidos")}
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Edad</label>
            <input
              type="number"
              className="input-field"
              placeholder="21"
              value={form.edad}
              onChange={update("edad")}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">
              Correo electrónico / Institucional
            </label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
              <input
                className="input-field pl-10"
                placeholder="nombre@universidad.edu"
                value={form.email}
                onChange={update("email")}
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Contraseña</label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
              <input
                type="password"
                className="input-field pl-10"
                placeholder="Mínimo 8 caracteres"
                value={form.password}
                onChange={update("password")}
              />
            </div>
          </div>
          <button type="submit" className="btn-primary w-full">
            Crear cuenta <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center text-sm text-on-surface-variant mt-6">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-primary font-semibold">
            Iniciar sesión
          </Link>
        </p>
      </div>

      <div className="flex items-center gap-8 mt-8 text-xs text-on-surface-variant">
        <span className="flex flex-col items-center gap-1">
          <Shield size={18} className="text-primary" /> Privacidad segura
        </span>
        <span className="flex flex-col items-center gap-1">
          <HeartPulse size={18} className="text-primary" /> Biofeedback
        </span>
        <span className="flex flex-col items-center gap-1">
          <GraduationCap size={18} className="text-primary" /> Académico
        </span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Dashboard
// ---------------------------------------------------------------------------

export function Dashboard({ user }) {
  const sessions = getSessions();
  const last = sessions[0];

  return (
    <div className="pt-8 max-w-container mx-auto">
      <h1 className="font-display font-bold text-2xl mb-1">
        Hola, {user?.name?.split(" ")[0] || "Estudiante"} 👋
      </h1>
      <p className="text-on-surface-variant mb-8">
        Bienvenido a NeuroStress. Analiza tu señal fisiológica y descubre tu
        nivel de estrés cognitivo.
      </p>

      <div className="grid md:grid-cols-[1.2fr_1fr] gap-6 mb-8">
        <div className="card bg-primary text-white flex flex-col justify-between">
          <div>
            <Brain size={26} className="mb-4" />
            <p className="font-display font-semibold text-xl mb-2">
              Analiza tu señal ahora
            </p>
            <p className="text-white/80 text-sm max-w-sm">
              Sube el archivo .txt capturado con BITalino durante tu sesión
              de estudio para detectar tu estado de estrés cognitivo.
            </p>
          </div>
          <Link
            to="/app/analizar"
            className="mt-6 bg-white text-primary rounded-full px-6 py-3 font-semibold inline-flex items-center gap-2 w-fit"
          >
            Analizar señal <ArrowRightIcon size={18} />
          </Link>
        </div>

        <div className="card">
          <p className="font-semibold mb-3">Última sesión</p>
          {last ? (
            <>
              <p className="font-display font-bold text-3xl text-primary">
                {last.stressPct}%
              </p>
              <p className="text-sm text-on-surface-variant mb-4">
                {last.message}
              </p>
              <Link
                to="/app/resultado"
                state={{ result: last }}
                className="text-primary font-semibold text-sm inline-flex items-center gap-1"
              >
                Ver detalle <ArrowRightIcon size={14} />
              </Link>
            </>
          ) : (
            <p className="text-on-surface-variant text-sm">
              Aún no has analizado ninguna señal.
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        <ShortcutCard
          to="/app/historial"
          icon={History}
          title="Historial"
          desc="Revisa la evolución de tu estrés en el tiempo."
        />
        <ShortcutCard
          to="/app/participantes"
          icon={Users}
          title="Participantes"
          desc="Conoce al equipo detrás del proyecto."
        />
        <ShortcutCard
          to="/app/metodologia"
          icon={Microscope}
          title="Metodología"
          desc="Cómo funciona el pipeline de procesamiento y el modelo."
        />
      </div>
    </div>
  );
}

function ShortcutCard({ to, icon: Icon, title, desc }) {
  return (
    <Link to={to} className="card hover:shadow-ambient transition-shadow">
      <div className="w-11 h-11 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container mb-4">
        <Icon size={20} />
      </div>
      <p className="font-semibold mb-1">{title}</p>
      <p className="text-sm text-on-surface-variant">{desc}</p>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// AnalyzeSignal
// ---------------------------------------------------------------------------

const loadingMessages = [
  "Filtrando señal ECG...",
  "Detectando picos R...",
  "Calculando variabilidad de frecuencia cardíaca (HRV)...",
  "Separando componente fásica y tónica de EDA...",
  "Clasificando nivel de estrés con el modelo...",
];

export function AnalyzeSignal() {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | processing | done
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  function handleFiles(fileList) {
    const f = fileList?.[0];
    if (!f) return;
    if (!f.name.endsWith(".txt") && !f.name.endsWith(".csv")) {
      setError("Formato no soportado. Sube un archivo .txt o .csv exportado desde OpenSignals.");
      return;
    }
    setError("");
    setFile(f);
    setStatus("idle");
    setResult(null);
  }

  async function handleAnalyze() {
    if (!file) return;
    setStatus("processing");
    setError("");
    setLoadingStep(0);
    const stepInterval = setInterval(() => {
      setLoadingStep((s) => (s + 1 < loadingMessages.length ? s + 1 : s));
    }, 550);

    try {
      const [inference] = await Promise.all([
        runInference(file),
        new Promise((r) => setTimeout(r, loadingMessages.length * 550 + 300)),
      ]);
      setResult(inference);
      setStatus("done");
      saveSession(inference);
    } catch (e) {
      setError(e.message || "Ocurrió un error al analizar la señal.");
      setStatus("idle");
    } finally {
      clearInterval(stepInterval);
    }
  }

  const levelColor =
    result?.level === "estable"
      ? "text-primary"
      : result?.level === "moderado"
      ? "text-amber-600"
      : "text-error";

  return (
    <div className="pt-8 max-w-container mx-auto">
      <h1 className="font-display font-bold text-2xl text-on-surface mb-1">
        Análisis de Señal
      </h1>
      <p className="text-on-surface-variant mb-8">
        Sube tus datos fisiológicos de BITalino para detectar niveles de estrés cognitivo.
      </p>

      <div className="grid lg:grid-cols-[1fr_420px] gap-6 items-start">
        <div className="flex flex-col gap-6">
          <div className="card">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-sm font-semibold">
                1
              </span>
              <p className="font-semibold text-lg">Sube tu archivo BITalino</p>
            </div>

            <label
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragging(false);
                handleFiles(e.dataTransfer.files);
              }}
              className={`flex flex-col items-center justify-center text-center border-2 border-dashed rounded-2xl py-14 px-6 cursor-pointer transition-colors ${
                dragging ? "border-primary bg-water-green" : "border-outline-variant"
              }`}
            >
              <input
                ref={inputRef}
                type="file"
                accept=".txt,.csv"
                className="hidden"
                onChange={(e) => handleFiles(e.target.files)}
              />
              <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mb-4">
                <UploadCloud size={26} />
              </div>
              <p className="font-semibold text-lg">Arrastra y suelta tu archivo aquí</p>
              <p className="text-sm text-on-surface-variant mt-1">
                o <span className="text-primary font-semibold underline">explora tus archivos</span>
              </p>
              <p className="text-xs text-on-surface-variant flex items-center gap-1.5 mt-4">
                <FileText size={14} /> Formatos admitidos: .txt, .csv (Exportados de OpenSignals)
              </p>
            </label>

            {error && <p className="text-error text-sm mt-3">{error}</p>}

            {file && (
              <div className="flex items-center gap-3 mt-4 bg-surface-container-low rounded-xl px-4 py-3">
                <FileText size={18} className="text-on-surface-variant" />
                <span className="text-sm font-medium flex-1 truncate">{file.name}</span>
                <CheckCircle2 size={18} className="text-primary" />
              </div>
            )}
          </div>

          <div className="card">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-sm font-semibold">
                2
              </span>
              <p className="font-semibold text-lg">Analizar</p>
            </div>
            <button
              disabled={!file || status === "processing"}
              onClick={handleAnalyze}
              className="btn-primary w-full !py-4"
            >
              <Brain size={20} />
              {status === "processing" ? "Procesando..." : "Iniciar Procesamiento"}
            </button>
            <p className="text-xs text-on-surface-variant flex items-center gap-1.5 mt-4">
              <LockIcon size={13} />
              Los datos se procesan de forma anónima. Prototipo académico — no
              constituye diagnóstico clínico.
            </p>
          </div>

          {status === "processing" && (
            <div className="card animate-fade-up">
              <p className="font-medium text-on-surface-variant text-sm mb-3">
                {loadingMessages[loadingStep]}
              </p>
              <div className="h-2 bg-surface-container-low rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{
                    width: `${((loadingStep + 1) / loadingMessages.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          )}

          {status === "done" && result && (
            <div className="grid sm:grid-cols-2 gap-4 animate-fade-up">
              <MetricCard
                icon={HeartPulse}
                label="Ritmo Cardíaco"
                value={`${result.heartRate} BPM`}
                tag={result.heartRate > 90 ? "ELEVADO" : "ESTABLE"}
              />
              <MetricCard
                icon={Droplet}
                label="Resp. Galvánica"
                value={`${result.eda} µS`}
                tag={result.eda > 4 ? "ELEVADA" : "MODERADA"}
              />
              <MetricCard
                icon={BarChart3}
                label="Calidad Señal"
                value={`${result.signalQuality}%`}
                tag={result.signalQuality > 85 ? "EXCELENTE" : "BUENA"}
              />
              <MetricCard
                icon={Clock}
                label="Tiempo Análisis"
                value={`${result.processingTime} seg`}
                tag="PROCESADO"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <div className="card text-center">
            <p className="font-semibold text-lg mb-4">Resultado del análisis</p>
            {!result ? (
              <div className="py-10 text-on-surface-variant text-sm">
                Sube y analiza un archivo para ver tu resultado aquí.
              </div>
            ) : (
              <>
                <div className="w-32 h-32 mx-auto rounded-full bg-surface-container-low flex items-center justify-center mb-4">
                  <span className="text-5xl">
                    {result.level === "estable" ? "🙂" : result.level === "moderado" ? "😐" : "😟"}
                  </span>
                </div>
                <p className={`font-display font-bold text-2xl uppercase ${levelColor}`}>
                  {result.level === "estable" ? "Estable" : result.level === "moderado" ? "Moderado" : "Elevado"}
                </p>
                <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">
                  {result.message}
                </p>

                <div className="flex justify-between text-xs font-medium text-on-surface-variant mt-6 mb-1">
                  <span>Relajado</span>
                  <span>Alerta</span>
                  <span>Estrés</span>
                </div>
                <div className="relative h-2 rounded-full bg-gradient-to-r from-primary via-amber to-error">
                  <div
                    className="absolute -top-1.5 w-5 h-5 rounded-full bg-white border-[3px] border-primary shadow"
                    style={{ left: `calc(${result.stressPct}% - 10px)` }}
                  />
                </div>
                <p className="font-display font-bold text-2xl mt-4">
                  {result.stressPct}%{" "}
                  <span className="text-sm font-medium text-on-surface-variant">
                    Carga Cognitiva
                  </span>
                </p>

                <button
                  className="btn-secondary w-full mt-5"
                  onClick={() => navigate("/app/resultado", { state: { result } })}
                >
                  Ver recomendaciones
                </button>
              </>
            )}
          </div>

          <div className="bg-water-green rounded-card p-5 flex gap-3">
            <Info size={18} className="text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-on-surface-variant">
              <span className="font-semibold text-primary">Recomendación Pro: </span>
              asegúrate de que los electrodos BITalino estén bien adheridos y
              libres de interferencias electromagnéticas antes de capturar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ icon: Icon, label, value, tag }) {
  return (
    <div className="card !p-5">
      <div className="flex justify-between items-start mb-3">
        <p className="text-sm font-medium text-on-surface-variant">{label}</p>
        <Icon size={18} className="text-on-surface-variant" />
      </div>
      <p className="font-display font-bold text-xl">{value}</p>
      <p className="text-xs font-semibold text-primary tracking-wide mt-1">{tag}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Result
// ---------------------------------------------------------------------------

const resultIcons = { leaf: Leaf, activity: Activity, wind: Wind, coffee: Coffee, users: Users, sun: Sun, moon: Moon, book: Book, pause: Pause };

const levelLabel = {
  estable: "Estrés bajo",
  moderado: "Estrés moderado",
  alto: "Estrés elevado",
};

export function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const result = state?.result;
  const [playingVideoId, setPlayingVideoId] = useState(null);

  if (!result) {
    return (
      <div className="pt-16 text-center max-w-md mx-auto">
        <p className="text-on-surface-variant mb-4">
          No hay un resultado reciente para mostrar. Analiza una señal
          primero.
        </p>
        <Link to="/app/analizar" className="btn-primary inline-flex">
          Ir a Analizar señal
        </Link>
      </div>
    );
  }

  const recs = recommendationsByLevel[result.level] || [];

  return (
    <div className="pt-8 max-w-container mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-on-surface-variant hover:text-primary mb-4 text-sm font-medium"
      >
        <ArrowLeft size={18} /> Volver
      </button>

      <h1 className="font-display font-bold text-2xl mb-6">
        Tu resultado:{" "}
        <span className="text-primary">{levelLabel[result.level]}</span>
      </h1>

      <div className="card flex flex-col md:flex-row items-center gap-8 mb-10">
        <div className="relative w-32 h-32 shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#dce9ff" strokeWidth="10" />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#006a43"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 42}
              strokeDashoffset={2 * Math.PI * 42 * (1 - result.stressPct / 100)}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-2xl">
            {result.stressPct}%
          </div>
        </div>
        <div className="flex-1">
          <p className="text-on-surface-variant leading-relaxed">
            {result.message}
          </p>
          <div className="flex gap-2 mt-3 flex-wrap">
            <span className="bg-secondary-container text-on-secondary-container text-sm font-medium px-3 py-1 rounded-full">
              Frecuencia: {result.heartRate} lpm
            </span>
            <span className="bg-secondary-container text-on-secondary-container text-sm font-medium px-3 py-1 rounded-full">
              EDA: {result.eda} µS
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Leaf size={20} className="text-primary" />
        <h2 className="font-display font-semibold text-xl">
          Recomendaciones para ti
        </h2>
        <span className="text-sm text-on-surface-variant italic ml-auto">
          Basado en tu perfil cognitivo
        </span>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {recs.map((r) => {
          const Icon = resultIcons[r.icon] || Leaf;
          return (
            <div
              key={r.title}
              className={`card !p-5 text-center ${
                r.highlight ? "border-2 border-primary" : ""
              }`}
            >
              <div
                className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 ${
                  r.highlight
                    ? "bg-primary text-white"
                    : "bg-secondary-container text-on-secondary-container"
                }`}
              >
                <Icon size={22} />
              </div>
              <p className="font-semibold text-sm">{r.title}</p>
              <p className="text-xs text-on-surface-variant mt-1">{r.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Play size={20} className="text-primary" />
        <h2 className="font-display font-semibold text-xl">Videos para relajarte</h2>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-12">
        {relaxVideos.map((v) => (
          <div key={v.id} className="rounded-card overflow-hidden bg-white shadow-soft">
            <div className="relative h-40 bg-black">
              {playingVideoId === v.id ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${v.id}?autoplay=1`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  className="w-full h-full relative"
                  onClick={() => setPlayingVideoId(v.id)}
                  aria-label={`Reproducir ${v.title}`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center text-primary">
                      <Play size={22} className="ml-0.5" />
                    </div>
                  </div>
                </button>
              )}
            </div>
            <div className="p-4">
              <p className="font-semibold text-sm">{v.title}</p>
              <p className="text-xs text-on-surface-variant mt-1">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <button className="btn-primary" onClick={() => window.print()}>
          <Download size={18} /> Descargar reporte PDF
        </button>
        <Link to="/app/analizar" className="btn-secondary">
          <RefreshCcw size={18} /> Analizar otra señal
        </Link>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// HistoryPage
// ---------------------------------------------------------------------------

const levelStyle = {
  estable: "bg-secondary-container text-on-secondary-container",
  moderado: "bg-amber/20 text-amber-700",
  alto: "bg-error-container text-on-error-container",
};

const levelName = { estable: "Calma", moderado: "Alerta", alto: "Crítico" };

export function HistoryPage() {
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setSessions(getSessions());
  }, []);

  const points = sessions
    .slice(0, 10)
    .reverse()
    .map((s) => s.stressPct);

  return (
    <div className="pt-8 max-w-container mx-auto">
      <h1 className="font-display font-bold text-2xl mb-1">Historial de Sesiones</h1>
      <p className="text-on-surface-variant mb-8">
        Consulta la evolución de tus niveles de estrés y revisa análisis previos.
      </p>

      <div className="card mb-8">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={20} className="text-primary" />
          <p className="font-semibold text-lg">Evolución de Estrés (%)</p>
        </div>
        {points.length > 1 ? (
          <svg viewBox="0 0 600 160" className="w-full h-40">
            <polyline
              fill="none"
              stroke="#006a43"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={points
                .map(
                  (p, i) =>
                    `${(i * 600) / (points.length - 1)},${160 - (p / 100) * 150 - 5}`
                )
                .join(" ")}
            />
          </svg>
        ) : (
          <p className="text-on-surface-variant text-sm py-10 text-center">
            Aún no hay suficientes sesiones para mostrar una tendencia.
            Analiza al menos dos señales.
          </p>
        )}
      </div>

      <p className="font-semibold text-lg mb-4">Sesiones Anteriores</p>
      <div className="flex flex-col gap-3">
        {sessions.length === 0 && (
          <p className="text-on-surface-variant text-sm">
            No has analizado ninguna señal todavía.
          </p>
        )}
        {sessions.map((s) => (
          <div
            key={s.id}
            className="card !p-5 flex items-center gap-4 border-l-4"
            style={{
              borderLeftColor:
                s.level === "alto" ? "#ba1a1a" : s.level === "moderado" ? "#f5a524" : "#2E9E6C",
            }}
          >
            <div className="w-11 h-11 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant shrink-0">
              <Calendar size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold truncate">{s.fileName}</p>
              <p className="text-xs text-on-surface-variant">
                {new Date(s.timestamp).toLocaleString()} · Sensores: {s.sensors?.length ? s.sensors.join(", ") : "ECG, EDA"}
              </p>
            </div>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${levelStyle[s.level]}`}>
              Nivel: {levelName[s.level]}
            </span>
            <span className="text-sm font-semibold w-16 text-right">{s.stressPct}%</span>
            <button
              onClick={() => navigate("/app/resultado", { state: { result: s } })}
              className="btn-secondary !py-2 !px-4 text-sm flex items-center gap-1"
            >
              Ver detalle <ChevronRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Participants
// ---------------------------------------------------------------------------

export function Participants() {
  return (
    <div className="pt-8 max-w-container mx-auto">
      <h1 className="font-display font-bold text-2xl mb-1">Nuestro Equipo</h1>
      <p className="text-on-surface-variant mb-8 max-w-2xl">
        Conoce a las personas detrás de NeuroStress: un equipo
        multidisciplinario dedicado a explorar la detección del estrés
        cognitivo a través de señales biomédicas.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((m) => (
          <div key={m.name} className="card">
            <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-display font-bold text-lg mb-4">
              {m.initials}
            </div>
            <p className="font-semibold text-lg leading-tight">{m.name}</p>
            <span className="inline-block bg-water-green text-primary text-xs font-semibold px-2.5 py-1 rounded-full mt-2 mb-3">
              {m.role}
            </span>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {m.bio}
            </p>
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-outline-variant/30 text-on-surface-variant">
              <Mail size={16} />
            </div>
          </div>
        ))}

        <div className="rounded-card bg-primary text-white p-6 flex flex-col items-center justify-center text-center">
          <Sparkles size={28} className="mb-3" />
          <p className="font-display font-semibold text-lg mb-1">
            Sinergia Académica
          </p>
          <p className="text-sm text-white/80">
            Un esfuerzo conjunto para explorar el acceso al bienestar mental
            mediante tecnología biomédica no invasiva.
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Methodology
// ---------------------------------------------------------------------------

const pipeline = [
  { icon: Radio, title: "Captura", desc: "Adquisición multicanal ECG y EDA con BITalino." },
  { icon: Filter, title: "Pre-procesado", desc: "Filtrado pasa-banda, remoción de artefactos y deriva de línea base." },
  { icon: BarChart2, title: "Extracción", desc: "Cálculo de HRV (dominio tiempo/frecuencia) y componentes fásica/tónica de EDA." },
  { icon: RefreshCw, title: "Modelo ML", desc: "Clasificación con validación leave-one-subject-out." },
  { icon: ClipboardCheck, title: "Resultado", desc: "Detección del nivel de estrés cognitivo." },
];

export function Methodology() {
  return (
    <div className="pt-8 max-w-container mx-auto">
      <h1 className="font-display font-bold text-2xl mb-1">Metodología del Estudio</h1>
      <p className="text-on-surface-variant mb-8 max-w-2xl">
        Cómo transformamos señales biológicas en un indicador objetivo de
        estrés académico, mediante nuestro protocolo de captura y pipeline
        de procesamiento.
      </p>

      <div className="card mb-8">
        <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {pipeline.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="text-center">
              <div
                className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-3 ${
                  i === 0 ? "bg-primary text-white" : "bg-secondary-container text-on-secondary-container"
                }`}
              >
                <Icon size={22} />
              </div>
              <p className="font-semibold">{title}</p>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb size={20} className="text-primary" />
            <p className="font-display font-semibold text-xl">Conceptos Clave</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="card border-l-4 border-primary">
              <p className="font-semibold text-lg mb-1">HRV</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                La variabilidad de la frecuencia cardíaca mide el intervalo
                entre latidos sucesivos (intervalos R-R). Una HRV alta se
                asocia a un sistema nervioso autónomo más resiliente y capaz
                de adaptarse ante el estrés.
              </p>
            </div>
            <div className="card border-l-4 border-secondary">
              <p className="font-semibold text-lg mb-1">EDA</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                La actividad electrodérmica refleja los cambios en la
                conductancia de la piel producidos por las glándulas
                sudoríparas, un indicador directo de la activación del
                sistema nervioso simpático.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={20} className="text-primary" />
            <p className="font-display font-semibold text-xl">Métricas del Modelo</p>
          </div>
          <div className="card flex flex-col gap-5">
            <Metric label="Precisión (Accuracy)" value={78.8} />
            <Metric label="Sensibilidad" value={81.9} />
            <Metric label="Especificidad" value={77.5} />
            <p className="text-xs text-on-surface-variant italic">
              Validación leave-one-subject-out sobre 3 participantes (p2, p3, p4);
              se excluyó p1 por calidad de señal EDA cuestionable (ver informe).
            </p>
          </div>
        </div>
      </div>

      <div className="bg-error-container/60 border border-error/20 rounded-card p-5 flex gap-3">
        <AlertTriangle size={20} className="text-error shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-on-error-container mb-1">Aviso Importante</p>
          <p className="text-sm text-on-error-container/90 leading-relaxed">
            Prototipo académico desarrollado con fines de investigación para
            el curso de Introducción a Señales Biomédicas. Los resultados
            presentados no reemplazan el diagnóstico clínico profesional ni
            deben utilizarse para la toma de decisiones médicas sin
            supervisión de un especialista.
          </p>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1.5">
        <p className="text-sm font-medium text-on-surface-variant">{label}</p>
        <p className="font-display font-bold text-xl">{value}%</p>
      </div>
      <div className="h-2 bg-surface-container-low rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Help
// ---------------------------------------------------------------------------

const faqs = [
  {
    q: "¿Qué archivo debo subir?",
    a: "El archivo .txt exportado desde OpenSignals al capturar con BITalino, con los canales ECG y EDA activos.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Los datos se procesan de forma anónima y sólo se guardan localmente en tu navegador para fines de esta demo académica.",
  },
  {
    q: "¿Esto es un diagnóstico médico?",
    a: "No. NeuroStress es un prototipo académico y no reemplaza la evaluación de un profesional de la salud.",
  },
];

export function Help() {
  return (
    <div className="pt-8 max-w-2xl mx-auto">
      <h1 className="font-display font-bold text-2xl mb-6">Ayuda</h1>
      <div className="flex flex-col gap-4">
        {faqs.map((f) => (
          <div key={f.q} className="card">
            <p className="font-semibold mb-1.5">{f.q}</p>
            <p className="text-sm text-on-surface-variant leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
