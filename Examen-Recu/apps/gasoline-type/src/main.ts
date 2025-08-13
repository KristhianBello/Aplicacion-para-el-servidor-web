import { NestFactory } from '@nestjs/core';
import { GasolineTypeModule } from './gasoline-type.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GasolineTypeModule,
    { transport: Transport.TCP, options: { port: 3001 } }
  );
  await app.listen();
}
bootstrap();
