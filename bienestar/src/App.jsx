import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const Inicio = lazy(() => import('./pages/Inicio'));
const Dietas = lazy(() => import('./pages/Dietas'));
const Mediterranea = lazy(() => import('./pages/dietas/Mediterranea'));
const Keto = lazy(() => import('./pages/dietas/Keto'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/dietas" element={<Dietas />} />
          <Route path="/mediterranea" element={<Mediterranea />} />
          <Route path="/keto" element={<Keto />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
