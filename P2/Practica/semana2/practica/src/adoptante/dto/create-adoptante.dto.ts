import { IsNumber, IsOptional, IsString } from "class-validator";


export class CreateAdoptanteDto {
    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    nombre: string;

    @IsNumber()
    telefono: number;

    @IsString()
    direccion: string;

    @IsString()
    email: string;
}
