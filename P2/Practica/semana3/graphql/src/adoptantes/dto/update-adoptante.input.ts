import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { CreateAdoptanteInput } from './create-adoptante.input';
import { IsUUID, IsOptional } from 'class-validator';

@InputType()
export class UpdateAdoptanteInput extends PartialType(CreateAdoptanteInput) {

  @Field(() => ID)
  @IsUUID()
  id: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  nombre?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  telefono?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  direccion?: string;
}