import { Injectable } from '@nestjs/common';
import { CreateContratoAdopcionDto } from './dto/create-contrato-adopcion.dto';
import { UpdateContratoAdopcionDto } from './dto/update-contrato-adopcion.dto';

const contratosAdopcion = [
  {
    contratoAdopcionId: 1,
    adopcionId: 1,
    contenido: 'Contrato de Adopción',
    terminosEspeciales: 'No se permite la venta del animal',
    fechaFirma: '2023-10-01',
  },
  {
    contratoAdopcionId: 2,
    adopcionId: 2,
    contenido: 'Contrato de Adopción',
    terminosEspeciales: 'El animal debe ser cuidado adecuadamente',
    fechaFirma: '2023-10-02',
  }
];

@Injectable()
export class ContratoAdopcionService {
 create(createContratoAdopcionDto: CreateContratoAdopcionDto) {
  contratosAdopcion.push(createContratoAdopcionDto);
  
  }

  findAll() {
    return contratosAdopcion;
  }

  findOne(id: number) {
    return `This action returns a #${id} contratoAdopcion`;
  }

  update(id: number, updateContratoAdopcionDto: UpdateContratoAdopcionDto) {
    return `This action updates a #${id} contratoAdopcion`;
  }

  remove(id: number) {
    return `This action removes a #${id} contratoAdopcion`;
  }
}
