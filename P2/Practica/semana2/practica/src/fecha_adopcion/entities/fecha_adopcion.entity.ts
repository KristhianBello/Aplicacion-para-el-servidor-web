import { Entity, ManyToOne, PrimaryGeneratedColumn, Column, JoinColumn } from 'typeorm';
import { Adoptante } from '../../adoptante/entities/adoptante.entity';
import { Mascota } from  '../../mascotas/entities/mascota.entity';

@Entity()
export class AdoptanteFecha {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Adoptante, { eager: true })
  @JoinColumn({ name: 'adoptante_id' })
  adoptante: Adoptante;

  @ManyToOne(() => Mascota, { eager: true })
  @JoinColumn({ name: 'mascota_id' })
  mascota: Mascota;

  @Column({ type: 'date' })
  fechaAdopcion: Date;
}