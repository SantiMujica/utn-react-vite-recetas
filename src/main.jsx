import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { RecetasProvider } from './contexts/RecetasContext.jsx'; 
import { ThemeModeProvider } from './contexts/ThemeContext.jsx';
// Importamos el Provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 1. Proveedor de Modo Oscuro/Claro (Debe ser el más externo para envolver el tema) */}
    <ThemeModeProvider>
     {/* Envolvemos la App con el Provider */}
      <RecetasProvider>
        <App />
      </RecetasProvider>
    </ThemeModeProvider> 
  </React.StrictMode>,
);