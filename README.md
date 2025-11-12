# Aplicación de Recetas de Cocina🎓

## 📝 Descripción

Este proyecto es una aplicación web de catálogo de recetas de cocina (**SPA - Single Page Application**) desarrollada con **React** para la asignatura Programación IV. Permite visualizar un **listado de recetas**, navegar a un **detalle completo** y cuenta con una interfaz moderna y completamente *responsive*.

***

## 🚀 Tecnologías Clave Utilizadas

El proyecto fue desarrollado utilizando las siguientes librerías:

* **React** (v19.1.1+)
* **Material-UI (MUI)** (v7.3.2+) para la interfaz de usuario, *theming* y diseño *responsive* (`Grid`, `Card`, `Chip`).
* **React Router DOM** (v7.8.2+) para la navegación multi-página.
* **Context API** para la gestión de estado global (**Recetas** y **Tema**).
* **Vite** como *bundler* y entorno de desarrollo.

***

## ⚙️ Instalación y Ejecución

Sigue estos pasos para poner en marcha el proyecto:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/SantiMujica/utn-react-recetas.git
    cd TP-Recetas
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar el proyecto:**
    ```bash
    npm run dev
    ```

4.  Abrir en el navegador: `http://localhost:5173`

***

## ✅ Funcionalidades Implementadas

### Funcionalidades Obligatorias

| Funcionalidad | Descripción |
| :--- | :--- |
| **Listado de Recetas** | Página principal que muestra todas las recetas en **Cards** con información relevante. |
| **Diseño Responsive** | El *layout* principal utiliza el componente `Grid` de MUI para adaptarse a **móviles y desktop**. |
| **Navegación al Detalle** | Cada *Card* navega dinámicamente a la ruta `/recetas/:id`. |
| **Detalle de Receta** | Página que muestra la imagen destacada, lista de ingredientes (`IngredientesList.jsx`) y pasos de preparación. |
| **Context API** | Implementado en `RecetasContext.jsx` para la carga y gestión global del catálogo. |
| **Manejo de Errores (404)** | Muestra un mensaje **"Receta No Encontrada"** con opción de volver al listado si el ID es inválido. |

### Funcionalidades Extra (Puntos Adicionales)

| Funcionalidad | Nivel | Descripción |
| :--- | :--- | :--- |
| **Página de Inicio** | Básico | Componente `InicioPage.jsx` configurado en la ruta raíz (`/`) como punto de entrada. |
| **Modo Oscuro/Claro** | Intermedio | Implementado con `ThemeContext.jsx` y un *Switch* en la *Navbar* para cambiar el tema de forma global. |
| **Componentización Fina** | Calidad | Refactorización de la vista de detalle en `RecetaDetalle.jsx` e `IngredientesList.jsx`. |

***

## 📁 Estructura del Proyecto

Se ha respetado la estructura de carpetas requerida:

    src/ 
        ├── components/ 
        │ ├── recetas/ 
        │ │ ├── RecetaCard.jsx 
        │ │ ├── RecetasList.jsx 
        │ │ ├── RecetaDetalle.jsx 
        │ │ └── IngredientesList.jsx 
        │ └── layout/ 
        │      └── Navbar.jsx 
        ├── contexts/ 
        │ ├── RecetasContext.jsx 
        │ └── ThemeContext.jsx 
        ├── data/ 
        │ └── recetas.json 
        ├── pages/ 
        │ ├── InicioPage.jsx 
        │ ├── RecetasListPage.jsx 
        │ └── RecetaDetallePage.jsx 
        └── App.jsx


***

## ⚠️ Notas de Desarrollo y Problemas Conocidos

* **Case Sensitivity en Importaciones:** Debido a la insensibilidad a mayúsculas/minúsculas de algunos sistemas de archivos, la importación de algunos archivos puede requerir una ruta en minúsculas en el código para evitar errores de *bundling*.

***
