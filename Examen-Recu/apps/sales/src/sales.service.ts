import { Injectable } from '@nestjs/common';
import { SaleService } from '../../../Domain/services/sale.service';
import { CreateSaleDto } from '../../../Domain/dto/create-sale.dto';
import { Sale } from '../../../Domain/entities/sale.entity';

@Injectable()
export class SalesService {
  private saleService = new SaleService();

  create(dto: CreateSaleDto): Sale {
    return this.saleService.create(dto);
  }

  findAll(): Sale[] {
    return this.saleService.findAll();
  }

  findOne(id: string): Sale | null {
    return this.saleService.findOne(id);
  }

  update(id: string, dto: Partial<CreateSaleDto>): Sale | null {
    return this.saleService.update(id, dto);
  }

  delete(id: string): boolean {
    return this.saleService.delete(id);
  }
}
