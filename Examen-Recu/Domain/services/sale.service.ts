import { Sale } from '../entities/sale.entity';
import { CreateSaleDto } from '../dto/create-sale.dto';
import { GasolineType } from '../entities/gasoline-type.entity';
import * as data from '../../data/data.json';

export class SaleService {
  private sales: Sale[] = [];
  private gasolineTypes: GasolineType[] = data.gasolineTypes;

  create(dto: CreateSaleDto): Sale {
    const gasolineType = this.gasolineTypes.find(gt => gt.id === dto.gasolineTypeId);
    const totalAmount = gasolineType ? gasolineType.price * dto.quantity : 0;
    
    const newSale: Sale = {
      id: Date.now().toString(),
      ...dto,
      totalAmount,
      date: new Date()
    };
    
    this.sales.push(newSale);
    return newSale;
  }

  findAll(): Sale[] {
    return this.sales;
  }

  findOne(id: string): Sale | null {
    return this.sales.find(item => item.id === id) || null;
  }

  update(id: string, dto: Partial<CreateSaleDto>): Sale | null {
    const index = this.sales.findIndex(item => item.id === id);
    if (index === -1) return null;

    // Recalcular total si cambia gasolineTypeId o quantity
    let totalAmount = this.sales[index].totalAmount;
    if (dto.gasolineTypeId || dto.quantity) {
      const gasolineTypeId = dto.gasolineTypeId || this.sales[index].gasolineTypeId;
      const quantity = dto.quantity || this.sales[index].quantity;
      const gasolineType = this.gasolineTypes.find(gt => gt.id === gasolineTypeId);
      totalAmount = gasolineType ? gasolineType.price * quantity : 0;
    }
    
    this.sales[index] = { 
      ...this.sales[index], 
      ...dto,
      totalAmount 
    };
    return this.sales[index];
  }

  delete(id: string): boolean {
    const index = this.sales.findIndex(item => item.id === id);
    if (index === -1) return false;
    
    this.sales.splice(index, 1);
    return true;
  }
}
