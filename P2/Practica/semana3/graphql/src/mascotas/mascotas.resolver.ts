import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MascotasService } from './mascotas.service';
import { Mascota } from './entities/mascota.entity';
import { CreateMascotaInput } from './dto/create-mascota.input';
import { UpdateMascotaInput } from './dto/update-mascota.input';

@Resolver(() => Mascota)
export class MascotasResolver {
  constructor(private readonly mascotasService: MascotasService) {}

  @Mutation(() => Mascota)
  createMascota(@Args('createMascotaInput') createMascotaInput: CreateMascotaInput) {
    return this.mascotasService.create(createMascotaInput);
  }

  @Query(() => [Mascota], { name: 'mascotas' })
  findAll() {
    return this.mascotasService.findAll();
  }

  @Query(() => Mascota, { name: 'mascota' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mascotasService.findOne(id);
  }

  @Mutation(() => Mascota)
  updateMascota(@Args('updateMascotaInput') updateMascotaInput: UpdateMascotaInput) {
    return this.mascotasService.update(updateMascotaInput.id, updateMascotaInput);
  }

  @Mutation(() => Mascota)
  removeMascota(@Args('id', { type: () => Int }) id: number) {
    return this.mascotasService.remove(id);
  }
}
