import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'adoptantes' })
export class Adoptante {
  
  @PrimaryGeneratedColumn('uuid')
  @Field(() => Int)
  id: number;

  @Column() 
  @Field(() => String)
  nombre: string;

  @Column()
  @Field(() => String)
  telefono: string;

  @Column()
  @Field(() => String)
  direccion: string;  
  
}
