import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SalesService } from './sales.service';
import { CreateSaleDto } from '../../../Domain/dto/create-sale.dto';
import { Sale } from '../../../Domain/entities/sale.entity';

@Controller()
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @MessagePattern({ cmd: 'get_sales' })
  findAll(): Sale[] {
    return this.salesService.findAll();
  }

  @MessagePattern({ cmd: 'get_sale' })
  findOne(@Payload() data: { id: string }): Sale | null {
    return this.salesService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'create_sale' })
  create(@Payload() dto: CreateSaleDto): Sale {
    return this.salesService.create(dto);
  }

  @MessagePattern({ cmd: 'update_sale' })
  update(@Payload() data: { id: string; dto: Partial<CreateSaleDto> }): Sale | null {
    return this.salesService.update(data.id, data.dto);
  }

  @MessagePattern({ cmd: 'delete_sale' })
  delete(@Payload() data: { id: string }): { success: boolean } {
    const success = this.salesService.delete(data.id);
    return { success };
  }
}
