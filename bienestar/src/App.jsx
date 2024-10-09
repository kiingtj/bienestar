import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const Inicio = lazy(() => import('./pages/Inicio'));
const Dietas = lazy(() => import('./pages/Dietas'));
const Consejos = lazy(() => import('./pages/Consejos'));
const Contacto = lazy(() => import('./pages/Contacto'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Mediterranea = lazy(() => import('./pages/dietas/Mediterranea'));
const Keto = lazy(() => import('./pages/dietas/Keto'));
const Vegana = lazy(() => import('./pages/dietas/Vegana'));
const Paleo = lazy(() => import('./pages/dietas/Paleo'));
const Dash = lazy(() => import('./pages/dietas/Dash'));
const Flexitariana = lazy(() => import('./pages/dietas/Flexitariana'));
const Hidratate = lazy(() => import('./pages/consejos/Hidratate'));
const Ejercicio = lazy(() => import('./pages/consejos/Ejercicio'));
const Descanso = lazy(() => import('./pages/consejos/Descanso'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/dietas" element={<Dietas />} />
          <Route path="/consejos" element={<Consejos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/dietas/mediterranea" element={<Mediterranea />} />
          <Route path="/dietas/keto" element={<Keto />} />
          <Route path="/dietas/vegana" element={<Vegana />} />
          <Route path="/dietas/paleo" element={<Paleo />} />
          <Route path="/dietas/dash" element={<Dash />} />
          <Route path="/dietas/flexitariana" element={<Flexitariana />} />
          <Route path="/consejos/hidratacion" element={<Hidratate />} />
          <Route path="/consejos/ejercicio" element={<Ejercicio />} />
          <Route path="/consejos/descanso" element={<Descanso />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
