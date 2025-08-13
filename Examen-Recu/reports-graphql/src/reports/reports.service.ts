import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable, forkJoin } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {
  OperatorReport,
  GasolineTypeReport,
  SurtidorReport,
  SalesReport,
  DashboardStats,
} from './dto/report.dto';
import { SalesFilterInput } from './dto/filter.input';

@Injectable()
export class ReportsService {
  constructor(
    @Inject('OPERATOR_SERVICE') private operatorClient: ClientProxy,
    @Inject('GASOLINE_TYPE_SERVICE') private gasolineClient: ClientProxy,
    @Inject('SURTIDOR_SERVICE') private surtidorClient: ClientProxy,
    @Inject('SALE_SERVICE') private saleClient: ClientProxy,
  ) {}

  getDashboardStats(): Observable<DashboardStats> {
    return forkJoin({
      operators: this.operatorClient.send({ cmd: 'get_all_operators' }, {}),
      gasolineTypes: this.gasolineClient.send({ cmd: 'get_all_gasoline_types' }, {}),
      surtidores: this.surtidorClient.send({ cmd: 'get_all_surtidores' }, {}),
      sales: this.saleClient.send({ cmd: 'get_all_sales' }, {}),
    }).pipe(
      map((data) => {
        const stats = new DashboardStats();
        stats.totalOperators = data.operators?.length || 0;
        stats.totalGasolineTypes = data.gasolineTypes?.length || 0;
        stats.totalSurtidores = data.surtidores?.length || 0;
        stats.totalSales = data.sales?.length || 0;
        
        const totalRevenue = data.sales?.reduce((sum, sale) => sum + sale.totalAmount, 0) || 0;
        stats.totalRevenue = totalRevenue;
        stats.averageSaleAmount = stats.totalSales > 0 ? totalRevenue / stats.totalSales : 0;
        
        return stats;
      }),
      catchError((error) => {
        console.error('Error fetching dashboard stats:', error);
        // Retorna stats vacías en caso de error
        const emptyStats = new DashboardStats();
        emptyStats.totalOperators = 0;
        emptyStats.totalGasolineTypes = 0;
        emptyStats.totalSurtidores = 0;
        emptyStats.totalSales = 0;
        emptyStats.totalRevenue = 0;
        emptyStats.averageSaleAmount = 0;
        return [emptyStats];
      })
    );
  }

  getOperatorReports(): Observable<OperatorReport[]> {
    return forkJoin({
      operators: this.operatorClient.send({ cmd: 'get_all_operators' }, {}),
      sales: this.saleClient.send({ cmd: 'get_all_sales' }, {}),
    }).pipe(
      map((data) => {
        const operators = data.operators || [];
        const sales = data.sales || [];
        
        return operators.map((operator) => {
          const operatorSales = sales.filter(sale => sale.operatorId === operator.id);
          const report = new OperatorReport();
          report.id = operator.id;
          report.name = operator.name;
          report.email = operator.email;
          report.totalSales = operatorSales.length;
          report.totalRevenue = operatorSales.reduce((sum, sale) => sum + sale.totalAmount, 0);
          return report;
        });
      }),
      catchError((error) => {
        console.error('Error fetching operator reports:', error);
        return [[]];
      })
    );
  }

  getGasolineTypeReports(): Observable<GasolineTypeReport[]> {
    return forkJoin({
      gasolineTypes: this.gasolineClient.send({ cmd: 'get_all_gasoline_types' }, {}),
      sales: this.saleClient.send({ cmd: 'get_all_sales' }, {}),
    }).pipe(
      map((data) => {
        const gasolineTypes = data.gasolineTypes || [];
        const sales = data.sales || [];
        
        return gasolineTypes.map((gasType) => {
          const typeSales = sales.filter(sale => sale.gasolineTypeId === gasType.id);
          const report = new GasolineTypeReport();
          report.id = gasType.id;
          report.name = gasType.name;
          report.price = gasType.price;
          report.totalSales = typeSales.length;
          report.totalVolume = typeSales.reduce((sum, sale) => sum + sale.quantity, 0);
          report.totalRevenue = typeSales.reduce((sum, sale) => sum + sale.totalAmount, 0);
          return report;
        });
      }),
      catchError((error) => {
        console.error('Error fetching gasoline type reports:', error);
        return [[]];
      })
    );
  }

