import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS
  app.enableCors({
    origin: true,
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3006);
  console.log('🚀 Reports GraphQL Service running on http://localhost:3006/graphql');
  console.log('🎮 GraphQL Playground available at http://localhost:3006/graphql');
}
bootstrap();
