import { Module } from '@nestjs/common';
import { SurtidorController } from './surtidor.controller';
import { SurtidorService } from './surtidor.service';

@Module({
  imports: [],
  controllers: [SurtidorController],
  providers: [SurtidorService],
})
export class SurtidorModule {}
