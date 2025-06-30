import { Module } from '@nestjs/common';
import { AdoptanteService } from './adoptante.service';
import { AdoptanteController } from './adoptante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adoptante } from './entities/adoptante.entity';

@Module({
  controllers: [AdoptanteController],
  providers: [AdoptanteService],
  imports: [ 
    TypeOrmModule.forFeature([Adoptante]) 
  ],
  exports: [ TypeOrmModule ],
})
export class AdoptanteModule {}
