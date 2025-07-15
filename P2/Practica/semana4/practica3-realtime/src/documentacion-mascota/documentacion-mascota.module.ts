import { Module } from '@nestjs/common';
import { DocumentacionMascotaService } from './documentacion-mascota.service';
import { DocumentacionMascotaGateway } from './documentacion-mascota.gateway';

@Module({
  providers: [DocumentacionMascotaGateway, DocumentacionMascotaService],
})
export class DocumentacionMascotaModule {}
