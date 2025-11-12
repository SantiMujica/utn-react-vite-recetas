import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function InicioPage() {
  const navigate = useNavigate();

  return (
    // Container centra el contenido y aplica espaciado
    <Container maxWidth="md" sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
      
      <MenuBookIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />

      <Typography variant="h2" component="h1" gutterBottom>
        Bienvenido al Recetario UTN
      </Typography>

      

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button 
          variant="contained" 
          size="large" 
          onClick={() => navigate('/recetas')}
          startIcon={<MenuBookIcon />}
        >
          Ver Recetas
        </Button>
      
      </Box>
    </Container>
  );
}

export default InicioPage;