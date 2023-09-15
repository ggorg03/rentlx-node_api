import { Router } from "express";

import "../shared/container"; // Load tsyringe containers  // ! Want to remove this import
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specification.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);

export { router };
