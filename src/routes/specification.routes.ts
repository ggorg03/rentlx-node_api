import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { SpecificationServices } from "../modules/cars/services/SpecificationServices";

const specificationRoutes = Router();
const specificationRepository = SpecificationRepository.getInstance();
const specificationServices = new SpecificationServices(
  specificationRepository,
);

//* List specifications
specificationRoutes.get("/", (req, res) => {
  const specifications = specificationRepository.findAll();

  return res.status(200).json({ specifications });
});

//* Create specification
specificationRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  try {
    specificationServices.create({ name, description });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  return res.status(201).send();
});

export { specificationRoutes };
