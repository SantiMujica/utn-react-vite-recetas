import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Switch } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeMode } from '../../contexts/ThemeContext.jsx';

// ... (El Concepto de RouterLink sigue aquí) ...

const Navbar = () => {
    //  SOLUCIÓN: LLAMAR AL HOOK Y DESESTRUCTURAR LAS VARIABLES DEL CONTEXTO
    const { mode, toggleColorMode } = useThemeMode(); 
    // Ahora 'mode' y 'toggleColorMode' están disponibles en el componente.
    
    // Si el contexto fuera null (si olvidaste envolver App en main.jsx), esto fallaría.
    // Asumimos que la anidación en main.jsx ya fue corregida.

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters> 
                    
                    {/* Logo/Nombre de la Aplicación */}
                    <RestaurantMenuIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component={RouterLink}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        RECETARIO PROGRAMACIÓN 4
                    </Typography>
                    
                    {/* Espaciador flexible */}
                    <Box sx={{ flexGrow: 1 }} /> 

                    {/*  Interruptor de Modo Oscuro/Claro (Usa 'mode' y 'toggleColorMode') */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {/* Ícono de Modo Claro */}
                        <LightModeIcon sx={{ color: mode === 'light' ? 'yellow' : 'inherit' }} />
                        
                        {/* El Switch (Checkbox) */}
                        <Switch
                            checked={mode === 'dark'} // Usa la variable 'mode'
                            onChange={toggleColorMode} // Usa la función 'toggleColorMode'
                            inputProps={{ 'aria-label': 'Modo oscuro' }}
                            color="default"
                            size="small"
                        />
                        {/* Ícono de Modo Oscuro */}
                        <DarkModeIcon sx={{ color: mode === 'dark' ? 'black' : 'inherit' }} />
                    </Box>

                    {/* Enlaces de Navegación */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button 
                          color="inherit" 
                          component={RouterLink} 
                          to="/" // <-- Asegúrate que apunte a la raíz
                          sx={{ mx: 1 }}
                        >
                            Inicio
                        </Button>
                        <Button 
                            color="inherit" 
                            component={RouterLink} 
                            to="/recetas" 
                            sx={{ mx: 1 }}
                        >
                            Recetas
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;