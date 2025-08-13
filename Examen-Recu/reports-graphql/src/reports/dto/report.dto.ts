import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class OperatorReport {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => Int)
  totalSales: number;

  @Field(() => Float)
  totalRevenue: number;
}

@ObjectType()
export class GasolineTypeReport {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  totalSales: number;

  @Field(() => Float)
  totalVolume: number;

  @Field(() => Float)
  totalRevenue: number;
}

@ObjectType()
export class SurtidorReport {
  @Field(() => ID)
  id: string;

  @Field()
  location: string;

  @Field()
  gasolineTypeName: string;

  @Field(() => Int)
  totalSales: number;

  @Field(() => Float)
  totalVolume: number;

  @Field(() => Float)
  totalRevenue: number;
}

@ObjectType()
export class SalesReport {
  @Field(() => ID)
  id: string;

  @Field()
  operatorName: string;

  @Field()
  surtidorLocation: string;

  @Field()
  gasolineTypeName: string;

  @Field(() => Float)
  quantity: number;

  @Field(() => Float)
  totalAmount: number;

  @Field()
  date: string;
}

@ObjectType()
export class DashboardStats {
  @Field(() => Int)
  totalOperators: number;

  @Field(() => Int)
  totalSurtidores: number;

  @Field(() => Int)
  totalGasolineTypes: number;

  @Field(() => Int)
  totalSales: number;

  @Field(() => Float)
  totalRevenue: number;

  @Field(() => Float)
  averageSaleAmount: number;
}