  getSurtidorReports(): Observable<SurtidorReport[]> {
    return forkJoin({
      surtidores: this.surtidorClient.send({ cmd: 'get_all_surtidores' }, {}),
      gasolineTypes: this.gasolineClient.send({ cmd: 'get_all_gasoline_types' }, {}),
      sales: this.saleClient.send({ cmd: 'get_all_sales' }, {}),
    }).pipe(
      map((data) => {
        const surtidores = data.surtidores || [];
        const gasolineTypes = data.gasolineTypes || [];
        const sales = data.sales || [];
        
        return surtidores.map((surtidor) => {
          const surtidorSales = sales.filter(sale => sale.surtidorId === surtidor.id);
          const gasolineType = gasolineTypes.find(gt => gt.id === surtidor.gasolineTypeId);
          
          const report = new SurtidorReport();
          report.id = surtidor.id;
          report.location = surtidor.location;
          report.gasolineTypeName = gasolineType?.name || 'Unknown';
          report.totalSales = surtidorSales.length;
          report.totalVolume = surtidorSales.reduce((sum, sale) => sum + sale.quantity, 0);
          report.totalRevenue = surtidorSales.reduce((sum, sale) => sum + sale.totalAmount, 0);
          return report;
        });
      }),
      catchError((error) => {
        console.error('Error fetching surtidor reports:', error);
        return [[]];
      })
    );
  }

  getSalesReports(filter?: SalesFilterInput): Observable<SalesReport[]> {
    return forkJoin({
      sales: this.saleClient.send({ cmd: 'get_all_sales' }, {}),
      operators: this.operatorClient.send({ cmd: 'get_all_operators' }, {}),
      surtidores: this.surtidorClient.send({ cmd: 'get_all_surtidores' }, {}),
      gasolineTypes: this.gasolineClient.send({ cmd: 'get_all_gasoline_types' }, {}),
    }).pipe(
      map((data) => {
        let sales = data.sales || [];
        const operators = data.operators || [];
        const surtidores = data.surtidores || [];
        const gasolineTypes = data.gasolineTypes || [];

        // Aplicar filtros si se proporcionan
        if (filter) {
          if (filter.operatorId) {
            sales = sales.filter(sale => sale.operatorId === filter.operatorId);
          }
          if (filter.surtidorId) {
            sales = sales.filter(sale => sale.surtidorId === filter.surtidorId);
          }
          if (filter.gasolineTypeId) {
            sales = sales.filter(sale => sale.gasolineTypeId === filter.gasolineTypeId);
          }
          if (filter.minAmount !== undefined) {
            sales = sales.filter(sale => sale.totalAmount >= filter.minAmount!);
          }
          if (filter.maxAmount !== undefined) {
            sales = sales.filter(sale => sale.totalAmount <= filter.maxAmount!);
          }
          if (filter.dateRange && (filter.dateRange.startDate || filter.dateRange.endDate)) {
            sales = sales.filter(sale => {
              const saleDate = new Date(sale.date);
              if (filter.dateRange!.startDate && saleDate < new Date(filter.dateRange!.startDate)) {
                return false;
              }
              if (filter.dateRange!.endDate && saleDate > new Date(filter.dateRange!.endDate)) {
                return false;
              }
              return true;
            });
          }
        }

        return sales.map((sale) => {
          const operator = operators.find(op => op.id === sale.operatorId);
          const surtidor = surtidores.find(s => s.id === sale.surtidorId);
          const gasolineType = gasolineTypes.find(gt => gt.id === sale.gasolineTypeId);
          
          const report = new SalesReport();
          report.id = sale.id;
          report.operatorName = operator?.name || 'Unknown';
          report.surtidorLocation = surtidor?.location || 'Unknown';
          report.gasolineTypeName = gasolineType?.name || 'Unknown';
          report.quantity = sale.quantity;
          report.totalAmount = sale.totalAmount;
          report.date = sale.date;
          return report;
        });
      }),
      catchError((error) => {
        console.error('Error fetching sales reports:', error);
        return [[]];
      })
    );
  }
}
