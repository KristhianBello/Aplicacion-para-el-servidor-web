// src/infrastructure/typeorm/repositories/FechaAdopcionRepository.ts
import { IFechaAdopcionRepository } from "../../../domain/repositories/IFechaAdopcionRepository";
import { FechaAdopcion } from "../../../domain/entities/FechaAdopcion";
import { AppDataSource } from "../data-source";

export class FechaAdopcionRepository implements IFechaAdopcionRepository {
  private repo = AppDataSource.getRepository(FechaAdopcion);

  async findAll(): Promise<FechaAdopcion[]> {
    return this.repo.find({ relations: ["mascota"] });
  }

  async findById(id: number): Promise<FechaAdopcion | null> {
    return this.repo.findOne({ where: { id }, relations: ["mascota"] });
  }

  async save(fecha: FechaAdopcion): Promise<FechaAdopcion> {
    return this.repo.save(fecha);
  }

  async delete(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
