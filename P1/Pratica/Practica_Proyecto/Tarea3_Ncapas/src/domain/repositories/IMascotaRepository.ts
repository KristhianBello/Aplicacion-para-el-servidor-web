import { Mascota } from "../entities/mascota";

export interface IMascotaRepository {
  findAll(): Promise<Mascota[]>;
  findById(id: number): Promise<Mascota | null>;
  save(mascota: Mascota): Promise<Mascota>;
  delete(id: number): Promise<void>;
}
