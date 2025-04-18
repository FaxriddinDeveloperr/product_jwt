import jwt from "jsonwebtoken";
import { User } from "../models/index.js";
import { config } from "../config/index.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.slice(7);
    const decode = jwt.verify(token, config.jwt_secret);
    console.log(decode);
    const user = await User.findById(decode.sub);
    if (!user) {
      return next(new Error("Authentication failed", 400));
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};