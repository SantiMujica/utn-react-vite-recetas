import { useState } from 'react'
import Navbar from './components/layout/Navbar.jsx'
import InicioPage from './pages/InicioPage'
import RecetasListPage from './pages/RecetasListPage.jsx'
import RecetaDetallePage from './pages/RecetaDetallePage.jsx'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/recetas" element={<RecetasListPage />} />
        <Route path="/recetas/:id" element={<RecetaDetallePage />} />
      </Routes>
    </Router>
  );
}

export default App
