import React from 'react';
import { Typography, Box } from '@mui/material';
import { Restaurant } from '@mui/icons-material';

// Recibe la lista de ingredientes como prop
function IngredientesList({ ingredientes }) {
  if (!ingredientes || ingredientes.length === 0) {
    return <Typography variant="body1">No hay ingredientes listados.</Typography>;
  }

  return (
    <>
      <Typography variant="h5" component="h2" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <Restaurant sx={{ mr: 1 }} /> Ingredientes
      </Typography>
      {/* Usamos un componente 'ul' sin decoración de lista */}
      <Box component="ul" sx={{ pl: 2, listStyleType: 'disc' }}> 
        {ingredientes.map((ing, index) => (
          <Typography key={index} component="li" variant="body1" sx={{ mb: 0.5 }}>
            {/* Usamos strong para resaltar la cantidad, siguiendo el estilo del enunciado */}
            <strong>{ing.cantidad} {ing.unidad}</strong> de {ing.nombre}
          </Typography>
        ))}
      </Box>
    </>
  );
}

export default IngredientesList;