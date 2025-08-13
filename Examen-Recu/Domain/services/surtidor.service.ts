import { surtidor } from '../entities/surtidor.entity';
import { CreateSurtidorDto } from '../dto/create-surtidor.dto';
import * as data from '../../data/data.json';

export class SurtidorService {
  private surtidores: surtidor[] = [...(data.surtidores || [])];

  create(dto: CreateSurtidorDto): surtidor {
    const nuevo: surtidor = { id: Date.now().toString(), ...dto };
    this.surtidores.push(nuevo);
    return nuevo;
  }

  findAll(): surtidor[] {
    return this.surtidores;
  }

  findOne(id: string): surtidor | null {
    return this.surtidores.find(item => item.id === id) || null;
  }

  update(id: string, dto: Partial<CreateSurtidorDto>): surtidor | null {
    const index = this.surtidores.findIndex(item => item.id === id);
    if (index === -1) return null;
    
    this.surtidores[index] = { ...this.surtidores[index], ...dto };
    return this.surtidores[index];
  }

  delete(id: string): boolean {
    const index = this.surtidores.findIndex(item => item.id === id);
    if (index === -1) return false;
    
    this.surtidores.splice(index, 1);
    return true;
  }
}