import { Injectable } from '@nestjs/common';
import { CreateFechaAdopcionDto } from './dto/create-fecha_adopcion.dto';
import { UpdateFechaAdopcionDto } from './dto/update-fecha_adopcion.dto';
import { AdoptanteFecha } from './entities/fecha_adopcion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FechaAdopcionService {

  constructor(
      @InjectRepository(AdoptanteFecha)
      private usersRepository: Repository<AdoptanteFecha>,
     ) { 
      
    }

  create(createFechaAdopcionDto: CreateFechaAdopcionDto) {
    const AdoptanteFecha = this.usersRepository.create(createFechaAdopcionDto);
    return this.usersRepository.save(AdoptanteFecha);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateFechaAdopcionDto: UpdateFechaAdopcionDto) {
    const AdoptanteFecha = this.usersRepository.create(updateFechaAdopcionDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
