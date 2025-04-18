import { Router } from "express";
import { categoryController } from "../controllers/index.js";
import { validateBody } from "../middlewares/validation.middlewee.js";
import { categorySchema } from "../validations/index.js";
import { authMiddleware } from "../middlewares/user.middleware.js";
import { genereToken } from "../config/genereyt.js";

const categoryRouter = Router();

categoryRouter
  .post("/",genereToken,authMiddleware, validateBody(categorySchema), categoryController.create)
  .get("/", categoryController.findAll)
  .get("/:id", categoryController.findOne)
  .put("/:id",genereToken,authMiddleware, categoryController.update)
  .delete("/:id",genereToken,authMiddleware, categoryController.delete);