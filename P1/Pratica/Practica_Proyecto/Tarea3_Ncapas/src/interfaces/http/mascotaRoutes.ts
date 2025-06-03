// src/interfaces/http/adopcionRoutes.ts
import express from "express";
import { MascotaService } from "../../application/services/MascotaService";
import { MascotaRepository } from "../../infrastructure/orm/repositories/MascotaRepository";
import { MascotaController } from "../../interfaces/controllers/MascotaController";

const router = express.Router();
const controller = new MascotaController(
  new MascotaService(new MascotaRepository())
);

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.delete("/:id", controller.delete);

export default router;
