import styles from "./index.module.css";
import Banner from "components/Banner";
import Titulo from "components/Titulo/Titulo";
import Card from "components/Card";
import { useEffect, useState } from "react";

/**
 * Componente Inicio.
 * Muestra un banner de bienvenida, un título y una lista de videos obtenidos desde una API externa.
 * Los videos se renderizan en tarjetas utilizando el componente `Card`.
 * 
 * @returns {JSX.Element} La interfaz de la página de inicio con un banner, título y lista de videos.
 */
function Inicio() {

    /**
     * Estado local para almacenar los videos obtenidos de la API.
     * Inicialmente, es un arreglo vacío.
     */
    const [videos, setVideos] = useState([]);

    /**
     * Efecto que se ejecuta una vez cuando el componente se monta.
     * Realiza una petición a una API externa para obtener los videos y almacenarlos en el estado.
     */
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/alejo506/alura-cinema-api/videos")
            // Primer .then: Se ejecuta cuando la petición es exitosa. Convierte los datos en formato JSON.
            .then(response => response.json())
            // Segundo .then: Recibe los datos ya convertidos y los almacena en el estado `videos`.
            .then(data => {
                setVideos(data); // Almacenamos los datos en el estado `videos`.
            });
    }, []); // El arreglo vacío asegura que se ejecute solo una vez al cargar la página.

    return (
        <>
            {/**
             * Renderiza un banner con la imagen "home" y color de fondo azul.
             */}
            <Banner img="home" color="#154580" />

            {/**
             * Renderiza un título con el texto de bienvenida.
             */}
            <Titulo >
                <h1>Un lugar para guardar sus videos favoritos</h1>
            </Titulo>

            {/**
             * Contenedor que organiza las tarjetas de videos.
             * Mapea el arreglo `videos` y renderiza un `Card` por cada video.
             */}
            <section className={styles.container}>
                {
                    videos.map(video => {
                        return <Card {...video} key={video.id} />;
                    })
                }
            </section>
        </>
    );
}

export default Inicio;
