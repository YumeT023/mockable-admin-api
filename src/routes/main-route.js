import { Router } from "express";
import { result } from "../mock/response.js";

export const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  res.json({ message: "Tepr by mainRouter" });
});

mainRouter.post("/", (req, res) => {
  res.json(result);
});
