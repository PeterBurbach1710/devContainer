# devcontainer
devcontainer can be used to develop software projects in a Docker container. The container contains all the tools needed for development.
It can be used in Visual Studio Code or another editor. The devcontainer can also be used in a CI/CD pipeline.

## setup
The devcontainer uses:
- Docker
- Node.js with
    - pnpm
    - TypeScript
    - ESLint
    - Prettier
    - Express.js
    - mysql2
- MariaDB

## requirements
Please make sure the following tools are installed on your machine:
- Docker
- Visual Studio Code
- Visual Studio Code Extension: Remote - Containers

## usage
1. clone repository to your machine
2. navigate to the directory and open it with `code .`
3. build container
    * start the command palette (STRG + SHIFT + P) and 
    * select `Remote-Containers: Reopen in Container`
    * ... the container is created and started
    * ... the development environment is set up and you can start developing
4. start the server with `pnpm run start`

Easy like that! 🚀