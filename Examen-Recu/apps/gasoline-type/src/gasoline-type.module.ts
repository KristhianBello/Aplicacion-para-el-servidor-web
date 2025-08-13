import { Module } from '@nestjs/common';
import { GasolineTypeController } from './gasoline-type.controller';
import { GasolineTypeService } from './gasoline-type.service';

@Module({
  imports: [],
  controllers: [GasolineTypeController],
  providers: [GasolineTypeService],
})
export class GasolineTypeModule {}
