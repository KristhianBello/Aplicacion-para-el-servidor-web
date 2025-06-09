import { Defensa } from "../entities/Defensa";

export interface DefensaRepository {
  findAll(): Promise<Defensa[]>;
  findById(id: number): Promise<Defensa | null>;
  create(defensa: Defensa): Promise<void>;
  update(defensa: Defensa): Promise<void>;
  delete(id: number): Promise<void>;
}
