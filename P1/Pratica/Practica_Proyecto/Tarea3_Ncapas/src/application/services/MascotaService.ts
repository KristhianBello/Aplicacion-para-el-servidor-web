import { IMascotaRepository } from "../../domain/repositories/IMascotaRepository";
import { Mascota } from "../../domain/entities/mascota";

export class MascotaService {
  constructor(private repo: IMascotaRepository) {}

  getAllMascotas(): Promise<Mascota[]> {
    return this.repo.findAll();
  }

  getMascota(id: number): Promise<Mascota | null> {
    return this.repo.findById(id);
  }

  createMascota(data: Partial<Mascota>): Promise<Mascota> {
    const mascota = Object.assign(new Mascota(), data);
    return this.repo.save(mascota);
  }

  deleteMascota(id: number): Promise<void> {
    return this.repo.delete(id);
  }
}
