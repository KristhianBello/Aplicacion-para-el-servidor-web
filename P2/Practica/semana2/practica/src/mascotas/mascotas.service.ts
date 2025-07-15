import { Injectable } from '@nestjs/common';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { Repository } from 'typeorm';
import { Mascota } from './entities/mascota.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MascotasService {

  constructor(
    @InjectRepository(Mascota)
    private readonly mascotaRepository: Repository<Mascota>,
  ) {

  }

  create(createMascotaDto: CreateMascotaDto) {
    const mascota = this.mascotaRepository.create(createMascotaDto);
    return this.mascotaRepository.save(mascota);
  }

  findAll() {
    return this.mascotaRepository.find();
  }

  findOne(id: number) {
    return this.mascotaRepository.findOneBy({id});
  }

  update(id: number, updateMascotaDto: UpdateMascotaDto) {
    return `This action updates a #${id} mascota`;
  }

  remove(id: number) {
    return `This action removes a #${id} mascota`;
  }
}
