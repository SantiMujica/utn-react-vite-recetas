// src/components/recetas/RecetasList.jsx

import React from 'react';
import { Grid, Box } from '@mui/material';
import RecetaCard from './RecetaCard'; // Importamos el componente que acabamos de crear

// Recibe el array de recetas como una prop
function RecetasList({ recetas }) { 
  return (
    <Box sx={{ flexGrow: 1, mt: 3 }}>
      {/* 💡 Grid Container: Envuelve todos los elementos de la grilla */}
      <Grid container spacing={4}>
        {/* 💡 Iteramos sobre el array de recetas */}
        {recetas.map((receta) => (
          // 💡 Grid Item: Define la posición y tamaño de cada tarjeta
          <Grid 
            item 
            key={receta.id} 
            xs={12} // 1 tarjeta por fila en móviles (12/12)
            sm={6}  // 2 tarjetas por fila en tablets (6/12)
            md={4}  // 3 tarjetas por fila en desktop (4/12)
            lg={3}  // 4 tarjetas por fila en pantallas grandes (3/12)
          >
            {/* Le pasamos el objeto receta completo al componente Card */}
            <RecetaCard receta={receta} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default RecetasList;