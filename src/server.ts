import express from "express";
import swaggerUi from "swagger-ui-express";
import "reflect-metadata";

import swaggerFile from "./swagger.json";
import { router } from "./routes";

// import "./shared/container"; // ? Why it's not working, should I remove it ?

const app = express();
app.use(express.json());

app.use(router);

// Serve Swagger UI with file upload support
const swaggerUiOptions = {
  swaggerOptions: {
    docExpansion: "none",
    validatorUrl: null,
    supportedSubmitMethods: ["get", "post", "put", "delete", "patch"],
    consumes: ["application/json", "multipart/form-data"],
  },
};

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, swaggerUiOptions),
);

app.listen(3000, () => console.log("Server is running!"));
