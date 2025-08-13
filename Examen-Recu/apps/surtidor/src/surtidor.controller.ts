import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SurtidorService } from './surtidor.service';
import { CreateSurtidorDto } from '../../../Domain/dto/create-surtidor.dto';
import { surtidor } from '../../../Domain/entities/surtidor.entity';

@Controller()
export class SurtidorController {
  constructor(private readonly surtidorService: SurtidorService) {}

  @MessagePattern({ cmd: 'get_surtidores' })
  findAll(): surtidor[] {
    return this.surtidorService.findAll();
  }

  @MessagePattern({ cmd: 'get_surtidor' })
  findOne(@Payload() data: { id: string }): surtidor | null {
    return this.surtidorService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'create_surtidor' })
  create(@Payload() dto: CreateSurtidorDto): surtidor {
    return this.surtidorService.create(dto);
  }

  @MessagePattern({ cmd: 'update_surtidor' })
  update(@Payload() data: { id: string; dto: Partial<CreateSurtidorDto> }): surtidor | null {
    return this.surtidorService.update(data.id, data.dto);
  }

  @MessagePattern({ cmd: 'delete_surtidor' })
  delete(@Payload() data: { id: string }): { success: boolean } {
    const success = this.surtidorService.delete(data.id);
    return { success };
  }
}
