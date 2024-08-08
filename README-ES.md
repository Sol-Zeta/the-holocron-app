# El Holocron (aplicación React.js)

![Versión](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)

**This README is also available in [English](./README.md).**

Esta es una aplicación web frontend desarrollada con **React.js**.

#### Entre otras cosas, es capaz de:

- **_Mostrar_** una lista paginada de personajes de la saga de Star Wars.
- **_Mostrar_** los detalles de cada personaje.
- **_Filtrar_** la lista de personajes.
- **_Navegar_** entre las páginas de la lista.

#### 🧩 Tecnologías utilizadas:

- **ReactJS**
- **NextJS**
- **TypeScript**
- **Material UI**
- **Jest** (Pruebas unitarias)
- **Cypress** (Pruebas e2e)

## Mejoras futuras:

- Crear un componente para seleccionar entre los modos Dark y Light


## Instalación

Para instalar las dependencias, ejecuta:

    npm install

## Uso

### Desarrollo

Para iniciar el servidor de desarrollo, usa:

    npm run dev

### Producción

Para construir e iniciar la versión de producción:

    npm run build
    npm run start

### Docker

Para construir y ejecutar la aplicación usando Docker:

1.  **Construir la imagen de Docker:**

    docker build -t el-holocron .

2.  **Ejecutar el contenedor de Docker:**

        docker run -p 3000:3000 el-holocron

    Esto iniciará la aplicación en [http://localhost:3000](http://localhost:3000).

## Ejecutar pruebas

### Unitarias

Para ejecutar pruebas unitarias:

    npm run test

### e2e

Para ejecutar pruebas de extremo a extremo con Cypress:

    npm run cypress:open

## Tablero JIRA

Se puede ver la planificación y división en historias de usuario del proyecto en el siguiente [tablero JIRA](https://soledadpattoglio.atlassian.net/jira/software/projects/TH/boards/3).

## Autora

👩🏻‍💻 **Soledad Pattoglio**

- [Portafolio](https://www.soledadpattoglio.tech/)
- [LinkedIn](https://www.linkedin.com/in/mspattoglio/)
- [Github](https://github.com/Sol-Zeta)

---

¡Dale una ⭐️ si este proyecto te ayudó!
