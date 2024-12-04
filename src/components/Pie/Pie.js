import styles from './Pie.module.css';

/**
 * Componente Pie.
 * Renderiza un pie de página estilizado con un mensaje de desarrollo.
 *
 * @returns {JSX.Element} Un elemento `footer` que contiene el pie de página de la aplicación.
 */
function Pie() {
    return (
        <footer className={styles.rodape}>
            {/**
             * Contenido del pie de página.
             * Incluye un encabezado con el mensaje de atribución.
             */}
            <h2>Desarrollado por Alejandro.</h2>
        </footer>
    );
}

export default Pie;
