import { Request, Response } from "express";

import { CategoriesService } from "../services/CategoriesServices";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

class CategoriesController {
  private static repository = new CategoriesRepository();
  private static service = new CategoriesService(
    CategoriesController.repository,
  );

  async getAllCategories(req: Request, res: Response) {
    const categories = await CategoriesController.service.list();

    return res.status(200).json(categories);
  }

  async createNewCategory(req: Request, res: Response) {
    const { name, description } = req.body;

    try {
      await CategoriesController.service.createCategory({ name, description });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(201).send();
  }

  async importCategories(req: Request, res: Response) {
    const { file } = req;
    await CategoriesController.service.importCategories(file);

    return res.status(200).send();
  }
}

export default CategoriesController;
