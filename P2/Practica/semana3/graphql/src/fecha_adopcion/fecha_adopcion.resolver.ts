import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { FechaAdopcionService } from './fecha_adopcion.service';
import { FechaAdopcion } from './entities/fecha_adopcion.entity';
import { CreateFechaAdopcionInput } from './dto/create-fecha_adopcion.input';
import { UpdateFechaAdopcionInput } from './dto/update-fecha_adopcion.input';

@Resolver(() => FechaAdopcion)
export class FechaAdopcionResolver {
  constructor(private readonly fechaAdopcionService: FechaAdopcionService) {}

  @Mutation(() => FechaAdopcion)
  createFechaAdopcion(@Args('createFechaAdopcionInput') createFechaAdopcionInput: CreateFechaAdopcionInput) {
    return this.fechaAdopcionService.create(createFechaAdopcionInput);
  }

  @Query(() => [FechaAdopcion], { name: 'fechaAdopciones' })
  findAll() {
    return this.fechaAdopcionService.findAll();
  }

  @Query(() => FechaAdopcion, { name: 'fechaAdopcion' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.fechaAdopcionService.findOne(Number(id));
  }

  @Mutation(() => FechaAdopcion)
  updateFechaAdopcion(@Args('updateFechaAdopcionInput') updateFechaAdopcionInput: UpdateFechaAdopcionInput) {
    return this.fechaAdopcionService.update(Number(updateFechaAdopcionInput.id), updateFechaAdopcionInput);
  }

  @Mutation(() => FechaAdopcion)
  removeFechaAdopcion(@Args('id', { type: () => ID }) id: string) {
    return this.fechaAdopcionService.remove(Number(id));
  }
}