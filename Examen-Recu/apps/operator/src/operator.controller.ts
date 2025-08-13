import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OperatorService } from './operator.service';
import { CreateOperatorDto } from '../../../Domain/dto/create-operator.dto';
import { Operator } from '../../../Domain/entities/operator.entity';

@Controller()
export class OperatorController {
  constructor(private readonly operatorService: OperatorService) {}

  @MessagePattern({ cmd: 'get_operators' })
  findAll(): Operator[] {
    return this.operatorService.findAll();
  }

  @MessagePattern({ cmd: 'get_operator' })
  findOne(@Payload() data: { id: string }): Operator | null {
    return this.operatorService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'create_operator' })
  create(@Payload() dto: CreateOperatorDto): Operator {
    return this.operatorService.create(dto);
  }

  @MessagePattern({ cmd: 'update_operator' })
  update(@Payload() data: { id: string; dto: Partial<CreateOperatorDto> }): Operator | null {
    return this.operatorService.update(data.id, data.dto);
  }

  @MessagePattern({ cmd: 'delete_operator' })
  delete(@Payload() data: { id: string }): { success: boolean } {
    const success = this.operatorService.delete(data.id);
    return { success };
  }
}
