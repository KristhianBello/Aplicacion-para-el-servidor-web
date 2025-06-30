import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMascotaInput } from './dto/create-mascota.input';
import { UpdateMascotaInput } from './dto/update-mascota.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mascota } from './entities/mascota.entity';

@Injectable()
export class MascotasService {
  constructor(
    @InjectRepository(Mascota)
    private readonly mascotasRepository: Repository<Mascota>,
  ) {}

  async create(createMascotaInput: CreateMascotaInput): Promise<Mascota> {
    const createMascota = this.mascotasRepository.create(createMascotaInput);
    return this.mascotasRepository.save(createMascota);
  }

  async findAll(): Promise<Mascota[]> {
    return await this.mascotasRepository.find();
  }

  async findOne(id: number): Promise<Mascota | null> {
    return await this.mascotasRepository.findOneBy({ id });
  }

  async update(id: number, updateMascotaInput: UpdateMascotaInput): Promise<Mascota> {
    const updateMascota = await this.mascotasRepository.preload(updateMascotaInput);
    if (!updateMascota) {
      throw new NotFoundException(`Mascota no encontrado`);
    }
    return this.mascotasRepository.save(updateMascota);
  }

  async remove(id: number): Promise<Mascota> {
    const removedMascota = await this.mascotasRepository.findOneBy({ id });
    if (!removedMascota) {
      throw new NotFoundException(`Mascota no encontrado`);
    }
    return this.mascotasRepository.remove(removedMascota);
  }
}