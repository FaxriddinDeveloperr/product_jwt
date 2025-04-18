import express from "express";
import { authController } from "../controllers/index.js";
import { validateBody } from "../middlewares/validation.middlewee.js"; // Agar kerak bo‘lsa
import { authSchema } from "../validations/auth.validaton.js";

const router = express.Router();

router.post("/login", validateBody(authSchema.signUp), authController.login);

router.post(
  "/register",
  validateBody(authSchema.signIn),
  authController.register
);

export { router as authRouter };
