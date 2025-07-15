import { Module } from '@nestjs/common';
import { CertificadoPropiedadService } from './certificado-propiedad.service';
import { CertificadoPropiedadGateway } from './certificado-propiedad.gateway';

@Module({
  providers: [CertificadoPropiedadGateway, CertificadoPropiedadService],
})
export class CertificadoPropiedadModule {}
