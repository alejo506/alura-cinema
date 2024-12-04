// useFavoritosContext es un customHook que creamos en el archivo (context/Favoritos.js)
import { useFavoritosContext } from "context/Favoritos";
import styles from "./Card.module.css";
import iconFavorito from "./iconFavorito.svg";
import iconNoFavorito from "./iconNoFavorito.svg";
import { Link } from "react-router-dom";

/**
 * Componente Card.
 * Representa una tarjeta interactiva con información, imagen y lógica de favoritos.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {number|string} props.id - Identificador único del contenido.
 * @param {string} props.capa - URL de la imagen de portada del contenido.
 * @param {string} props.titulo - Título del contenido.
 * @returns {JSX.Element} Una tarjeta interactiva con funcionalidad de favoritos.
 */
function Card({ id, capa, titulo }) {
    /**
     * Obtiene el contexto de favoritos mediante un custom hook.
     * @type {Object}
     * @property {Array} favorito - Lista de elementos marcados como favoritos.
     * @property {Function} agregarFavorito - Función para agregar o quitar elementos de la lista de favoritos.
     */
    const { favorito, agregarFavorito } = useFavoritosContext();

    /**
     * Determina si el elemento actual es un favorito.
     * Compara el `id` de la tarjeta con los elementos en el estado `favorito`.
     * @type {boolean}
     */
    const isFavorito = favorito.some((fav) => fav.id === id);

    /**
     * Define el icono que se mostrará basado en el estado de favorito.
     * Si `isFavorito` es true, muestra el icono de favorito, de lo contrario, muestra el icono de no favorito.
     * @type {string}
     */
    const icon = isFavorito ? iconFavorito : iconNoFavorito;

    return (
        <div className={styles.container}>
            {/* Enlace al detalle del contenido */}
            <Link className={styles.link} to={`/${id}`}>
                <img
                    /**
                     * Imagen de portada.
                     * @param {string} capa - URL de la imagen.
                     */
                    src={capa}
                    alt={titulo}
                    className={styles.capa} 
                />
                <h2>{titulo}</h2>
            </Link>
            {/* Botón de favorito */}
            <img
                src={icon}
                alt="Icono favorito"
                /**
                 * Evento onClick que alterna el estado de favorito.
                 * Agrega o elimina el elemento actual de la lista de favoritos.
                 */
                onClick={() => agregarFavorito({ id, titulo, capa })} 
            />
        </div>
    );
}

export default Card;
