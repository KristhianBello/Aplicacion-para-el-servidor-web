import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'GASOLINE_TYPE_SERVICE', transport: Transport.TCP, options: { port: 3001 } },
      { name: 'OPERATOR_SERVICE', transport: Transport.TCP, options: { port: 3002 } },
      { name: 'SALES_SERVICE', transport: Transport.TCP, options: { port: 3003 } },
      { name: 'SURTIDOR_SERVICE', transport: Transport.TCP, options: { port: 3004 } },
      { name: 'NOTIFICATIONS_SERVICE', transport: Transport.TCP, options: { port: 3006 } },
    ])
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
