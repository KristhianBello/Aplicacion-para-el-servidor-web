import { GasolineType } from '../entities/gasoline-type.entity';
import { CreateGasolineTypeDto } from '../dto/create-gasoline-type.dto';
import * as data from '../../data/data.json';

export class GasolineTypeService {
  private gasolineTypes: GasolineType[] = [...(data.gasolineTypes || [])];

  create(dto: CreateGasolineTypeDto): GasolineType {
    const nuevo: GasolineType = { id: Date.now().toString(), ...dto };
    this.gasolineTypes.push(nuevo);
    return nuevo;
  }

  findAll(): GasolineType[] {
    return this.gasolineTypes;
  }

  findOne(id: string): GasolineType | null {
    return this.gasolineTypes.find(item => item.id === id) || null;
  }

  update(id: string, dto: Partial<CreateGasolineTypeDto>): GasolineType | null {
    const index = this.gasolineTypes.findIndex(item => item.id === id);
    if (index === -1) return null;
    
    this.gasolineTypes[index] = { ...this.gasolineTypes[index], ...dto };
    return this.gasolineTypes[index];
  }

  delete(id: string): boolean {
    const index = this.gasolineTypes.findIndex(item => item.id === id);
    if (index === -1) return false;
    
    this.gasolineTypes.splice(index, 1);
    return true;
  }
}