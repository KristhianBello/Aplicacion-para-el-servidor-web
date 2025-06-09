export class Tribunal {
  constructor(
    public id: number,
    public nombre: string,
    public rol: 'presidente' | 'secretario' | 'vocal',
    public defensaId: number
  ) {}
}
