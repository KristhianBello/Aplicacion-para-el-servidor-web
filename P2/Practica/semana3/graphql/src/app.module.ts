import { Module } from '@nestjs/common';
import { MascotasModule } from './mascotas/mascotas.module';
import { AdoptantesModule } from './adoptantes/adoptantes.module';
import { FechaAdopcionModule } from './fecha_adopcion/fecha_adopcion.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
     GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [
        ApolloServerPluginLandingPageLocalDefault()
      ],
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    MascotasModule,
    AdoptantesModule,
    FechaAdopcionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
