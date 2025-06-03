import { IAdopcionRepository } from "../../../domain/repositories/IAdopcionRepository";
import { Adopcion } from "../../../domain/entities/adopcion";
import { AppDataSource } from "../data-source";

export class AdopcionRepository implements IAdopcionRepository {
  private repo = AppDataSource.getRepository(Adopcion);

  async findAll(): Promise<Adopcion[]> {
    return this.repo.find({ relations: ["mascota"] });
  }

  async findById(id: number): Promise<Adopcion | null> {
    return this.repo.findOne({ where: { id }, relations: ["mascota"] });
  }

  async save(adopcion: Adopcion): Promise<Adopcion> {
    return this.repo.save(adopcion);
  }

  async delete(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
