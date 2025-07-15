import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CreateContratoAdopcionDto {
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
