import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(GatewayModule);
  
  // Configurar archivos estáticos para servir Socket.IO client
  app.useStaticAssets(join(__dirname, '..', '..', '..', 'node_modules', 'socket.io', 'client-dist'));
  app.useStaticAssets(join(__dirname, '..', '..', '..', 'public'));
  
  await app.listen(3000);
  console.log('🚀 API Gateway corriendo en http://localhost:3000');
}
bootstrap();