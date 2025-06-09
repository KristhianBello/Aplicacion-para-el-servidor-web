import { AulaRepository } from "../repository/AulaRepository";


export class AsignarAula {
  constructor(
    private aulaRepository: AulaRepository,
    
  ) {}

  async execute(aulaId: number, defensaId: number): Promise<string> {
    const aula = await this.aulaRepository.findById(aulaId);
    if (!aula) {
      throw new Error("Aula no encontrada");
    }

    const defensa = await this.defensaRepository.findById(defensaId);
    if (!defensa) throw new Error("Defensa no encontrada");
        defensa.aulaId = aula.id;
    await this.defensaRepository.update(defensa);

    
    return `Aula ${aula.nombre} asignada a la defensa ${defensaId}`;
  }
}