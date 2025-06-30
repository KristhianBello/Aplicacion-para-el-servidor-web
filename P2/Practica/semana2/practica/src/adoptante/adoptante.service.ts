import { Injectable } from '@nestjs/common';
import { CreateAdoptanteDto } from './dto/create-adoptante.dto';
import { UpdateAdoptanteDto } from './dto/update-adoptante.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Adoptante } from './entities/adoptante.entity';

@Injectable()
export class AdoptanteService {

  constructor(
      @InjectRepository(Adoptante)
      private usersRepository: Repository<Adoptante>,
     ) { 
      
    }
  create(createAdoptanteDto: CreateAdoptanteDto) {
    const adoptante = this.usersRepository.create(createAdoptanteDto);
    return this.usersRepository.save(adoptante);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateAdoptanteDto: UpdateAdoptanteDto) {
    const adoptante = this.usersRepository.create(updateAdoptanteDto);
    return this.usersRepository.update(id, adoptante);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
