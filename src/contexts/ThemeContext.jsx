import React, { createContext, useState, useContext, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// 1. Crear el Contexto para el tema
const ThemeContext = createContext(null);

export const ThemeModeProvider = ({ children }) => {
  // 🟢 Estado: 'light' por defecto
  const [mode, setMode] = useState('light');

  // Función para cambiar el modo
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // 💡 Concepto: useMemo memoriza el tema y solo lo recalcula si 'mode' cambia.
  // Esto optimiza el rendimiento.
  const theme = useMemo(
    () =>
      createTheme({
        // 2. Configurar la paleta de colores para el modo actual
        palette: {
          mode, // Será 'light' o 'dark'
          // Puedes personalizar colores primarios, secundarios, etc.
          // Ej: primary: { main: '#388e3c' } // Un verde para un tema de cocina
        },
      }),
    [mode],
  );

  // 3. El Provider expone la función de cambio y el modo actual
  const value = {
    mode,
    toggleColorMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {/* 4. El ThemeProvider de MUI envuelve toda la aplicación */}
      <ThemeProvider theme={theme}>
        {/* 5. CssBaseline: Un componente de MUI para aplicar un reseteo de CSS básico 
            y los colores de fondo y texto del tema global. ¡CRUCIAL para el Dark Mode! */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar el tema
export const useThemeMode = () => {
  return useContext(ThemeContext);
};