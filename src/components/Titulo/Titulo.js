import styles from "./Titulo.module.css";

/**
 * Componente Titulo.
 * Renderiza un contenedor estilizado que encapsula cualquier contenido proporcionado.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido dinámico (puede ser cualquier elemento HTML o componente) que se renderiza dentro del contenedor.
 * @returns {JSX.Element} Un contenedor estilizado con el contenido proporcionado.
 */
function Titulo({ children }) {
    return (
        <div className={styles.texto}>
            {/**
             * Renderiza el contenido pasado como `children`.
             * Permite personalizar el contenido con cualquier elemento HTML.
             */}
            {children}
        </div>
    );
}

export default Titulo;
