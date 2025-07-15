import { Module } from '@nestjs/common';
import { ContratoAdopcionModule } from './contrato-adopcion/contrato-adopcion.module';
import { DocumentacionMascotaModule } from './documentacion-mascota/documentacion-mascota.module';
import { CertificadoPropiedadModule } from './certificado-propiedad/certificado-propiedad.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'database.db',
    entities: [__dirname + '//*.entity{.ts,.js}'],
    synchronize: true,
  }),
    
    ContratoAdopcionModule, 
    DocumentacionMascotaModule, 
    CertificadoPropiedadModule
  ],
  controllers: [],
  providers: [],

})

export class AppModule {}
