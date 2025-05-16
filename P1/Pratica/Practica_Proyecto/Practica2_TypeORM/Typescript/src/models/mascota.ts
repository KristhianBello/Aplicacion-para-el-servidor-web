import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { FechaAdopcion } from "./fecha_de_adopcion";

@Entity()
export class Mascota {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  especie!: string;

  @OneToMany(() => FechaAdopcion, (fecha) => fecha.mascota)
  fechasAdopcion!: FechaAdopcion[];
}