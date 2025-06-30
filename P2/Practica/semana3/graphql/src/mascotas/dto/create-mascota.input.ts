import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateMascotaInput {


  @Field(() => String)
  @IsString()
  nombre: string;

  @Field(() => String)
  @IsString()
  raza: string;

  @Field(() => Int)
  @IsNumber()
  edad: number;
}
