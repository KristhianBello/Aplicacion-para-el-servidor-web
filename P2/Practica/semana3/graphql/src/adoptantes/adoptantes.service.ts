import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdoptanteInput } from './dto/create-adoptante.input';
import { UpdateAdoptanteInput } from './dto/update-adoptante.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Adoptante } from './entities/adoptante.entity';

@Injectable()
export class AdoptantesService {
  constructor(
    @InjectRepository(Adoptante)
    private readonly adoptantesRepository: Repository<Adoptante>,
  ) {}

  async create(createAdoptanteInput: CreateAdoptanteInput): Promise<Adoptante> {
    const createAdoptante = this.adoptantesRepository.create(createAdoptanteInput);
    return this.adoptantesRepository.save(createAdoptante);
  }

  async findAll(): Promise<Adoptante[]> {
    return await this.adoptantesRepository.find();
  }

  async findOne(id: number): Promise<Adoptante | null> {
    return await this.adoptantesRepository.findOneBy({ id });
  }

  async update(id: number, updateAdoptanteInput: UpdateAdoptanteInput): Promise<Adoptante> {
    const updateAdoptante = await this.adoptantesRepository.preload({
      ...updateAdoptanteInput,
      id: Number(id),
    });
    if (!updateAdoptante) {
      throw new NotFoundException(`Adoptante no encontrado`);
    }
    return this.adoptantesRepository.save(updateAdoptante);
  }

  async remove(id: number): Promise<Adoptante> {
    const removedAdoptante = await this.adoptantesRepository.findOneBy({ id });
    if (!removedAdoptante) {
      throw new NotFoundException(`Adoptante no encontrado`);
    }
    return this.adoptantesRepository.remove(removedAdoptante);
  }
}