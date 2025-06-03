import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Mascota } from "./mascota";

@Entity()
export class FechaAdopcion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fecha!: Date;

  @ManyToOne(() => Mascota, (mascota) => mascota.fechasAdopcion)
  mascota!: Mascota;
  Adopcion: any;
}
