// src/interfaces/http/fechaAdopcionRoutes.ts
import express from "express";
import { FechaAdopcionService } from "../../application/services/FechaAdopcionService";
import { FechaAdopcionRepository } from "../../infrastructure/orm/repositories/FechaAdopciontsRepository"
import { FechaAdopcionController } from "../../interfaces/controllers/FechaAdopcionController";

const router = express.Router();
const controller = new FechaAdopcionController(
  new FechaAdopcionService(new FechaAdopcionRepository())
);

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.delete("/:id", controller.delete);

export default router;
