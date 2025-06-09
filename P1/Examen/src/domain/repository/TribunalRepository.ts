import { Tribunal } from "../entities/Tribunal";

export interface TribunalRepository {
  findByDefensaId(defensaId: number): Promise<Tribunal[]>;
}
