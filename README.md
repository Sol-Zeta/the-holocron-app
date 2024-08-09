# The Holocron (React.js & Next.js Application)

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)

**Este README también está disponible en [Español](./README.md).**

## Main Features

- **🗂️ Pagination:** Navigate through a paginated list of characters.
- **🔍 Search and Filter:** Filter and search characters in the current page's list.
- **📜 Details:** Display complete details about each character.

## Technologies Used

- **ReactJS:** Library for building user interfaces.
- **NextJS:** Framework for React applications with server-side rendering.
- **TypeScript:** Superset of JavaScript with static typing.
- **Material UI:** Library of user interface components.
- **Testing Library:** Library for unit testing.
- **Cypress:** Tool for end-to-end (e2e) testing.

## Installation

To install the dependencies, run:

    npm install

## Usage
### Development

To start the development server:

    npm run dev

### Production
To build and start the production version:

    npm run build && npm run start

### Docker

To build and run the application using Docker:

1.  **Build the Docker image:**

    docker build -t the-holocron-app .

2.  **Run the Docker container:**

        docker run -p 3000:3000 the-holocron-app

    This will start the application at  [http://localhost:3000](http://localhost:3000).

## Run Tests

### Unit Tests

To run unit tests:

    npm run test

### e2e Tests

To run end-to-end tests with Cypress:

    npm run cypress:open

## Continuous Integration

The project uses **GitHub Actions** to ensure code quality. The workflow is triggered on every push to any branch and performs the following actions:

1. **Build the Docker Image**
2. **Run the Docker Container**
3. **Run Unit Tests inside the container**
4. **Run e2e Tests inside the container**
5. **Stop and Remove the Docker Container**

## JIRA Board

You can see the project's planning and division into user stories on the following [JIRA board](https://soledadpattoglio.atlassian.net/jira/software/projects/TH/boards/3).

## Author

👩🏻‍💻 **Soledad Pattoglio**

- [Portfolio](https://www.soledadpattoglio.tech/)
- [LinkedIn](https://www.linkedin.com/in/mspattoglio/)
- [GitHub](https://github.com/Sol-Zeta)
