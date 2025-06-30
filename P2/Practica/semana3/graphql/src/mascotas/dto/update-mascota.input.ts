import { IsUUID } from 'class-validator';
import { CreateMascotaInput } from './create-mascota.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateMascotaInput extends PartialType(CreateMascotaInput) {

  @Field(() => ID)
  @IsUUID()
  id: number;

  @Field(() => String)
  nombre?: string;

  @Field(() => String)
  raza?: string;

  @Field(() => Int)
  edad?: number;
}
