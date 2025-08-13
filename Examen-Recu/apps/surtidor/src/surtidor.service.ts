import { Injectable } from '@nestjs/common';
import { SurtidorService as DomainSurtidorService } from '../../../Domain/services/surtidor.service';
import { CreateSurtidorDto } from '../../../Domain/dto/create-surtidor.dto';
import { surtidor } from '../../../Domain/entities/surtidor.entity';

@Injectable()
export class SurtidorService {
  private surtidorService = new DomainSurtidorService();

  create(dto: CreateSurtidorDto): surtidor {
    return this.surtidorService.create(dto);
  }

  findAll(): surtidor[] {
    return this.surtidorService.findAll();
  }

  findOne(id: string): surtidor | null {
    return this.surtidorService.findOne(id);
  }

  update(id: string, dto: Partial<CreateSurtidorDto>): surtidor | null {
    return this.surtidorService.update(id, dto);
  }

  delete(id: string): boolean {
    return this.surtidorService.delete(id);
  }
}
