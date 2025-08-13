import { InputType, Field, Float } from '@nestjs/graphql';
import { IsOptional, IsString, IsDateString } from 'class-validator';

@InputType()
export class DateRangeInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  endDate?: string;
}

@InputType()
export class SalesFilterInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  operatorId?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  surtidorId?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  gasolineTypeId?: string;

  @Field(() => DateRangeInput, { nullable: true })
  @IsOptional()
  dateRange?: DateRangeInput;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  minAmount?: number;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  maxAmount?: number;
}
