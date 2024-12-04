import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from 'routes';

/**
 * El punto de entrada de la aplicación React.
 * Aquí se inicializa el renderizado de la aplicación en el DOM.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * El renderizado de la aplicación se realiza en el contenedor de ID 'root'.
 * Se utiliza React.StrictMode para activar el modo de desarrollo estricto, 
 * que ayuda a identificar problemas y malas prácticas en el ciclo de vida de los componentes.
 */
root.render(
  /**
   * Modo estricto de React para ayudar a detectar problemas de desarrollo.
   * No afecta el comportamiento en producción.
   */
  <React.StrictMode>
    
    {/* 
      AppRoutes gestiona las rutas de la aplicación utilizando React Router. 
      Este componente se encarga de renderizar las diferentes páginas 
      según la URL actual del navegador.
    */}
    <AppRoutes />

  </React.StrictMode>
);
