import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Mascota } from "./mascota";
import { Adoptante } from "./adoptante";

@Entity()
export class FechaAdopcion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "date" })
  fecha!: Date;

  @ManyToOne(() => Mascota, (mascota) => mascota.fechasAdopcion)
  mascota!: Mascota;

  @ManyToOne(() => Adoptante, (adoptante) => adoptante.fechasAdopcion)
  adoptante!: Adoptante;
}