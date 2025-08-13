import { NestFactory } from '@nestjs/core';
import { SalesModule } from './sales.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SalesModule,
    { transport: Transport.TCP, options: { port: 3003 } }
  );
  await app.listen();
}
bootstrap();
