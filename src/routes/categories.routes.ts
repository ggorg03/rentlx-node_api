import { Router } from "express";
import multer from "multer";

import CategoriesController from "../modules/cars/contollers/CategoriesController";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});
const categoriesController = new CategoriesController();

// * get all categories
categoriesRoutes.get("/", categoriesController.getAllCategories);
// * add new category
categoriesRoutes.post("/", categoriesController.createNewCategory);
// * add categories using a csv file
categoriesRoutes.post(
  "/import",
  upload.single("file"),
  categoriesController.importCategories,
);

export { categoriesRoutes };
