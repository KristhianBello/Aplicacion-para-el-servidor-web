import { Injectable } from '@nestjs/common';
import { OperatorService as DomainOperatorService } from '../../../Domain/services/operator.service';
import { CreateOperatorDto } from '../../../Domain/dto/create-operator.dto';
import { Operator } from '../../../Domain/entities/operator.entity';

@Injectable()
export class OperatorService {
  private operatorService = new DomainOperatorService();

  create(dto: CreateOperatorDto): Operator {
    return this.operatorService.create(dto);
  }

  findAll(): Operator[] {
    return this.operatorService.findAll();
  }

  findOne(id: string): Operator | null {
    return this.operatorService.findOne(id);
  }

  update(id: string, dto: Partial<CreateOperatorDto>): Operator | null {
    return this.operatorService.update(id, dto);
  }

  delete(id: string): boolean {
    return this.operatorService.delete(id);
  }
}
