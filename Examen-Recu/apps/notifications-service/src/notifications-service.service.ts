import { Injectable } from '@nestjs/common';
import { NotificationGateway } from './notification.gateway';

@Injectable()
export class NotificationsServiceService {
  constructor(private readonly notificationGateway: NotificationGateway) {}

  // Notificar actualización de tipo de gasolina
  notifyGasolineTypeUpdate(data: any) {
    this.notificationGateway.emitGasolineTypeUpdate(data);
  }

  // Notificar actualización de operador
  notifyOperatorUpdate(data: any) {
    this.notificationGateway.emitOperatorUpdate(data);
  }

  // Notificar actualización de surtidor
  notifySurtidorUpdate(data: any) {
    this.notificationGateway.emitSurtidorUpdate(data);
  }

  // Notificar actualización de venta
  notifySaleUpdate(data: any) {
    this.notificationGateway.emitSaleUpdate(data);
  }

  // Notificar cualquier operación CRUD
  notifyOperation(microservice: string, entity: string, operation: 'create' | 'update' | 'delete', data: any) {
    switch (operation) {
      case 'create':
        this.notificationGateway.emitEntityCreated(microservice, entity, data);
        break;
      case 'update':
        this.notificationGateway.emitEntityUpdated(microservice, entity, data);
        break;
      case 'delete':
        this.notificationGateway.emitEntityDeleted(microservice, entity, data);
        break;
    }
  }

  // Obtener estadísticas de conexiones
  getConnectionStats() {
    return this.notificationGateway.getConnectionStats();
  }
}
