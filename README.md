# RENTX
---
## About
The RENTX project is an API developed to practice Node.js and REST principles. Its primary purpose is to serve as a car rental system.

Please note that this project is a work in progress. Below, you can find a list of the tools and technologies being used:

- **Node.js**
- **TypeScript**
- **PostgreSQL**
- **TypeORM**
- **tsyringe**: This package is used for dependency injection. You can find more information about it [here](https://www.npmjs.com/package/tsyringe).
- **swagger-ui-express**: This Node.js package is utilized for Swagger UI documentation.
- **Docker**
- **Docker Compose**

## Getting Started
To try out this project locally, follow these steps:

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/ggorg03/rentx-node_api.git
   ```

2. Run the project using Docker Compose.
 
   Note: If you don't have Docker Compose installed, you need to [install it](https://docs.docker.com/compose/install/) before continue

   Open your terminal within the cloned repository directory and run the following command:
   ```
   sudo docker-compose up
   ```
   Note: The initial startup may take some time.

4. With the project now running, you can access the Swagger documentation by opening your favorite web browser and navigating to:
   ```
   http://localhost:3000/api-docs/
   ```

Please keep in mind that in the near future, the project will be deployed online for easier acces
