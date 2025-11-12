import { useRecetas } from '../contexts/RecetasContext';
import { Container, Typography, CircularProgress, Box } from '@mui/material'; 
import RecetasList from '../components/recetas/recetasList'; // Importamos el listado

function RecetasListPage() {
  const { recetas, isLoading } = useRecetas(); 

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        🍽️ Catálogo de Recetas
      </Typography>
      
      {isLoading ? (
        // Muestra un indicador de carga mientras los datos se cargan
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <CircularProgress />
            <Typography variant="h6" sx={{ ml: 2 }}>Cargando recetas...</Typography>
        </Box>
      ) : (
        <>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
            Total de recetas encontradas: {recetas.length}
          </Typography>
          
          {/* Usamos el componente RecetasList y le pasamos el array de recetas */}
          <RecetasList recetas={recetas} />
        </>
      )}
    </Container>
  );
}

export default RecetasListPage;