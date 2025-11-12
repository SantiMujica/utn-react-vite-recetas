import React from 'react';
import { Typography, Grid, Paper, Divider, Box, Chip } from '@mui/material';
import { AccessTime, People } from '@mui/icons-material';
import IngredientesList from './IngredientesList'; // Importamos la lista refactorizada

// Este componente solo recibe el OBJETO RECETA como prop
function RecetaDetalle({ receta }) {
  
  // Función auxiliar para determinar el color del chip (copiado de RecetaCard)
  const getDificultadColor = (dificultad) => {
    switch (dificultad) {
      case 'Fácil':
        return 'success';
      case 'Media':
        return 'warning';
      case 'Difícil':
        return 'error';
      default:
        return 'default';
    }
  };

  // El JSX es esencialmente el cuerpo que estaba dentro del 'return' de RecetaDetallePage
  return (
    <Paper elevation={3} sx={{ p: { xs: 2, md: 4 } }}>
      <Grid container spacing={4}>
        
        {/* Columna de Imagen: Usamos 5/12 del ancho fijo */}
        <Grid item xs={5} sm={5}>  
          <Box
            component="img"
            src={receta.imagen}
            alt={receta.titulo}
            sx={{
              width: '100%',
              height: 'auto', // Ajuste para mantener proporción
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: 2,
            }}
          />
        </Grid>

        {/* Columna de Título, Detalles y Ingredientes (7/12 del ancho) */}
        <Grid item xs={7} sm={7}>
          <Typography variant="h3" component="h1" gutterBottom>
            {receta.titulo}
          </Typography>
          
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
            {receta.descripcion}
          </Typography>

          {/* Chips de Información General */}
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
            <Chip 
              icon={<AccessTime />} 
              label={receta.tiempoPreparacion} 
              color="primary" 
              variant="outlined"
            />
            <Chip 
              label={`Dificultad: ${receta.dificultad}`}
              color={getDificultadColor(receta.dificultad)}
            />
            <Chip 
              icon={<People />} 
              label={`${receta.porciones} porciones`}
              color="info"
              variant="outlined"
            />
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Usamos el componente refactorizado, pasándole los ingredientes */}
          <IngredientesList ingredientes={receta.ingredientes} />

        </Grid>
        
        {/* Proceso de Preparación (12/12 del ancho en una nueva fila) */}
        <Grid item xs={12}>
          <Divider sx={{ my: 3 }} />
          <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
            👨‍🍳 Proceso de Preparación
          </Typography>
          {/* Usamos un componente 'ol' para lista ordenada (pasos numerados) */}
          <Box component="ol" sx={{ pl: 4, listStyleType: 'decimal' }}> 
            {receta.pasos.map((paso, index) => (
              <Typography key={index} component="li" variant="body1" sx={{ mb: 1 }}>
                {paso}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default RecetaDetalle;