import { PartialType } from '@nestjs/mapped-types';
import { CreateCertificadoPropiedadDto } from './create-certificado-propiedad.dto';

export class UpdateCertificadoPropiedadDto extends PartialType(CreateCertificadoPropiedadDto) {
  id: number;
}
