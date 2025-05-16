import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { FechaAdopcion } from "./fecha_de_adopcion";

@Entity()
export class Adoptante {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @OneToMany(() => FechaAdopcion, (fecha) => fecha.adoptante)
  fechasAdopcion!: FechaAdopcion[];
}