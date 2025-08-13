import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { NotificationsServiceModule } from './notifications-service.module';

async function bootstrap() {
  // Crear aplicación HTTP + WebSocket
  const app = await NestFactory.create(NotificationsServiceModule);
  
  // Agregar microservicio TCP para comunicación entre servicios
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { port: 3006 }
  });

  // Iniciar microservicio
  await app.startAllMicroservices();
  
  // Iniciar servidor HTTP + WebSocket
  await app.listen(3005);
  
  console.log('🚀 Notifications Service corriendo en:');
  console.log('📡 HTTP/REST: http://localhost:3005');
  console.log('🔌 WebSocket: ws://localhost:3005/notifications');
  console.log('📨 TCP Microservice: localhost:3006');
}
bootstrap();
