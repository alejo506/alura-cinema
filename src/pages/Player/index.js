import Banner from "components/Banner";
import styles from "./Player.module.css";
import Titulo from "components/Titulo/Titulo";
import { useParams } from "react-router-dom";
import NotFound from "pages/NotFound";
import { useEffect, useState } from "react";

/**
 * Componente Player.
 * Este componente se encarga de mostrar el reproductor de video en una página dedicada.
 * Utiliza el ID del video en la URL para obtener los datos correspondientes de un video.
 * Si no se encuentra el video, muestra la página de error "NotFound".
 * 
 * @returns {JSX.Element} El reproductor de video, o una página de error si el video no es encontrado.
 */
function Player() {
    // Estado para almacenar la información del video
    const [video, setVideo] = useState();

    // Obtener el ID del video desde los parámetros de la URL
    const parametros = useParams();

    // Llamada a la API para obtener los datos del video correspondiente
    useEffect(() => {
        // Se hace una petición a la API utilizando el ID del video
        fetch(`https://my-json-server.typicode.com/alejo506/alura-cinema-api/videos?id=${parametros.id}`)
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => {
            setVideo(...data); // Guardar el primer video encontrado en el estado
        });
    }, [parametros.id]); // La dependencia es el ID del video, para que se ejecute nuevamente si cambia

    // Si no se encuentra el video, se muestra la página de error NotFound
    if (!video) return <NotFound />;

    return (
        <>
            <Banner img="player" color="#58B9AE" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                {/**
                 * Reproductor de video incrustado. 
                 * Utiliza la URL del video para cargar el contenido desde una plataforma de video (por ejemplo, YouTube).
                 */}
                <iframe
                    width="100%" // Asegura que el iframe ocupe todo el ancho disponible
                    height="100%" // Asegura que el iframe ocupe todo el alto disponible
                    src={video.link} // URL del video a reproducir
                    title={video.titulo} // Título del video para mejorar la accesibilidad
                    frameborder="0" // Elimina el borde del iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" // Permite varias funcionalidades del iframe
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen // Permite que el video se reproduzca en pantalla completa
                ></iframe>
            </section>
        </>
    );
}

export default Player;
