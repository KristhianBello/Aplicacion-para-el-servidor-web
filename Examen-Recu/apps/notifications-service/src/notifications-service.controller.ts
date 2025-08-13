import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { NotificationsServiceService } from './notifications-service.service';

export interface NotificationRequest {
  microservice: string;
  entity: string;
  operation: 'create' | 'update' | 'delete';
  data: any;
}

@Controller()
export class NotificationsServiceController {
  constructor(private readonly notificationsServiceService: NotificationsServiceService) {}

  @Get()
  getStatus() {
    return {
      service: 'Notifications Service',
      status: 'running',
      websocket: 'ws://localhost:3005/notifications',
      timestamp: new Date().toISOString()
    };
  }

  @Get('stats')
  getConnectionStats() {
    return this.notificationsServiceService.getConnectionStats();
  }

  @Post('notify')
  sendNotification(@Body() request: NotificationRequest) {
    this.notificationsServiceService.notifyOperation(
      request.microservice,
      request.entity,
      request.operation,
      request.data
    );
    return { success: true, message: 'Notification sent' };
  }

  // Message patterns para comunicación entre microservicios
  @MessagePattern({ cmd: 'notify_update' })
  handleUpdateNotification(@Payload() data: NotificationRequest) {
    this.notificationsServiceService.notifyOperation(
      data.microservice,
      data.entity,
      data.operation,
      data.data
    );
    return { success: true };
  }

  @MessagePattern({ cmd: 'notify_gasoline_type_update' })
  handleGasolineTypeUpdate(@Payload() data: any) {
    this.notificationsServiceService.notifyGasolineTypeUpdate(data);
    return { success: true };
  }

  @MessagePattern({ cmd: 'notify_operator_update' })
  handleOperatorUpdate(@Payload() data: any) {
    this.notificationsServiceService.notifyOperatorUpdate(data);
    return { success: true };
  }

  @MessagePattern({ cmd: 'notify_surtidor_update' })
  handleSurtidorUpdate(@Payload() data: any) {
    this.notificationsServiceService.notifySurtidorUpdate(data);
    return { success: true };
  }

  @MessagePattern({ cmd: 'notify_sale_update' })
  handleSaleUpdate(@Payload() data: any) {
    this.notificationsServiceService.notifySaleUpdate(data);
    return { success: true };
  }
}
