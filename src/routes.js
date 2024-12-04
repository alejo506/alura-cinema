import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NotFound from "pages/NotFound";
import PaginaBase from "pages/PaginaBase";
import Player from "pages/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * Componente encargado de manejar las rutas de la aplicación.
 * Este componente utiliza React Router para definir las rutas que la aplicación podrá acceder.
 * Se usa `BrowserRouter` como contenedor principal para manejar las rutas de navegación.
 */
function AppRoutes() {
    return (
        /**
         * El componente `BrowserRouter` es el contenedor que permite la navegación de rutas 
         * basada en el historial de navegación del navegador.
         */
        <BrowserRouter>
            {/* 
                El componente `Routes` es el encargado de definir y gestionar las rutas dentro de la aplicación.
                Dentro de él se declaran las rutas específicas de la aplicación. 
            */}
            <Routes>
                {/* 
                    Este `Route` tiene el path raíz ("/") y actúa como contenedor para otras rutas.
                    Se utiliza el componente `PaginaBase` para envolver todas las rutas secundarias. 
                    Esto facilita la organización del código y evita la sobrecarga del archivo de rutas.
                 Como este route anida las otras eso quiere decir que a los hijos se les coloca el "/" al principio Ej: /favoritos, /:id... Depende de la ruta a la que ingresemos.

                */}
                <Route path="/" element={<PaginaBase />}>
                    {/* 
                        `Route` con `index` marca esta ruta como la principal o de inicio de la aplicación.
                        Cuando el usuario accede a la raíz ("/"), el componente `Inicio` es renderizado.
                    */}
                    <Route index element={<Inicio />} />

                    {/* 
                        Ruta para acceder a la sección de favoritos.
                        Cuando el usuario accede a "/favoritos", se renderiza el componente `Favoritos`.
                    */}
                    <Route path="favoritos" element={<Favoritos />} />

                    {/* 
                        Ruta dinámica utilizando `:id`, que renderiza el componente `Player` 
                        cuando se accede a un video específico (ejemplo: "/1").
                    */}
                    <Route path=":id" element={<Player />} />

                    {/* 
                        El comodín "*" se usa para manejar rutas no definidas. Si el usuario intenta acceder
                        a una ruta que no existe (por ejemplo, "/random"), se renderiza el componente `NotFound`.
                    */}
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
