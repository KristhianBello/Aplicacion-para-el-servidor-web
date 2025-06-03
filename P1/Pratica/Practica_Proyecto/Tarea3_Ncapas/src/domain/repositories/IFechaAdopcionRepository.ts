import { FechaAdopcion } from "../entities/FechaAdopcion";

export interface IFechaAdopcionRepository {
  findAll(): Promise<FechaAdopcion[]>;
  findById(id: number): Promise<FechaAdopcion | null>;
  save(fecha: FechaAdopcion): Promise<FechaAdopcion>;
  delete(id: number): Promise<void>;
}
