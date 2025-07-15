import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { DocumentacionMascotaService } from './documentacion-mascota.service';
import { CreateDocumentacionMascotaDto } from './dto/create-documentacion-mascota.dto';
import { UpdateDocumentacionMascotaDto } from './dto/update-documentacion-mascota.dto';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class DocumentacionMascotaGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;
  
  constructor(private readonly documentacionMascotaService: DocumentacionMascotaService) {}
  handleConnection(client: any, ...args: any[]) {
    const token = client.handshake.headers.authentication as string;
    //validarToken(token);
    console.log(`Token: ${token}`);
  }
  handleDisconnect(client: any) {
    throw new Error('Method not implemented.');
  }

  @SubscribeMessage('createDocumentacionMascota')
  create(@MessageBody() createDocumentacionMascotaDto: CreateDocumentacionMascotaDto) {
    
    const inserted = this.documentacionMascotaService.create(createDocumentacionMascotaDto);
    this.wss.emit('newDocumentacion', this.findAll());
    return inserted;
  }

  @SubscribeMessage('findAllDocumentacionMascota')
  findAll() {
    return this.documentacionMascotaService.findAll();
  }

  @SubscribeMessage('findOneDocumentacionMascota')
  findOne(@MessageBody() id: number) {
    return this.documentacionMascotaService.findOne(id);
  }

  @SubscribeMessage('updateDocumentacionMascota')
  update(@MessageBody() updateDocumentacionMascotaDto: UpdateDocumentacionMascotaDto) {
    return this.documentacionMascotaService.update(updateDocumentacionMascotaDto.id, updateDocumentacionMascotaDto);
  }

  @SubscribeMessage('removeDocumentacionMascota')
  remove(@MessageBody() id: number) {
    return this.documentacionMascotaService.remove(id);
  }
}
