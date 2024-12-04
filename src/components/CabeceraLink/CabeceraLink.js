import { Link } from "react-router-dom";
import styles from "./CabeceraLink.module.css";

/**
 * Componente CabeceraLink.
 * Renderiza un enlace estilizado que utiliza react-router-dom para la navegación.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.url - URL a la que redirige el enlace.
 * @param {React.ReactNode} props.children - Contenido que se mostrará dentro del enlace (puede ser texto o elementos HTML).
 * @returns {JSX.Element} Un enlace estilizado con la URL y el contenido especificados.
 */
function CabeceraLink({ url, children }) {
    return (
        <Link 
            to={url} 
            className={styles.link}
        >
            {/**
             * Contenido dinámico proporcionado como hijos del componente.
             * Puede incluir texto, iconos o cualquier estructura HTML.
             */}
            {children}
        </Link>
    );
}

export default CabeceraLink;
