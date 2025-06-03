import { IMascotaRepository } from "../../../domain/repositories/IMascotaRepository";
import { Mascota } from "../../../domain/entities/mascota";
import { AppDataSource } from "../data-source";

export class MascotaRepository implements IMascotaRepository {
  private repo = AppDataSource.getRepository(Mascota);

  async findAll(): Promise<Mascota[]> {
    return this.repo.find({ relations: ["fechasAdopcion"] });
  }

  async findById(id: number): Promise<Mascota | null> {
    return this.repo.findOne({ where: { id }, relations: ["fechasAdopcion"] });
  }

  async save(mascota: Mascota): Promise<Mascota> {
    return this.repo.save(mascota);
  }

  async delete(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
