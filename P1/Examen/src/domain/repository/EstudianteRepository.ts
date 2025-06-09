import { Estudiante } from "../entities/Estudiante";

export interface EstudianteRepository {
  findByDefensaId(defensaId: number): Promise<Estudiante[]>;
  findAll(): Promise<Estudiante[]>;
}
