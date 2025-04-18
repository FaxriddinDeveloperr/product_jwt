import express from "express"
import { userController } from "../controllers/index.js"
import { authMiddleware } from "../middlewares/user.middleware.js"
import { authController } from "../controllers/index.js"
import { genereToken } from "../config/genereyt.js"

const router = express.Router()

router
    .get("/",authMiddleware, userController.getall)
    .get("/:id",authMiddleware, userController.getone)
    .post("/",genereToken, authController.register)
    .put("/:id",genereToken, userController.update)
    .delete("/:id",genereToken, userController.delete)

export {router as userRouter}