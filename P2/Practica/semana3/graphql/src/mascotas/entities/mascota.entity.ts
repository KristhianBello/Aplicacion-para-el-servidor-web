import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'mascotas' })
export class Mascota {
 

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  nombre: string;

  @Column()
  @Field(() => String)
  raza: string;


}
