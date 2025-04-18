import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleeares.js";
import { orderController } from "../controllers/order.controller.js";
import {genereToken} from "../config/genereyt.js"
export const orderRouter = Router();

orderRouter
  .post("/",genereToken,authMiddleware, orderController.create)
  .get("/", orderController.findAll)
  .get("/:id", orderController.findOne)
  .put("/:id",genereToken,authMiddleware, orderController.update)
  .delete("/:id",genereToken,authMiddleware, orderController.delete);
