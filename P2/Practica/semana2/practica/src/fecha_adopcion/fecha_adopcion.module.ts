import { Module } from '@nestjs/common';
import { FechaAdopcionService } from '../fecha_adopcion/fecha_adopcion.service';
import { FechaAdopcionController } from '../fecha_adopcion/fecha_adopcion.controller';
import { AdoptanteFecha } from '../fecha_adopcion/entities/fecha_adopcion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  controllers: [FechaAdopcionController],
  providers: [FechaAdopcionService],
  imports: [
    TypeOrmModule.forFeature([AdoptanteFecha]),
  ],
  exports : [TypeOrmModule],
})
export class AdoptanteFechaModule {}
