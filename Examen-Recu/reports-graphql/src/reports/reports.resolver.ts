import { Resolver, Query, Args } from '@nestjs/graphql';
import { ReportsService } from './reports.service';
import {
  OperatorReport,
  GasolineTypeReport,
  SurtidorReport,
  SalesReport,
  DashboardStats,
} from './dto/report.dto';
import { SalesFilterInput } from './dto/filter.input';
import { Observable } from 'rxjs';

@Resolver()
export class ReportsResolver {
  constructor(private readonly reportsService: ReportsService) {}

  @Query(() => DashboardStats, { name: 'dashboardStats' })
  getDashboardStats(): Observable<DashboardStats> {
    return this.reportsService.getDashboardStats();
  }

  @Query(() => [OperatorReport], { name: 'operatorReports' })
  getOperatorReports(): Observable<OperatorReport[]> {
    return this.reportsService.getOperatorReports();
  }

  @Query(() => [GasolineTypeReport], { name: 'gasolineTypeReports' })
  getGasolineTypeReports(): Observable<GasolineTypeReport[]> {
    return this.reportsService.getGasolineTypeReports();
  }

  @Query(() => [SurtidorReport], { name: 'surtidorReports' })
  getSurtidorReports(): Observable<SurtidorReport[]> {
    return this.reportsService.getSurtidorReports();
  }

  @Query(() => [SalesReport], { name: 'salesReports' })
  getSalesReports(
    @Args('filter', { type: () => SalesFilterInput, nullable: true })
    filter?: SalesFilterInput,
  ): Observable<SalesReport[]> {
    return this.reportsService.getSalesReports(filter);
  }
}
