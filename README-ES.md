# The Holocron (aplicación React.js & Next.js)

![Versión](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)

**This README is also available in [English](./README.md).**

## Características Principales

- **🗂️ Paginación:** Navega a través de una lista paginada de personajes
- **🔍 Búsqueda y Filtro:** Filtra y busca los personajes del listado en la página actual
- **📜 Detalles:** Muestra los detalles completos sobre cada personaje

## Tecnologías utilizadas

- **ReactJS:** Biblioteca para construir interfaces de usuario.
- **NextJS:** Framework para aplicaciones React con renderizado del lado del servidor.
- **TypeScript:** Superset de JavaScript con tipado estático.
- **Material UI:** Biblioteca de componentes de interfaz de usuario.
- **Testing Library:** Librería para pruebas unitarias.
- **Cypress:** Herramienta para pruebas e2e.

## Instalación

Para instalar las dependencias, ejecuta:

    npm install

## Uso

### Desarrollo

Para iniciar el servidor de desarrollo, usa:

    npm run dev

### Producción

Para construir e iniciar la versión de producción:

    npm run build && npm run start

### Docker

Para construir y ejecutar la aplicación usando Docker:

1.  **Construir la imagen de Docker:**

    docker build -t the-holocron-app .

2.  **Ejecutar el contenedor de Docker:**

        docker run -p 3000:3000 the-holocron-app

    Esto iniciará la aplicación en [http://localhost:3000](http://localhost:3000).

## Ejecutar pruebas

### Unitarias

Para ejecutar pruebas unitarias:

    npm run test

### e2e

Para ejecutar pruebas e2e con Cypress:

    npm run cypress:open

## Integración Continua

El proyecto utiliza **GitHub Actions** para asegurar la calidad del código. El workflow se ejecuta en cada *push* a cualquier rama y realiza las siguientes acciones:

1. **Construcción de la Imagen Docker**
2. **Ejecución del Contenedor Docker**
3. **Ejecución de Pruebas Unitarias dentro del contenedor**
4. **Ejecución de Pruebas e2e dentro del contenedor** 
5. **Detención y Eliminación del Contenedor Docker**


## Tablero JIRA

Se puede ver la planificación y división en historias de usuario del proyecto en el siguiente [tablero JIRA](https://soledadpattoglio.atlassian.net/jira/software/projects/TH/boards/3).

## Autora

👩🏻‍💻 **Soledad Pattoglio**

- [Portafolio](https://www.soledadpattoglio.tech/)
- [LinkedIn](https://www.linkedin.com/in/mspattoglio/)
- [Github](https://github.com/Sol-Zeta)
