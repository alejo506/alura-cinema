import { Link } from "react-router-dom";
import styles from "./Cabecera.module.css";
import logo from "./logo-alura.svg";
import CabeceraLink from "components/CabeceraLink/CabeceraLink";

/**
 * Componente de Cabecera.
 * Representa el encabezado de la aplicación, incluyendo un logo y un menú de navegación.
 *
 * @returns {JSX.Element} El encabezado con el logo y enlaces de navegación.
 */
function Cabecera() {
    return (
        <header className={styles.cabecera}>
            {/* 
                Enlace principal que redirige al inicio (index).
                Utiliza react-router-dom para la navegación sin recarga.
            */}
            <Link to="/">
                <section className={styles.logoContainer}>
                    {/* 
                        Imagen del logo y nombre de la aplicación.
                        @param {string} logo - La imagen del logo importada.
                    */}
                    <img src={logo} alt="Logo" /> 
                    <span> Cinema </span>
                </section>
            </Link>

            {/* 
                Menú de navegación con enlaces a otras secciones de la aplicación.
                Utiliza el componente CabeceraLink para cada enlace.
            */}
            <nav>
                {/* Enlace al inicio */}
                <CabeceraLink url="./">
                    Home
                </CabeceraLink>

                {/* Enlace a la sección de favoritos */}
                <CabeceraLink url="./Favoritos">
                    Favoritos
                </CabeceraLink>
            </nav>
        </header>
    );
}

export default Cabecera;
