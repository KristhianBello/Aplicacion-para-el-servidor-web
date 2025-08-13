import { Module } from '@nestjs/common';
import { NotificationGateway } from './notification.gateway';
import { NotificationsServiceController } from './notifications-service.controller';
import { NotificationsServiceService } from './notifications-service.service';

@Module({
  imports: [],
  controllers: [NotificationsServiceController],
  providers: [NotificationGateway, NotificationsServiceService],
  exports: [NotificationGateway, NotificationsServiceService],
})
export class NotificationsServiceModule {}
