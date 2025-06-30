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
    private usersRepository: Repository<Mascota>,
   ) { 
    
  }
  create(createMascotaDto: CreateMascotaDto) {
    const mascota = this.usersRepository.create(createMascotaDto);
    return this.usersRepository.save(mascota);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateMascotaDto: UpdateMascotaDto) {
    const mascota = this.usersRepository.create(updateMascotaDto);
    return this.usersRepository.update(id, mascota);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
