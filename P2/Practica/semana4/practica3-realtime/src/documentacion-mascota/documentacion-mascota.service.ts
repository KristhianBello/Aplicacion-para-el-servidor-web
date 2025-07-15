import { Injectable } from '@nestjs/common';
import { CreateDocumentacionMascotaDto } from './dto/create-documentacion-mascota.dto';
import { UpdateDocumentacionMascotaDto } from './dto/update-documentacion-mascota.dto';

const documentacionMascota = [
  {
    documentoId: 1,
    mascotaId: 1,
    tipoDocumento: 'CERT-001',
    fechaEmision: '2023-10-01',
    fechaVencimiento: '2024-10-01',
    entidadEmisora: 'Entidad A',
    descripcion: 'Certificado de salud',
  },
];

@Injectable()
export class DocumentacionMascotaService {
  create(createDocumentacionMascotaDto: CreateDocumentacionMascotaDto) {
    documentacionMascota.push(createDocumentacionMascotaDto);
    return createDocumentacionMascotaDto;
  }

  findAll() {
    return documentacionMascota;
  }

  findOne(id: number) {
    return `This action returns a #${id} documentacionMascota`;
  }

  update(id: number, updateDocumentacionMascotaDto: UpdateDocumentacionMascotaDto) {
    return `This action updates a #${id} documentacionMascota`;
  }

  remove(id: number) {
    return `This action removes a #${id} documentacionMascota`;
  }
}
