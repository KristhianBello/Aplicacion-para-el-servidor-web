export class Defensa {
  constructor(
    public id: number,
    public tema: string,
    public fecha: string,
    public aulaId: number,
    public horarioId: number,
    public estado: 'programada' | 'realizada' | 'cancelada' = 'programada'
  ) {}
}
