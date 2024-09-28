# Library API Project

This project is an API for managing books, built with NestJS and PostgreSQL.

## Links

- **Jira Project**: [Jira Link]([https://your-jira-link.com](https://mspena14.atlassian.net/jira/software/projects/LA/boards/2?atlOrigin=eyJpIjoiY2NmYzg3N2UyNTQ3NDkzYmEwOTBjYjg2MGI4ZWE4MDkiLCJwIjoiaiJ9))
- **Swagger Documentation**: [Swagger API Docs](https://library-api-9ene.onrender.com/docs)
- **Deployed Project**: [Library API Deploy](https://library-api-9ene.onrender.com)

## Project Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/user/library-api.git
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up the environment variables in a `.env` file at the root of the project with the following structure:
    ```
    DB_HOST=<your-host>
    DB_PORT=<your-port>
    DB_USER=<your-username>
    DB_PASS=<your-password>
    DB_NAME=<your-database>
    DB_SSL_CA=<path-to-ssl-cert>
    ```

4. Start the project:
    ```bash
    npm run start:dev
    ```

5. Access the Swagger documentation to see the available endpoints:
    [Swagger API Docs](http://localhost:3000/docs)
