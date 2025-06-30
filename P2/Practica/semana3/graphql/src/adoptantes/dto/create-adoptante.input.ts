import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateAdoptanteInput {

  @Field(() => String)
  @IsString()
  nombre: string;

  @Field(() => String)
  @IsString()
  telefono: string;

  @Field(() => String)
  @IsString()
  direccion: string;
}