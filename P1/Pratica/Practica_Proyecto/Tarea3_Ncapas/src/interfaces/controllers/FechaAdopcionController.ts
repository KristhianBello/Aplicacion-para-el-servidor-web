// src/controllers/FechaAdopcionController.ts
import { Request, Response } from "express";
import { FechaAdopcionService } from "../../application/services/FechaAdopcionService";

export class FechaAdopcionController {
  constructor(private service: FechaAdopcionService) {}

  getAll = async (req: Request, res: Response) => {
    const fechas = await this.service.getAllFechas();
    res.json(fechas);
  };

  getById = async (req: Request, res: Response) => {
    const fecha = await this.service.getFecha(Number(req.params.id));
    res.json(fecha);
  };

  create = async (req: Request, res: Response) => {
    const nueva = await this.service.createFecha(req.body);
    res.status(201).json(nueva);
  };

  delete = async (req: Request, res: Response) => {
    await this.service.deleteFecha(Number(req.params.id));
    res.status(204).send();
  };
}
