import jwt from "jsonwebtoken";

export const genereToken = (paylod, jwtSecret, option) => {
  return jwt.sign(paylod, jwtSecret, option);
};
