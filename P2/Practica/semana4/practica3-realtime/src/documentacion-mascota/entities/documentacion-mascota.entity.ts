import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('documentacion_mascota')
export class DocumentacionMascota {
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
