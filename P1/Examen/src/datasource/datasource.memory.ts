import { Defensa } from '../domain/entities/Defensa';
import { Estudiante } from '../domain/entities/Estudiante';
import { Tribunal } from '../domain/entities/Tribunal';
import { Aula } from '../domain/entities/Aula';
import { Horario } from '../domain/entities/Horario';


export const aulas: Aula[] = [
  new Aula(1, 'Aula 201', 30, 'Edificio Facultad de ingeniería'),
  new Aula(2, 'Aula 202', 25, 'Edificio Facultad de Ingeniería'),
];

export const horarios: Horario[] = [
  new Horario(1, 'Lunes', '08:00', '09:30'),
  new Horario(2, 'Martes', '10:00', '11:30'),
];

export const defensas: Defensa[] = [
  new Defensa(1, 'Intercines', '2025-06-15', 1, 1, 'programada'),
  new Defensa(2, 'Banco de alimentos', '2025-06-16', 2, 2, 'programada'),
];

export const estudiantes: Estudiante[] = [
  new Estudiante(1, 'Michael intriago', 'Ingeniería de Software', 'Michi@ejemplo.com', 1),
  new Estudiante(2, 'Kristhian Bello', 'Ingeniería de Software', 'Kristhian@ejemplo.com', 1),
];

export const tribunales: Tribunal[] = [
  new Tribunal(1, 'Ing. John Cevallos', 'presidente', 1),
  new Tribunal(2, 'Ing. Ricardo Aray', 'secretario', 1),
  new Tribunal(3, 'Ing. Israel Gomez', 'vocal', 1),
  new Tribunal(4, 'Dra. Mónica Cedeño', 'presidente', 2),
];
