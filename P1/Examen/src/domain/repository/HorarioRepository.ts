import { Horario } from "../entities/Horario";

export interface HorarioRepository {
  findAll(): Promise<Horario[]>;
  findDisponibles(): Promise<Horario[]>;
}
    