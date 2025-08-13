import { Operator } from '../entities/operator.entity';
import { CreateOperatorDto } from '../dto/create-operator.dto';
import * as data from '../../data/data.json';

export class OperatorService {
  private operators: Operator[] = [...(data.operators || [])];

  create(dto: CreateOperatorDto): Operator {
    const nuevo: Operator = { id: Date.now().toString(), ...dto };
    this.operators.push(nuevo);
    return nuevo;
  }

  findAll(): Operator[] {
    return this.operators;
  }

  findOne(id: string): Operator | null {
    return this.operators.find(item => item.id === id) || null;
  }

  update(id: string, dto: Partial<CreateOperatorDto>): Operator | null {
    const index = this.operators.findIndex(item => item.id === id);
    if (index === -1) return null;
    
    this.operators[index] = { ...this.operators[index], ...dto };
    return this.operators[index];
  }

  delete(id: string): boolean {
    const index = this.operators.findIndex(item => item.id === id);
    if (index === -1) return false;
    
    this.operators.splice(index, 1);
    return true;
  }
}