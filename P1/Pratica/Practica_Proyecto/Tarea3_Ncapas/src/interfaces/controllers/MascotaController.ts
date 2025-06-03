import { Request, Response } from "express";
import { MascotaService } from "../../application/services/MascotaService";

export class MascotaController {
  constructor(private service: MascotaService) {}

  getAll = async (req: Request, res: Response) => {
    const mascotas = await this.service.getAllMascotas();
    res.json(mascotas);
  };

  getById = async (req: Request, res: Response) => {
    const mascota = await this.service.getMascota(Number(req.params.id));
    res.json(mascota);
  };

  create = async (req: Request, res: Response) => {
    const mascota = await this.service.createMascota(req.body);
    res.status(201).json(mascota);
  };

  delete = async (req: Request, res: Response) => {
    await this.service.deleteMascota(Number(req.params.id));
    res.status(204).send();
  };
}
