import { Router } from "express";

import SpecificationController from "../modules/cars/contollers/SpecificationController";

const specificationRoutes = Router();
const specificationController = new SpecificationController();

//* List specifications
specificationRoutes.get("/", specificationController.getAllSpecification);
//* Create specification
specificationRoutes.post("/", specificationController.createNewSpecification);

export { specificationRoutes };
