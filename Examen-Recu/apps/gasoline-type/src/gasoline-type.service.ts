import { Injectable } from '@nestjs/common';
import { GasolineTypeService as DomainGasolineTypeService } from '../../../Domain/services/gasoline-type.service';
import { CreateGasolineTypeDto } from '../../../Domain/dto/create-gasoline-type.dto';
import { GasolineType } from '../../../Domain/entities/gasoline-type.entity';

@Injectable()
export class GasolineTypeService {
  private gasolineTypeService = new DomainGasolineTypeService();

  create(dto: CreateGasolineTypeDto): GasolineType {
    return this.gasolineTypeService.create(dto);
  }

  findAll(): GasolineType[] {
    return this.gasolineTypeService.findAll();
  }

  findOne(id: string): GasolineType | null {
    return this.gasolineTypeService.findOne(id);
  }

  update(id: string, dto: Partial<CreateGasolineTypeDto>): GasolineType | null {
    return this.gasolineTypeService.update(id, dto);
  }

  delete(id: string): boolean {
    return this.gasolineTypeService.delete(id);
  }
}
