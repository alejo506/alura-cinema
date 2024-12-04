import styles from "./NotFound.module.css";

/**
 * Componente NotFound.
 * Este componente muestra un mensaje de error "404" cuando una página no es encontrada.
 * Generalmente se usa en rutas que no coinciden con ninguna definida en la aplicación.
 * 
 * @returns {JSX.Element} Un mensaje de error con el código "404" y el texto "Página no encontrada".
 */
function NotFound() {
    return (
        <section className={styles.container}>
            {/**
             * Título que muestra el código de error "404".
             * Aparece en grande para indicar que la página no fue encontrada.
             */}
            <h2 className={styles.error}>404</h2>
            
            {/**
             * Texto que explica que la página solicitada no existe.
             * Aparece debajo del código de error "404".
             */}
            <p className={styles.text_error}>Página no encontrada</p>
        </section>
    );
}

export default NotFound;
