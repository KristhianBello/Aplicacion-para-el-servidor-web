import { IAdopcionRepository } from "../../domain/repositories/IAdopcionRepository";
import { Adopcion } from "../../domain/entities/adopcion";

export class AdopcionService {
  constructor(private repo: IAdopcionRepository) {}

  getAllAdopciones(): Promise<Adopcion[]> {
    return this.repo.findAll();
  }

  getAdopcion(id: number): Promise<Adopcion | null> {
    return this.repo.findById(id);
  }

  createAdopcion(data: Partial<Adopcion>): Promise<Adopcion> {
    const adopcion = Object.assign(new Adopcion(), data);
    return this.repo.save(adopcion);
  }

  deleteAdopcion(id: number): Promise<void> {
    return this.repo.delete(id);
  }
}
