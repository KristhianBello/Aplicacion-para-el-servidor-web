import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FechaAdopcionService } from './fecha_adopcion.service';
import { CreateFechaAdopcionDto } from './dto/create-fecha_adopcion.dto';
import { UpdateFechaAdopcionDto } from './dto/update-fecha_adopcion.dto';

@Controller('fecha-adopcion')
export class FechaAdopcionController {
  constructor(private readonly fechaAdopcionService: FechaAdopcionService) {}

  @Post()
  create(@Body() createFechaAdopcionDto: CreateFechaAdopcionDto) {
    return this.fechaAdopcionService.create(createFechaAdopcionDto);
  }

  @Get()
  findAll() {
    return this.fechaAdopcionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fechaAdopcionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFechaAdopcionDto: UpdateFechaAdopcionDto) {
    return this.fechaAdopcionService.update(+id, updateFechaAdopcionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fechaAdopcionService.remove(+id);
  }
}
