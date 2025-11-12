import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Typography, 
  Button, 
  Stack, 
  Chip 
} from '@mui/material';
import { AccessTime, People } from '@mui/icons-material';

// El componente recibe un objeto 'receta' como prop
function RecetaCard({ receta }) {
  // Concepto: useNavigate es el hook de React Router DOM para navegar 
  // programáticamente (al hacer clic en un botón, después de enviar un formulario, etc.)
  const navigate = useNavigate();

  // Función para determinar el color del chip de dificultad
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

  const handleVerReceta = () => {
    // Navegación Dinámica: Navegamos a la ruta /recetas/ID_DE_LA_RECETA
    navigate(`/recetas/${receta.id}`);
  };

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        // Efecto de hover 
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 8 // Aumenta la sombra al pasar el mouse
        }
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={receta.imagen} // La URL de la imagen viene de la prop
        alt={receta.titulo}
        sx={{ objectFit: 'cover' }}
      />
      
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="div" gutterBottom>
          {receta.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }} noWrap>
          {receta.descripcion}
        </Typography>
        
        {/* Stack: Para alinear elementos horizontalmente con espaciado */}
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <Chip 
            icon={<AccessTime fontSize="small" />} 
            label={receta.tiempoPreparacion} 
            size="small" 
            variant="outlined"
          />
          <Chip 
            label={receta.dificultad}
            size="small"
            color={getDificultadColor(receta.dificultad)}
          />
        </Stack>
        <Chip 
            icon={<People fontSize="small" />} 
            label={`${receta.porciones} porciones`}
            size="small"
            variant="outlined"
        />
      </CardContent>
      
      <CardActions>
        <Button 
          size="small" 
          variant="contained" 
          fullWidth
          onClick={handleVerReceta}
        >
          Ver Receta
        </Button>
      </CardActions>
    </Card>
  );
}

export default RecetaCard;