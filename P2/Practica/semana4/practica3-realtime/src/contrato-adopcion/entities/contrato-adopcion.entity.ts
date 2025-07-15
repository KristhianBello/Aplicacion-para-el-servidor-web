import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('contrato_adopcion')
export class ContratoAdopcion {
  @PrimaryGeneratedColumn()
  contratoAdopcionId: number;
  @Column()
  adopcionId: number;
  @Column()
  contenido: string;
  @Column()
  terminosEspeciales: string;
  @Column()
  fechaFirma: string;
}
