// Componentes de aplicación: rutas raíz, layout con sidebar.
// Consolidado desde App.jsx, components/AppLayout.jsx y components/Sidebar.jsx.

import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet, NavLink } from "react-router-dom";
import { HelpCircle, Home, Brain, History, Users, Microscope } from "lucide-react";
import {
  Landing,
  Login,
  Register,
  Dashboard,
  AnalyzeSignal,
  Result,
  HistoryPage,
  Participants,
  Methodology,
  Help,
} from "./pages";

const links = [
  { to: "/app", label: "Inicio", icon: Home, end: true },
  { to: "/app/analizar", label: "Analizar señal", icon: Brain },
  { to: "/app/historial", label: "Historial", icon: History },
  { to: "/app/participantes", label: "Participantes", icon: Users },
  { to: "/app/metodologia", label: "Metodología", icon: Microscope },
];

export function Sidebar({ user }) {
  return (
    <aside className="w-[280px] shrink-0 bg-white border-r border-outline-variant/30 flex flex-col justify-between h-screen sticky top-0 px-4 py-6">
      <div>
        <div className="flex items-center gap-3 px-3 mb-8">
          <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white">
            <Brain size={22} />
          </div>
          <div>
            <p className="font-display font-bold text-lg leading-tight text-primary">
              NeuroStress
            </p>
            <p className="text-xs text-on-surface-variant leading-tight">
              Therapeutic Clarity
            </p>
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-[15px] transition-colors ${
                  isActive
                    ? "bg-secondary-container text-on-secondary-container"
                    : "text-on-surface-variant hover:bg-surface-container-low"
                }`
              }
            >
              <Icon size={20} />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-3">
        <NavLink
          to="/app/ayuda"
          className="flex items-center gap-3 px-4 py-2 text-on-surface-variant text-sm hover:text-primary"
        >
          <HelpCircle size={18} />
          Ayuda
        </NavLink>
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-surface-container-low">
          <div className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-semibold text-sm">
            {user?.initials || "U"}
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold">{user?.name || "Usuario"}</p>
            <p className="text-xs text-on-surface-variant">
              {user?.role || "Estudiante"}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function AppLayout({ user }) {
  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar user={user} />
      <div className="flex-1 flex flex-col">
        <header className="flex justify-end items-center gap-4 px-10 py-5">
          <button className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors">
            <HelpCircle size={20} />
          </button>
          <div className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-semibold text-sm">
            {user?.initials || "U"}
          </div>
        </header>
        <main className="flex-1 px-10 pb-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/registro" element={<Register onLogin={setUser} />} />

        <Route path="/app" element={<AppLayout user={user} />}>
          <Route index element={<Dashboard user={user} />} />
          <Route path="analizar" element={<AnalyzeSignal />} />
          <Route path="resultado" element={<Result />} />
          <Route path="historial" element={<HistoryPage />} />
          <Route path="participantes" element={<Participants />} />
          <Route path="metodologia" element={<Methodology />} />
          <Route path="ayuda" element={<Help />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
