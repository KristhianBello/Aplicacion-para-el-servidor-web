import { Adopcion } from "../entities/adopcion";

export interface IAdopcionRepository {
  findAll(): Promise<Adopcion[]>;
  findById(id: number): Promise<Adopcion | null>;
  save(adopcion: Adopcion): Promise<Adopcion>;
  delete(id: number): Promise<void>;
}
