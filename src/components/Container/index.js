// Como nuestra aplicacion tiene varias paginas que tienen el mismo diseno, entonces creamos un contenedor que contenga las caracteristicas en comun. Podemos ver su uso desde el componente PaginaBase


import styles from "./Container.module.css";

/**
 * Componente Container.
 * Crea un contenedor reutilizable que aplica estilos comunes para varias páginas de la aplicación.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido dinámico que se renderiza dentro del contenedor.
 * @returns {JSX.Element} Un contenedor estilizado con el contenido proporcionado.
 */
function Container({ children }) {
    return (
        <section className={styles.container}>
            {/**
             * Renderiza el contenido pasado como `children`.
             * Permite encapsular cualquier elemento o componente con estilos comunes.
             */}
            {children}
        </section>
    );
}

export default Container;
