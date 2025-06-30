import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateFechaAdopcionInput {

  @Field(() => String)
  @IsString()
  fecha: string;

  @Field(() => Int)
  @IsNumber()
  mascotaId: number;

  @Field(() => Int)
  @IsNumber()
  adoptanteId: number;
}