import { NestFactory } from '@nestjs/core';
import { SurtidorModule } from './surtidor.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SurtidorModule,
    { transport: Transport.TCP, options: { port: 3004 } }
  );
  await app.listen();
}
bootstrap();
