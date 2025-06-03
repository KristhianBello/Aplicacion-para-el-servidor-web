import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { FechaAdopcion } from "./FechaAdopcion";

@Entity()
export class Adopcion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @OneToMany(() => FechaAdopcion, (fecha) => fecha.Adopcion)
  fechasAdopcion!: FechaAdopcion[];
}