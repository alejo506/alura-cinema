# 🎥 Alura Cinema

## ✨ Descripción breve:
Alura Cinema es una aplicación desarrollada con React que permite gestionar y visualizar un sistema de videos con funcionalidades de favoritos. Utiliza rutas dinámicas, Context API y una API simulada para mejorar la experiencia del usuario.

## 🌟 Características
- ✅ Gestión de favoritos mediante Context API y un Custom Hook.
- 🚀 Rutas dinámicas y anidadas usando React Router.
- 💻 Diseño modular con componentes reutilizables.
- ❌ Página de error personalizada (404).

## 🛠️ Tecnologías Utilizadas
- ⚛️ **React**: Biblioteca principal para construir la interfaz de usuario.
- 🗺️ **React Router**: Para la gestión de rutas.
- 🌐 **Context API**: Para manejar el estado global de la aplicación.
- 🛠️ **Custom Hook**: Creado para manejar la lógica de los favoritos.
- 🎨 **CSS Modules**: Estilos encapsulados para componentes.
- 📜 **JavaScript**: Lógica principal.
- 📡 **My JSON Server**: Servicio en la nube utilizado como API simulada para proporcionar datos de videos y favoritos.

## ⚙️ Instalación y Ejecución

### 🛠️ Creación del Proyecto
Este proyecto fue generado usando el comando:

```bash
npx create-react-app alura-cinema


Aquí tienes el archivo README.md organizado y formateado con Markdown para que puedas pegarlo directamente:

markdown
Copy code
# 🎥 Alura Cinema

## ✨ Descripción breve:
Alura Cinema es una aplicación desarrollada con React que permite gestionar y visualizar un sistema de videos con funcionalidades de favoritos. Utiliza rutas dinámicas, Context API y una API simulada para mejorar la experiencia del usuario.

## 🌟 Características
- ✅ Gestión de favoritos mediante Context API y un Custom Hook.
- 🚀 Rutas dinámicas y anidadas usando React Router.
- 💻 Diseño modular con componentes reutilizables.
- ❌ Página de error personalizada (404).

## 🛠️ Tecnologías Utilizadas
- ⚛️ **React**: Biblioteca principal para construir la interfaz de usuario.
- 🗺️ **React Router**: Para la gestión de rutas.
- 🌐 **Context API**: Para manejar el estado global de la aplicación.
- 🛠️ **Custom Hook**: Creado para manejar la lógica de los favoritos.
- 🎨 **CSS Modules**: Estilos encapsulados para componentes.
- 📜 **JavaScript**: Lógica principal.
- 📡 **My JSON Server**: Servicio en la nube utilizado como API simulada para proporcionar datos de videos y favoritos.

## ⚙️ Instalación y Ejecución

### 🛠️ Creación del Proyecto
Este proyecto fue generado usando el comando:

```bash
npx create-react-app alura-cinema


🚀 Correr el Proyecto
Asegúrate de estar en el directorio del proyecto.

Ejecuta el siguiente comando para iniciar la aplicación:

npm start


📂 Estructura del Proyecto

public/
├── img/               # 🖼️ Carpeta con imágenes estáticas del proyecto
├── index.html         # 📄 Archivo HTML principal de la aplicación

src/
├── components/        # 🧩 Componentes reutilizables
│   ├── Banner/        # 🖼️ Componente de encabezado principal con imagen
│   ├── Cabecera/      # 🧭 Cabecera de la aplicación
│   ├── CabeceraLink/  # 🔗 Enlaces de navegación
│   ├── Card/          # 🃏 Tarjetas para mostrar contenido visual
│   ├── Container/     # 📦 Componente contenedor para layouts
│   ├── Pie/           # ⚓ Pie de página
│   ├── Titulo/        # 🏷️ Títulos reutilizables
│
├── context/           # 🌐 Manejo de Context API
│   ├── Favoritos.js    # ❤️ Contexto para manejar favoritos y 🛠️ Custom Hook para manejar la lógica de favoritos
│
├── pages/             # 🗂️ Páginas principales de la aplicación
│   ├── Favoritos/     # ⭐ Página para visualizar videos favoritos
│   ├── Inicio/        # 🏠 Página de inicio con lista de videos
│   ├── NotFound/      # ❌ Página para rutas no definidas (404)
│   ├── PaginaBase/    # 🧱 Layout base para rutas anidadas
│   ├── Player/        # ▶️ Reproductor de videos dinámico
│
├── index.js           # 🚀 Archivo principal para renderizar la aplicación
├── index.css          # 🎨 Estilos globales de la aplicación
├── routes.js          # 🗺️ Configuración de rutas de la aplicación
├── jsconfig.json      # ⚙️ Configuración para mejorar la resolución de rutas en el proyecto



📝 Uso de la Aplicación:

🏠 Página de Inicio
Lista de videos disponibles, mostrando sus títulos y miniaturas.

▶️ Player
Permite reproducir un video seleccionado desde la lista.

⭐ Favoritos
Página dedicada a administrar los videos favoritos agregados por el usuario.

❌ Página de Error
La página 404 se muestra si el usuario intenta acceder a una ruta no definida.