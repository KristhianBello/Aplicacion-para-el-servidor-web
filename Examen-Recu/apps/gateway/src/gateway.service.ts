import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class GatewayService {
  constructor(
    @Inject('GASOLINE_TYPE_SERVICE') private gasolineTypeClient: ClientProxy,
    @Inject('OPERATOR_SERVICE') private operatorClient: ClientProxy,
    @Inject('SALES_SERVICE') private salesClient: ClientProxy,
    @Inject('SURTIDOR_SERVICE') private surtidorClient: ClientProxy,
    @Inject('NOTIFICATIONS_SERVICE') private notificationsClient: ClientProxy,
  ) {}

  // Método para enviar notificaciones
  private sendNotification(microservice: string, entity: string, operation: 'create' | 'update' | 'delete', data: any) {
    this.notificationsClient.emit({ cmd: 'notify_update' }, {
      microservice,
      entity,
      operation,
      data
    });
  }

  // Gasoline Types CRUD
  getGasolineTypes(): Observable<any> {
    return this.gasolineTypeClient.send({ cmd: 'get_gasoline_types' }, {});
  }

  getGasolineType(id: string): Observable<any> {
    return this.gasolineTypeClient.send({ cmd: 'get_gasoline_type' }, { id });
  }

  createGasolineType(dto: any): Observable<any> {
    return this.gasolineTypeClient.send({ cmd: 'create_gasoline_type' }, dto).pipe(
      tap(result => this.sendNotification('gasoline-type-service', 'GasolineType', 'create', result))
    );
  }

  updateGasolineType(id: string, dto: any): Observable<any> {
    return this.gasolineTypeClient.send({ cmd: 'update_gasoline_type' }, { id, dto }).pipe(
      tap(result => {
        if (result) {
          this.sendNotification('gasoline-type-service', 'GasolineType', 'update', result);
        }
      })
    );
  }

  deleteGasolineType(id: string): Observable<any> {
    return this.gasolineTypeClient.send({ cmd: 'delete_gasoline_type' }, { id }).pipe(
      tap(result => {
        if (result?.success) {
          this.sendNotification('gasoline-type-service', 'GasolineType', 'delete', { id });
        }
      })
    );
  }

  // Operators CRUD
  getOperators(): Observable<any> {
    return this.operatorClient.send({ cmd: 'get_operators' }, {});
  }

  getOperator(id: string): Observable<any> {
    return this.operatorClient.send({ cmd: 'get_operator' }, { id });
  }

  createOperator(dto: any): Observable<any> {
    return this.operatorClient.send({ cmd: 'create_operator' }, dto).pipe(
      tap(result => this.sendNotification('operator-service', 'Operator', 'create', result))
    );
  }

  updateOperator(id: string, dto: any): Observable<any> {
    return this.operatorClient.send({ cmd: 'update_operator' }, { id, dto }).pipe(
      tap(result => {
        if (result) {
          this.sendNotification('operator-service', 'Operator', 'update', result);
        }
      })
    );
  }

  deleteOperator(id: string): Observable<any> {
    return this.operatorClient.send({ cmd: 'delete_operator' }, { id }).pipe(
      tap(result => {
        if (result?.success) {
          this.sendNotification('operator-service', 'Operator', 'delete', { id });
        }
      })
    );
  }

  // Surtidores CRUD
  getSurtidores(): Observable<any> {
    return this.surtidorClient.send({ cmd: 'get_surtidores' }, {});
  }

  getSurtidor(id: string): Observable<any> {
    return this.surtidorClient.send({ cmd: 'get_surtidor' }, { id });
  }

  createSurtidor(dto: any): Observable<any> {
    return this.surtidorClient.send({ cmd: 'create_surtidor' }, dto).pipe(
      tap(result => this.sendNotification('surtidor-service', 'Surtidor', 'create', result))
    );
  }

  updateSurtidor(id: string, dto: any): Observable<any> {
    return this.surtidorClient.send({ cmd: 'update_surtidor' }, { id, dto }).pipe(
      tap(result => {
        if (result) {
          this.sendNotification('surtidor-service', 'Surtidor', 'update', result);
        }
      })
    );
  }

  deleteSurtidor(id: string): Observable<any> {
    return this.surtidorClient.send({ cmd: 'delete_surtidor' }, { id }).pipe(
      tap(result => {
        if (result?.success) {
          this.sendNotification('surtidor-service', 'Surtidor', 'delete', { id });
        }
      })
    );
  }

  // Sales CRUD
  getSales(): Observable<any> {
    return this.salesClient.send({ cmd: 'get_sales' }, {});
  }

  getSale(id: string): Observable<any> {
    return this.salesClient.send({ cmd: 'get_sale' }, { id });
  }

  createSale(dto: any): Observable<any> {
    return this.salesClient.send({ cmd: 'create_sale' }, dto).pipe(
      tap(result => this.sendNotification('sales-service', 'Sale', 'create', result))
    );
  }

  updateSale(id: string, dto: any): Observable<any> {
    return this.salesClient.send({ cmd: 'update_sale' }, { id, dto }).pipe(
      tap(result => {
        if (result) {
          this.sendNotification('sales-service', 'Sale', 'update', result);
        }
      })
    );
  }

  deleteSale(id: string): Observable<any> {
    return this.salesClient.send({ cmd: 'delete_sale' }, { id }).pipe(
      tap(result => {
        if (result?.success) {
          this.sendNotification('sales-service', 'Sale', 'delete', { id });
        }
      })
    );
  }
}
