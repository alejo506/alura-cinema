import Cabecera from "components/Cabecera/Cabecera";
import Container from "components/Container";
import Pie from "components/Pie/Pie";
import FavoritosProvider from "context/Favoritos";
import { Outlet } from "react-router-dom";

/**
 * Componente PaginaBase.
 * Este componente actúa como una plantilla base para la aplicación.
 * Contiene la estructura principal de la página, que incluye:
 * - Un encabezado (Cabecera)
 * - Un contenedor que envuelve los componentes hijos de la ruta anidada (Outlet)
 * - Un pie de página (Pie)
 * 
 * Además, envuelve a los componentes hijos con el contexto de favoritos utilizando el proveedor `FavoritosProvider`.
 * 
 * @returns {JSX.Element} La estructura principal de la página, con los componentes Cabecera, Container, Outlet y Pie.
 */
function PaginaBase(){
    return(
        <main>
            {/**
             * Componente Cabecera: Es el encabezado de la aplicación. 
             * Generalmente incluye elementos como el logo, enlaces de navegación, etc.
             */}
            <Cabecera />

            {/**
             * FavoritosProvider: Proveedor que gestiona el estado global de los favoritos.
             * Envuelve el contenedor principal para proporcionar el contexto de favoritos a los componentes hijos.
             */}
            <FavoritosProvider >
                <Container>
                    {/**
                     * Outlet: Se utiliza en rutas anidadas para renderizar los componentes hijos de una ruta anidada. Es un componente de react-router-dom
                     * Es un espacio reservado donde se mostrará el componente correspondiente a la ruta activa.
                     */}
                    <Outlet />
                </Container>
            </FavoritosProvider >

            {/**
             * Componente Pie: Es el pie de página de la aplicación. 
             * Generalmente incluye información como créditos, derechos de autor, etc.
             */}
            <Pie/>
        </main>
    )
}

export default PaginaBase;
