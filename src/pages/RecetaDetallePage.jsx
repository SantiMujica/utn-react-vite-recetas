import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecetas } from '../contexts/RecetasContext';
import { Container, Typography, Button } from '@mui/material'; 
import { ArrowBack } from '@mui/icons-material';
import RecetaDetalle from '../components/recetas/RecetaDetalle';

function RecetaDetallePage() {
  const { id } = useParams(); 
  const { isLoading, getRecetaById } = useRecetas();
  const navigate = useNavigate();

  const receta = getRecetaById(id);

  if (isLoading) {
    return (
      <Container sx={{ mt: 5 }} align="center">
        <Typography variant="h5">Cargando detalles de la receta...</Typography>
      </Container>
    );
  }

  // Manejo de Receta No Encontrada (404)
  if (!receta) {
    return (
      <Container sx={{ mt: 5 }} align="center">
        <Typography variant="h4" color="error" gutterBottom>
          Receta No Encontrada (404) 😔
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          El ID "{id}" no corresponde a ninguna receta en nuestro catálogo.
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<ArrowBack />} 
          onClick={() => navigate('/recetas')}
        >
          Volver al Listado
        </Button>
      </Container>
    );
  }

  // Renderizar la página con el componente visual refactorizado
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Button 
        variant="outlined" 
        startIcon={<ArrowBack />} 
        onClick={() => navigate('/recetas')}
        sx={{ mb: 3 }}
      >
        Volver al Listado
      </Button>

      {/* Pasamos el objeto receta al componente visual */}
      <RecetaDetalle receta={receta} />
      
    </Container>
  );
}

export default RecetaDetallePage;