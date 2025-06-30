import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFechaAdopcionInput } from './dto/create-fecha_adopcion.input';
import { UpdateFechaAdopcionInput } from './dto/update-fecha_adopcion.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FechaAdopcion } from './entities/fecha_adopcion.entity';

@Injectable()
export class FechaAdopcionService {
  constructor(
    @InjectRepository(FechaAdopcion)
    private readonly fechaAdopcionRepository: Repository<FechaAdopcion>,
  ) {}

  async create(createFechaAdopcionInput: CreateFechaAdopcionInput): Promise<FechaAdopcion> {
    const createFechaAdopcion = this.fechaAdopcionRepository.create(createFechaAdopcionInput);
    return this.fechaAdopcionRepository.save(createFechaAdopcion);
  }

  async findAll(): Promise<FechaAdopcion[]> {
    return await this.fechaAdopcionRepository.find();
  }

  async findOne(id: number): Promise<FechaAdopcion | null> {
    return await this.fechaAdopcionRepository.findOneBy({ id });
  }

  async update(id: number, updateFechaAdopcionInput: UpdateFechaAdopcionInput): Promise<FechaAdopcion> {
    const updateFechaAdopcion = await this.fechaAdopcionRepository.preload({
      ...updateFechaAdopcionInput,
      id: Number(id),
    });
    if (!updateFechaAdopcion) {
      throw new NotFoundException(`FechaAdopcion no encontrada`);
    }
    return this.fechaAdopcionRepository.save(updateFechaAdopcion);
  }

  async remove(id: number): Promise<FechaAdopcion> {
    const removedFechaAdopcion = await this.fechaAdopcionRepository.findOneBy({ id });
    if (!removedFechaAdopcion) {
      throw new NotFoundException(`FechaAdopcion no encontrada`);
    }
    return this.fechaAdopcionRepository.remove(removedFechaAdopcion);
  }
}