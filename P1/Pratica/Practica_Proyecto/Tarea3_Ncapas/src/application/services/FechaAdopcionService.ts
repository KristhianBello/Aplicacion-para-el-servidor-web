
import { IFechaAdopcionRepository } from "../../domain/repositories/IFechaAdopcionRepository";
import { FechaAdopcion } from "../../domain/entities/FechaAdopcion";

export class FechaAdopcionService {
  constructor(private repo: IFechaAdopcionRepository) {}

  getAllFechas(): Promise<FechaAdopcion[]> {
    return this.repo.findAll();
  }

  getFecha(id: number): Promise<FechaAdopcion | null> {
    return this.repo.findById(id);
  }

  createFecha(data: Partial<FechaAdopcion>): Promise<FechaAdopcion> {
    const fecha = Object.assign(new FechaAdopcion(), data);
    return this.repo.save(fecha);
  }

  deleteFecha(id: number): Promise<void> {
    return this.repo.delete(id);
  }
}
