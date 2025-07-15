import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { ContratoAdopcionService } from './contrato-adopcion.service';
import { CreateContratoAdopcionDto } from './dto/create-contrato-adopcion.dto';
import { UpdateContratoAdopcionDto } from './dto/update-contrato-adopcion.dto';
import { Server } from 'socket.io';

@WebSocketGateway({cors : true})
export class ContratoAdopcionGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;


  constructor(private readonly contratoAdopcionService: ContratoAdopcionService) {}
  handleConnection(client: any, ...args: any[]) {
    const token = client.handshake.headers.authentication as string;
    //validarToken(token);
    console.log(`Token: ${token}`);
  }
  handleDisconnect(client: any) {
    throw new Error('Method not implemented.');
  }

  @SubscribeMessage('createContratoAdopcion')
  create(@MessageBody() createContratoAdopcionDto: CreateContratoAdopcionDto) {
    
    const inserted = this.contratoAdopcionService.create(createContratoAdopcionDto);
    this.wss.emit('newContrato', this.findAll());
    return inserted;
  }

  @SubscribeMessage('findAllContratoAdopcion')
  findAll() {
    return this.contratoAdopcionService.findAll();
  }

  @SubscribeMessage('findOneContratoAdopcion')
  findOne(@MessageBody() id: number) {
    return this.contratoAdopcionService.findOne(id);
  }

  @SubscribeMessage('updateContratoAdopcion')
  update(@MessageBody() updateContratoAdopcionDto: UpdateContratoAdopcionDto) {
    return this.contratoAdopcionService.update(updateContratoAdopcionDto.id, updateContratoAdopcionDto);
  }

  @SubscribeMessage('removeContratoAdopcion')
  remove(@MessageBody() id: number) {
    return this.contratoAdopcionService.remove(id);
  }
}