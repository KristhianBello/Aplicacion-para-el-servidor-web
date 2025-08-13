import { NestFactory } from '@nestjs/core';
import { OperatorModule } from './operator.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OperatorModule,
    { transport: Transport.TCP, options: { port: 3002 } }
  );
  await app.listen();
}
bootstrap();
