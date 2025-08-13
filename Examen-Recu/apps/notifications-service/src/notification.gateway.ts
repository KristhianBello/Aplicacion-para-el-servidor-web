import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

export interface NotificationPayload {
  microservice: string;
  entity: string;
  operation: 'create' | 'update' | 'delete';
  data: any;
  timestamp: string;
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: '/notifications',
})
export class NotificationGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private connectedClients: Map<string, Socket> = new Map();

  handleConnection(client: Socket) {
    console.log(`🟢 Cliente conectado: ${client.id}`);
    this.connectedClients.set(client.id, client);
    
    // Enviar mensaje de bienvenida
    client.emit('connected', {
      message: 'Conectado al servicio de notificaciones',
      clientId: client.id,
      timestamp: new Date().toISOString()
    });
  }

  handleDisconnect(client: Socket) {
    console.log(`🔴 Cliente desconectado: ${client.id}`);
    this.connectedClients.delete(client.id);
  }

  @SubscribeMessage('subscribe')
  handleSubscribe(@MessageBody() data: { microservice?: string }, client: Socket) {
    console.log(`📧 Cliente ${client.id} suscrito a: ${data.microservice || 'todos los servicios'}`);
    client.emit('subscribed', {
      message: `Suscrito a ${data.microservice || 'todos los servicios'}`,
      timestamp: new Date().toISOString()
    });
  }

  // Método genérico para emitir notificaciones
  emitNotification(payload: NotificationPayload) {
    console.log(`📢 Enviando notificación:`, payload);
    this.server.emit('notification', payload);
  }

  // Métodos específicos para cada operación
  emitEntityCreated(microservice: string, entity: string, data: any) {
    this.emitNotification({
      microservice,
      entity,
      operation: 'create',
      data,
      timestamp: new Date().toISOString()
    });
  }

  emitEntityUpdated(microservice: string, entity: string, data: any) {
    this.emitNotification({
      microservice,
      entity,
      operation: 'update',
      data,
      timestamp: new Date().toISOString()
    });
  }

  emitEntityDeleted(microservice: string, entity: string, data: any) {
    this.emitNotification({
      microservice,
      entity,
      operation: 'delete',
      data,
      timestamp: new Date().toISOString()
    });
  }

  // Métodos específicos por microservicio
  emitGasolineTypeUpdate(data: any) {
    this.emitEntityUpdated('gasoline-type-service', 'GasolineType', data);
  }

  emitOperatorUpdate(data: any) {
    this.emitEntityUpdated('operator-service', 'Operator', data);
  }

  emitSurtidorUpdate(data: any) {
    this.emitEntityUpdated('surtidor-service', 'Surtidor', data);
  }

  emitSaleUpdate(data: any) {
    this.emitEntityUpdated('sales-service', 'Sale', data);
  }

  // Obtener estadísticas de conexiones
  getConnectionStats() {
    return {
      totalConnections: this.connectedClients.size,
      connectedClients: Array.from(this.connectedClients.keys())
    };
  }
}
