import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdoptantesService } from './adoptantes.service';
import { Adoptante } from './entities/adoptante.entity';
import { CreateAdoptanteInput } from './dto/create-adoptante.input';
import { UpdateAdoptanteInput } from './dto/update-adoptante.input';

@Resolver(() => Adoptante)
export class AdoptantesResolver {
  constructor(private readonly adoptantesService: AdoptantesService) {}

  @Mutation(() => Adoptante)
  createAdoptante(@Args('createAdoptanteInput') createAdoptanteInput: CreateAdoptanteInput) {
    return this.adoptantesService.create(createAdoptanteInput);
  }

  @Query(() => [Adoptante], { name: 'adoptantes' })
  findAll() {
    return this.adoptantesService.findAll();
  }

  @Query(() => Adoptante, { name: 'adoptante' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.adoptantesService.findOne(id);
  }

  @Mutation(() => Adoptante)
  updateAdoptante(@Args('updateAdoptanteInput') updateAdoptanteInput: UpdateAdoptanteInput) {
    return this.adoptantesService.update(Number(updateAdoptanteInput.id), updateAdoptanteInput);
  }

  @Mutation(() => Adoptante)
  removeAdoptante(@Args('id', { type: () => Int }) id: number) {
    return this.adoptantesService.remove(id);
  }
}