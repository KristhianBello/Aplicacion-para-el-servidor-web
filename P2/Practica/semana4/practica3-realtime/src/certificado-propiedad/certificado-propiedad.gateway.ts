import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { CertificadoPropiedadService } from './certificado-propiedad.service';
import { CreateCertificadoPropiedadDto } from './dto/create-certificado-propiedad.dto';
import { UpdateCertificadoPropiedadDto } from './dto/update-certificado-propiedad.dto';
import { Server } from 'socket.io';

@WebSocketGateway({cors: true})
export class CertificadoPropiedadGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;


  constructor(private readonly certificadoPropiedadService: CertificadoPropiedadService) {}
  handleConnection(client: any, ...args: any[]) {

    const token = client.handshake.headers.authentication as string;
    //validarToken(token);
    console.log('Token: ${token}');
  }
  handleDisconnect(client: any) {
    throw new Error('Method not implemented.');
  }

  @SubscribeMessage('createCertificadoPropiedad')
  create(@MessageBody() createCertificadoPropiedadDto: CreateCertificadoPropiedadDto) {

    const inserted = this.certificadoPropiedadService.create(createCertificadoPropiedadDto);
    this.wss.emit('newCertificado', this.findAll());
    return inserted;
  }

  @SubscribeMessage('findAllCertificadoPropiedad')
  findAll() {
    return this.certificadoPropiedadService.findAll();
  }

  @SubscribeMessage('findOneCertificadoPropiedad')
  findOne(@MessageBody() id: number) {
    return this.certificadoPropiedadService.findOne(id);
  }

  @SubscribeMessage('updateCertificadoPropiedad')
  update(@MessageBody() updateCertificadoPropiedadDto: UpdateCertificadoPropiedadDto) {
    return this.certificadoPropiedadService.update(updateCertificadoPropiedadDto.id, updateCertificadoPropiedadDto);
  }

  @SubscribeMessage('removeCertificadoPropiedad')
  remove(@MessageBody() id: number) {
    return this.certificadoPropiedadService.remove(id);
  }
}
