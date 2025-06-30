import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { MascotasModule } from './mascotas/mascotas.module';
import { AdoptanteModule } from './adoptante/adoptante.module';
import { AdoptanteFechaModule } from './fecha_adopcion/fecha_adopcion.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],      synchronize: true
    }),
    MascotasModule,
    AdoptanteModule,
    AdoptanteFechaModule,
  ],
})
export class AppModule {}