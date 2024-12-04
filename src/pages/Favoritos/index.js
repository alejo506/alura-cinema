import Banner from "components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/Titulo/Titulo";
import { useFavoritosContext } from "context/Favoritos";
import Card from "components/Card";

/**
 * Componente Favoritos.
 * Muestra una lista de películas o elementos marcados como favoritos por el usuario.
 * Incluye un banner de cabecera y una lista de tarjetas de favoritos.
 * 
 * @returns {JSX.Element} La interfaz de la página de favoritos con el banner y las tarjetas.
 */
function Favoritos() {
    // Recuperamos el contexto de favoritos usando el custom hook useFavoritosContext
    const { favorito } = useFavoritosContext();
    
    //console.log(favorito);

   


    return (
        <>
            {/**
             * Muestra un banner con una imagen personalizada y color de fondo.
             * "favoritos" es la imagen que se pasa como propiedad `img`.
             * El color de fondo se establece con el valor de la propiedad `color`.
             */}
            <Banner img={"favoritos"} color="#154580" />

            {/**
             * Renderiza el título de la página de favoritos.
             */}
            <Titulo>
                <h1>Favoritos</h1>
            </Titulo>

            {/**
             * Contenedor que organiza las tarjetas de los elementos favoritos.
             * Se mapea el arreglo `favorito` para renderizar un `Card` por cada ítem.
             */}
             
            <section className={styles.container}>
                {
                    favorito.length == 0 ?  <p>No existen favoritos aún</p> :
                    favorito.map((fav) => {
                        return <Card {...fav} key={fav.id} /> 
                    })
                }
            </section>
        </>
    );
}

export default Favoritos;
