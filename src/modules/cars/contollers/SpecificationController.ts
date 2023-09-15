import { Request, Response } from "express";
import { container } from "tsyringe";

import { SpecificationServices } from "../services/SpecificationServices";

class SpecificationController {
  private static service = container.resolve(SpecificationServices);

  async getAllSpecification(req: Request, res: Response) {
    const specifications = await SpecificationController.service.list();

    return res.status(200).json(specifications);
  }

  async createNewSpecification(req: Request, res: Response) {
    const { name, description } = req.body;

    try {
      await SpecificationController.service.create({
        name,
        description,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(201).send();
  }
}

export default SpecificationController;
