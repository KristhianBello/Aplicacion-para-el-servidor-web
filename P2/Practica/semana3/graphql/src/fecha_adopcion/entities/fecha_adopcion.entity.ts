import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'fecha_adopcion' })
@ObjectType()
export class FechaAdopcion {

  @PrimaryGeneratedColumn('uuid')
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  fecha: Date;

  @Column()
  @Field(() => Int)
  mascotaId: number;

  @Column()
  @Field(() => Int)
  adoptanteId: number;
  
}
