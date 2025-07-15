import { Injectable } from '@nestjs/common';
import { CreateCertificadoPropiedadDto } from './dto/create-certificado-propiedad.dto';
import { UpdateCertificadoPropiedadDto } from './dto/update-certificado-propiedad.dto';

const certificadoPropiedad = [
  {
    certificadoId: 1,
    adopcionId: 1,
    numeroCertificado: 'CERT-001',
    fechaEmision: '2023-10-01',
    entidadEmisora: 'Entidad A',
    hashSeguridad: 'hash1234567890',
  },
  {
    certificadoId: 2,
    adopcionId: 2,
    numeroCertificado: 'CERT-002',
    fechaEmision: '2023-10-02',
    entidadEmisora: 'Entidad B',
    hashSeguridad: 'hash0987654321',
  },
 
]



@Injectable()
export class CertificadoPropiedadService {
  create(createCertificadoPropiedadDto: CreateCertificadoPropiedadDto) {
    certificadoPropiedad.push(createCertificadoPropiedadDto);
    return createCertificadoPropiedadDto
  }

  findAll() {
    return certificadoPropiedad;
  }

  findOne(id: number) {
    return `This action returns a #${id} certificadoPropiedad`;
  }

  update(id: number, updateCertificadoPropiedadDto: UpdateCertificadoPropiedadDto) {
    return `This action updates a #${id} certificadoPropiedad`;
  }

  remove(id: number) {
    return `This action removes a #${id} certificadoPropiedad`;
  }
}
