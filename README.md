# The Holocron (React.js application)

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)

**Este README también está disponible en [español](./README-ES.md).**

This is a frontend web application developed with **React.js**.

#### Among other things, it is able to:

- **_Show_** a list of characters from the Star Wars Saga.
- **_Show_** the details of each character.
- **_Filter_** the list of characters.
- **_Navigate_** between pages.

#### 🧩 Tech Stack used:

- ReactJS
- (styles)
- **Unit testing**: Jest
- **e2e testing**: Cypress

## Future improvements:

- ()

## Install

To install the dependencies, run:

    npm install

## Usage

### Development

To start the development server, use:

    npm run start

### Production

To build and start the production version:

    npm run build
    npm run start

### Docker

To build and run the application using Docker:

1.  **Build the Docker image:**

    docker build -t the-holocron .

2.  **Run the Docker container:**

        docker run -p 3000:3000 the-holocron

    This will start the application on [http://localhost:3000](http://localhost:3000).

## Run tests

### Unit

To run unit tests:

    npm run test

### e2e

To run end-to-end tests with Cypress:

    npm run cypress:open

## JIRA Board

Track the project's progress and view the tasks on the [JIRA board](https://soledadpattoglio.atlassian.net/jira/software/projects/TH/boards/3)

## Author

👩🏻‍💻 **Soledad Pattoglio**

- [Portfolio](https://www.soledadpattoglio.tech/)
- [LinkedIn](https://www.linkedin.com/in/mspattoglio/)
- [Github](https://github.com/Sol-Zeta)

---

Give a ⭐️ if this project helped you!
