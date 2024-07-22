## The Holocron (Aplicación React.js)

![Versión](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)

Esta es una aplicación web frontend desarrollada con **React.js**.

#### Entre otras cosas, puede:

- **_Mostrar_** una lista de personajes de la Saga de Star Wars.
- **_Mostrar_** los detalles de cada personaje.
- **_Filtrar_** la lista de personajes.
- **_Marcar o desmarcar los viajes como Completados_**.
- **_Navegar_** entre páginas.

#### 🧩 Tecnologías utilizadas:

- ReactJS
- (estilos)
- **Pruebas unitarias**: Jest
- **Pruebas e2e**: Cypress

## Mejoras futuras:

- ()

## Instalación

Para instalar las dependencias, ejecute:

    npm install

## Uso

### Desarrollo

Para iniciar el servidor de desarrollo, utilice:

    npm run start

### Producción

Para construir y iniciar la versión de producción:

    npm run build
    npm run start

### Docker

Para construir y ejecutar la aplicación usando Docker:

1.  **Construir la imagen Docker:**

    docker build -t the-holocron .

2.  **Ejecutar el contenedor Docker:**

        docker run -p 3000:3000 the-holocron

    Esto iniciará la aplicación en [http://localhost:3000](http://localhost:3000).

## Ejecutar pruebas

### Unitarias

Para ejecutar pruebas unitarias:

    npm run test

### e2e

Para ejecutar pruebas end-to-end con Cypress:

    npm run cypress:open

## JIRA Board

Siga el progreso del proyecto y vea las tareas en nuestro tablero de JIRA: [JIRA Board](https://your-jira-instance.atlassian.net/your-board-url)

## Autor

👩🏻‍💻 **Soledad Pattoglio**

- [Portfolio](https://www.soledadpattoglio.tech/)
- [LinkedIn](https://www.linkedin.com/in/mspattoglio/)
- [Github](https://github.com/Sol-Zeta)

---

¡Dale una ⭐️ si este proyecto te ayudó!
