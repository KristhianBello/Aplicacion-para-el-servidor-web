import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("Clientes")
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    correo: string;
    @Column()
    telefono: number;
}
