import { createContext, useContext, useEffect, useState } from "react";
// 1. Crear el Contexto (el "canal" de comunicación)
const RecetasContext = createContext(null);

// 2. Crear el Componente Provider (el "proveedor" de datos)
export const RecetasProvider = ({ children }) => {
  // 🟢 Estado: Almacena el array de recetas cargadas.
  const [recetas, setRecetas] = useState([]);
  // 🟢 Estado: Controla si los datos están cargando (útil para la UX).
  const [isLoading, setIsLoading] = useState(true);

  // 3. Efecto Secundario: Cargar las recetas al iniciar el componente
  // 💡 Concepto: El hook useEffect se usa para "efectos secundarios"
  // como llamadas a API o, en este caso, cargar un JSON local.
  // El array vacío `[]` asegura que la carga se haga SOLO una vez al montar.
  useEffect(() => {
    // Nota: La ruta de 'fetch' es relativa al directorio 'public' por defecto en Vite/Create-React-App.
    // Si tu proyecto está configurado para leer directamente de 'src/data', ajusta la ruta.
    // Asumiremos que el archivo recetas.json se copia al bundle final.
    fetch('src/data/recetas.json') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar el archivo JSON. ${response.status}');
        }
        return response.json();
      })
      .then(data => {
        setRecetas(data);
        setIsLoading(false); // 🚩 Finaliza la carga
      })
      .catch(error => {
        console.error('Error al cargar recetas:', error);
        // Implementar mejor manejo de errores si es necesario.
        setIsLoading(false);
      });
  }, []);

  // 4. Función de Utilidad: Encontrar una receta por su ID
  const getRecetaById = (id) => {
    // `parseInt(id)` es crucial porque el ID viene de la URL (string)
    // y debe coincidir con el ID del JSON (number).
    return recetas.find(receta => receta.id === parseInt(id));
  };

  // 5. El Provider expone (hace global) el estado y las funciones
  return (
    <RecetasContext.Provider value={{ recetas, isLoading, getRecetaById }}>
      {children}
    </RecetasContext.Provider>
  );
};

// 6. Hook personalizado para consumir el contexto de forma sencilla
export const useRecetas = () => {
  // Con este hook, cualquier componente solo tiene que llamar a 'useRecetas()'
  return useContext(RecetasContext);
};