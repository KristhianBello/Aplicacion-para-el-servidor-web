import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { CreateFechaAdopcionInput } from './create-fecha_adopcion.input';
import { IsUUID, IsOptional } from 'class-validator';

@InputType()
export class UpdateFechaAdopcionInput extends PartialType(CreateFechaAdopcionInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  fecha?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  mascotaId?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  adoptanteId?: number;
}