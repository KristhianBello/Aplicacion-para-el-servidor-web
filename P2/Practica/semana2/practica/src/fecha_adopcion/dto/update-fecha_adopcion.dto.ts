import { PartialType } from '@nestjs/mapped-types';
import { CreateFechaAdopcionDto } from './create-fecha_adopcion.dto';

export class UpdateFechaAdopcionDto extends PartialType(CreateFechaAdopcionDto) {}
