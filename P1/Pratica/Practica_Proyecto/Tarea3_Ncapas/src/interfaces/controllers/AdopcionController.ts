// src/controllers/AdopcionController.ts
import { Request, Response } from "express";
import { AdopcionService } from "../../application/services/AdopcionService";

export class AdopcionController {
  constructor(private service: AdopcionService) {}

  getAll = async (req: Request, res: Response) => {
    const adopciones = await this.service.getAllAdopciones();
    res.json(adopciones);
  };

  getById = async (req: Request, res: Response) => {
    const adopcion = await this.service.getAdopcion(Number(req.params.id));
    if (!adopcion) return res.status(404).send("Adopción no encontrada");
    res.json(adopcion);
  };

  create = async (req: Request, res: Response) => {
    const nueva = await this.service.createAdopcion(req.body);
    res.status(201).json(nueva);
  };

  delete = async (req: Request, res: Response) => {
    await this.service.deleteAdopcion(Number(req.params.id));
    res.status(204).send();
  };
}
