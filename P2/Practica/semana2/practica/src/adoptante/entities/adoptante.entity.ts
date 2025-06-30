import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Adoptante {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    telefono: number;

    @Column()
    direccion: string;

    @Column()   
    email: string;
}
