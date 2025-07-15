import { PartialType } from '@nestjs/mapped-types';
import { CreateContratoAdopcionDto } from './create-contrato-adopcion.dto';

export class UpdateContratoAdopcionDto extends PartialType(CreateContratoAdopcionDto) {
  id: number;
}
