import styles from "./Banner.module.css";

function Banner({ img, color }) {
    /**
     * Renderiza un contenedor con una imagen de fondo dinámica basada en la propiedad `img`.
     * @type {string}
     */
    const backgroundImage = `url("/img/banner-${img}.svg")`;

    /**
     * Define el estilo del gradiente de fondo con el color recibido por la propiedad `color`.
     * @type {string}
     */
    const gradientStyle = { background: `${color}` };

    return (
        <div 
            className={styles.capa} 
            /**
             * Aplica la imagen de fondo al contenedor principal.
             * La URL se genera dinámicamente utilizando la propiedad `img`.
             * @param {string} backgroundImage - La URL de la imagen del banner.
             */
            style={{ backgroundImage }}
        >
            <div 
                className={styles.gradient} 
                /**
                 * Estilo dinámico para aplicar el gradiente de color.
                 * @param {Object} gradientStyle - El estilo del gradiente.
                 */
                style={gradientStyle}
            >
            </div>
        </div>
    );
}

export default Banner;
