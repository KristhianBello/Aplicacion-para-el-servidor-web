import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentacionMascotaDto } from './create-documentacion-mascota.dto';

export class UpdateDocumentacionMascotaDto extends PartialType(CreateDocumentacionMascotaDto) {
  id: number;
}
