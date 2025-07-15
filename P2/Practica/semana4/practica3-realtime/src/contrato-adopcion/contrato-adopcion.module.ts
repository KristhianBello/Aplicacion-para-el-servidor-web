import { Module } from '@nestjs/common';
import { ContratoAdopcionService } from './contrato-adopcion.service';
import { ContratoAdopcionGateway } from './contrato-adopcion.gateway';

@Module({
  providers: [ContratoAdopcionGateway, ContratoAdopcionService],
})
export class ContratoAdopcionModule {}
