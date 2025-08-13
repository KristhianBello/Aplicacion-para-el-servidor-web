import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { GasolineTypeService } from './gasoline-type.service';
import { CreateGasolineTypeDto } from '../../../Domain/dto/create-gasoline-type.dto';
import { GasolineType } from '../../../Domain/entities/gasoline-type.entity';

@Controller()
export class GasolineTypeController {
  constructor(private readonly gasolineTypeService: GasolineTypeService) {}

  @MessagePattern({ cmd: 'get_gasoline_types' })
  findAll(): GasolineType[] {
    return this.gasolineTypeService.findAll();
  }

  @MessagePattern({ cmd: 'get_gasoline_type' })
  findOne(@Payload() data: { id: string }): GasolineType | null {
    return this.gasolineTypeService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'create_gasoline_type' })
  create(@Payload() dto: CreateGasolineTypeDto): GasolineType {
    return this.gasolineTypeService.create(dto);
  }

  @MessagePattern({ cmd: 'update_gasoline_type' })
  update(@Payload() data: { id: string; dto: Partial<CreateGasolineTypeDto> }): GasolineType | null {
    return this.gasolineTypeService.update(data.id, data.dto);
  }

  @MessagePattern({ cmd: 'delete_gasoline_type' })
  delete(@Payload() data: { id: string }): { success: boolean } {
    const success = this.gasolineTypeService.delete(data.id);
    return { success };
  }
}
