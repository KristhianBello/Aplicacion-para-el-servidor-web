import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CreateCertificadoPropiedadDto {
  @PrimaryGeneratedColumn()
  certificadoId: number;
  @Column()
  adopcionId: number;
  @Column()
  numeroCertificado: string;
  @Column()
  fechaEmision: string;
  @Column()
  entidadEmisora: string;
  @Column()
  hashSeguridad: string;
}
