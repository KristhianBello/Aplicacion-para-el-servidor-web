import { IsNumber, IsOptional, IsString, Min, IsBoolean } from "class-validator";

export class CreateMascotaDto {
    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    nombre: string; 

    @IsString() 
    raza: string;

    @IsNumber()
    @Min(2)
    edad: number;
    
    @IsOptional()
    @IsBoolean()
    status: boolean;
}