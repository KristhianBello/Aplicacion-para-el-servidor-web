import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FechaAdopcionService } from './fecha_adopcion.service';
import { FechaAdopcionResolver } from './fecha_adopcion.resolver';
import { FechaAdopcion } from './entities/fecha_adopcion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FechaAdopcion])],
  providers: [FechaAdopcionService, FechaAdopcionResolver],
  exports: [FechaAdopcionService],
})
export class FechaAdopcionModule {}