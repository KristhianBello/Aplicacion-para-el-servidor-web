import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MascotasService } from './mascotas.service';
import { MascotasResolver } from './mascotas.resolver';
import { Mascota } from './entities/mascota.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mascota])],
  providers: [MascotasService, MascotasResolver],
  exports: [MascotasService],
})
export class MascotasModule {}