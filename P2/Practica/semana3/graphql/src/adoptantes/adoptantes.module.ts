import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdoptantesService } from './adoptantes.service';
import { AdoptantesResolver } from './adoptantes.resolver';
import { Adoptante } from './entities/adoptante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Adoptante])],
  providers: [AdoptantesService, AdoptantesResolver],
  exports: [AdoptantesService],
})
export class AdoptantesModule {}