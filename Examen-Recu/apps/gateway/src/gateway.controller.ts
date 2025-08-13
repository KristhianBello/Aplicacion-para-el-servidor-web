import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { Observable } from 'rxjs';

@Controller('api')
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  // ========== GASOLINE TYPES CRUD ==========
  @Get('gasoline-types')
  getGasolineTypes(): Observable<any> {
    return this.gatewayService.getGasolineTypes();
  }

  @Get('gasoline-types/:id')
  getGasolineType(@Param('id') id: string): Observable<any> {
    return this.gatewayService.getGasolineType(id);
  }

  @Post('gasoline-types')
  createGasolineType(@Body() dto: any): Observable<any> {
    return this.gatewayService.createGasolineType(dto);
  }

  @Put('gasoline-types/:id')
  updateGasolineType(@Param('id') id: string, @Body() dto: any): Observable<any> {
    return this.gatewayService.updateGasolineType(id, dto);
  }

  @Delete('gasoline-types/:id')
  deleteGasolineType(@Param('id') id: string): Observable<any> {
    return this.gatewayService.deleteGasolineType(id);
  }

  // ========== OPERATORS CRUD ==========
  @Get('operators')
  getOperators(): Observable<any> {
    return this.gatewayService.getOperators();
  }

  @Get('operators/:id')
  getOperator(@Param('id') id: string): Observable<any> {
    return this.gatewayService.getOperator(id);
  }

  @Post('operators')
  createOperator(@Body() dto: any): Observable<any> {
    return this.gatewayService.createOperator(dto);
  }

  @Put('operators/:id')
  updateOperator(@Param('id') id: string, @Body() dto: any): Observable<any> {
    return this.gatewayService.updateOperator(id, dto);
  }

  @Delete('operators/:id')
  deleteOperator(@Param('id') id: string): Observable<any> {
    return this.gatewayService.deleteOperator(id);
  }

  // ========== SURTIDORES CRUD ==========
  @Get('surtidores')
  getSurtidores(): Observable<any> {
    return this.gatewayService.getSurtidores();
  }

  @Get('surtidores/:id')
  getSurtidor(@Param('id') id: string): Observable<any> {
    return this.gatewayService.getSurtidor(id);
  }

  @Post('surtidores')
  createSurtidor(@Body() dto: any): Observable<any> {
    return this.gatewayService.createSurtidor(dto);
  }

  @Put('surtidores/:id')
  updateSurtidor(@Param('id') id: string, @Body() dto: any): Observable<any> {
    return this.gatewayService.updateSurtidor(id, dto);
  }

  @Delete('surtidores/:id')
  deleteSurtidor(@Param('id') id: string): Observable<any> {
    return this.gatewayService.deleteSurtidor(id);
  }

  // ========== SALES CRUD ==========
  @Get('sales')
  getSales(): Observable<any> {
    return this.gatewayService.getSales();
  }

  @Get('sales/:id')
  getSale(@Param('id') id: string): Observable<any> {
    return this.gatewayService.getSale(id);
  }

  @Post('sales')
  createSale(@Body() dto: any): Observable<any> {
    return this.gatewayService.createSale(dto);
  }

  @Put('sales/:id')
  updateSale(@Param('id') id: string, @Body() dto: any): Observable<any> {
    return this.gatewayService.updateSale(id, dto);
  }

  @Delete('sales/:id')
  deleteSale(@Param('id') id: string): Observable<any> {
    return this.gatewayService.deleteSale(id);
  }

  // ========== HEALTH CHECK ==========
  @Get('health')
  getHealth() {
    return { 
      status: 'ok', 
      timestamp: new Date().toISOString(),
      gateway: '🚀 Gateway funcionando correctamente',
      microservices: {
        'gasoline-types': 'tcp://localhost:3001',
        'operators': 'tcp://localhost:3002', 
        'sales': 'tcp://localhost:3003',
        'surtidores': 'tcp://localhost:3004',
        'notifications': 'tcp://localhost:3006'
      },
      websocket: {
        'url': 'ws://localhost:3005/notifications',
        'events': ['notification', 'connected', 'subscribed']
      },
      availableEndpoints: {
        gasolineTypes: [
          'GET /api/gasoline-types',
          'GET /api/gasoline-types/:id',
          'POST /api/gasoline-types',
          'PUT /api/gasoline-types/:id',
          'DELETE /api/gasoline-types/:id'
        ],
        operators: [
          'GET /api/operators',
          'GET /api/operators/:id',
          'POST /api/operators',
          'PUT /api/operators/:id',
          'DELETE /api/operators/:id'
        ],
        surtidores: [
          'GET /api/surtidores',
          'GET /api/surtidores/:id',
          'POST /api/surtidores',
          'PUT /api/surtidores/:id',
          'DELETE /api/surtidores/:id'
        ],
        sales: [
          'GET /api/sales',
          'GET /api/sales/:id',
          'POST /api/sales',
          'PUT /api/sales/:id',
          'DELETE /api/sales/:id'
        ]
      }
    };
  }
}
