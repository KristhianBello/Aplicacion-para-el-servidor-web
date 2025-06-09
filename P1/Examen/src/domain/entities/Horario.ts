export class Horario {
  constructor(
    public id: number,
    public dia: string, // por ejemplo: 'Martes'
    public horaInicio: string, // '09:00 AM'
    public horaFin: string,    // '10:30 AM'
    public disponible: boolean = true
  ) {}
}
