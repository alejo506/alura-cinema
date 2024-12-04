// Importamos las funciones necesarias de React
import { createContext, useContext, useState } from "react";



// ========================================= Se crea un contexto ========================================================================================

/**
 * Creamos el contexto FavoritosContext, que se usará para compartir los favoritos entre componentes.
 * @type {React.Context}
 */
export const FavoritosContext = createContext();

/**
 * Le damos un nombre al contexto para que sea más fácil identificarlo en herramientas de depuración.
 */
FavoritosContext.displayName = "Favoritos";

/**
 * Componente que proporciona el contexto FavoritosContext a todos los componentes hijos.
 * Este componente envuelve a los hijos y les da acceso al estado de favoritos.
 *
 * @param {React.PropsWithChildren<{}>} props - Las propiedades del componente, que incluyen los componentes hijos.
 * @returns {JSX.Element} El proveedor del contexto con los componentes hijos dentro.
 */
export default function FavoritosProvider({ children }) {
    // Usamos useState para crear el estado favorito, que es un arreglo vacío al principio
    const [favorito, setFavorito] = useState([]);

    /**
     * El proveedor del contexto comparte los valores `favorito` y `setFavorito`
     * con todos los componentes dentro de FavoritosProvider.
     */
    return (
        <FavoritosContext.Provider value={{ favorito, setFavorito }}>
            {/* Los componentes hijos (children) pueden acceder al contexto */}
            {children}
        </FavoritosContext.Provider>
    );
};

// ! OJO: Este contexto lo utilizamos debajo del componente que engloba todas las rutas (En routes.js)

/**
 * El contexto FavoritosContext se debe utilizar debajo del componente que envuelve todas las rutas,
 * para que todos los componentes de la aplicación tengan acceso al contexto de favoritos.
 */






// ========================================= Custom Hook ========================================================================================

// ? Ahora, vamos a crear un Custom Hook para manejar la lógica de los favoritos.

/**
 * Custom Hook `useFavoritosContext` para acceder y modificar el estado de favoritos.
 *
 * @returns {Object} Un objeto que contiene el estado de `favorito` y la función `agregarFavorito`.
 */
export function useFavoritosContext() {
    // Accedemos al contexto de favoritos usando useContext
    const { favorito, setFavorito } = useContext(FavoritosContext);

    /**
     * Función para agregar o quitar un favorito de la lista.
     * Si el favorito no está en la lista, lo agrega; si ya está, lo elimina.
     *
     * @param {Object} nuevoFavorito - El objeto del favorito que se desea agregar o quitar.
     * @param {number} nuevoFavorito.id - El id único del favorito.
     */
    function agregarFavorito(nuevoFavorito) {
        // Verificamos si el nuevo favorito ya está en la lista, basándonos en el id
        const favoritoRepetido = favorito.some((item) => item.id === nuevoFavorito.id); // Devuelve un true o false

        // Creamos una copia de la lista de favoritos
        let nuevaLista = [...favorito];

        // Si el favorito no está repetido, lo agregamos a la lista
        if (!favoritoRepetido) {
            nuevaLista.push(nuevoFavorito); // Agregamos el nuevo favorito a la lista
            return setFavorito(nuevaLista); // Actualizamos el estado con la nueva lista
        }

        // Si el favorito ya está en la lista, lo eliminamos
        nuevaLista = favorito.filter(item => item.id !== nuevoFavorito.id); // Filtramos la lista para eliminar el favorito repetido
        return setFavorito(nuevaLista); // Actualizamos el estado con la nueva lista sin el favorito
    }

    // Devolvemos el estado de favoritos y la función para agregar/quitar favoritos
    return { favorito, agregarFavorito };
}
