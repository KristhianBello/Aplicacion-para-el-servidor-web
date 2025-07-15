import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CreateDocumentacionMascotaDto {
  @PrimaryGeneratedColumn()
  documentoId: number;
  @Column()
  mascotaId: number;
  @Column()
  tipoDocumento: string;
  @Column()
  fechaEmision: string;
  @Column()
  fechaVencimiento: string;
  @Column()
  entidadEmisora: string;
  @Column()
  descripcion: string;
}
