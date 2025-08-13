import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ReportsService } from './reports.service';
import { ReportsResolver } from './reports.resolver';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'OPERATOR_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3002,
        },
      },
      {
        name: 'GASOLINE_TYPE_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
      {
        name: 'SURTIDOR_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3004,
        },
      },
      {
        name: 'SALE_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3003,
        },
      },
    ]),
  ],
  providers: [ReportsResolver, ReportsService],
  exports: [ReportsService],
})
export class ReportsModule {}
