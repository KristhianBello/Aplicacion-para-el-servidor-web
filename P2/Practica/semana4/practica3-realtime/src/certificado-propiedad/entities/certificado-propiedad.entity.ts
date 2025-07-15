import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('certificado_propiedad')
export class CertificadoPropiedad {
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
