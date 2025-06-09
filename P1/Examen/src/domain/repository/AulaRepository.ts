import { Aula } from "../entities/Aula";

export interface AulaRepository {
  findAll(): Promise<Aula[]>;
  findById(id: number): Promise<Aula | null>;
}
