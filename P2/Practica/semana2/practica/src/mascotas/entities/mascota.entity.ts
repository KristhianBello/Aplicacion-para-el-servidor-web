import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'; 

@Entity()
export class Mascota {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    raza: string;

    @Column()
    edad: number;
      
    @Column({default: true})
    status: Boolean;
}
