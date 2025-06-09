🧩 Entidades del Dominio
A continuación, se Indicará las entidades principales que conforman el núcleo del sistema. Estas entidades representan los elementos clave involucrados en la organización y ejecución de defensas de trabajos de titulación:

📘 Defensa
Representa un evento formal donde uno o varios estudiantes sustentan su trabajo de titulación ante un tribunal académico.
Es la entidad central del sistema, ya que todos los demás elementos (aulas, horarios, estudiantes, tribunales) se relacionan con la planificación o realización de una defensa.

🎓 Estudiante
Es Individuo que presenta un trabajo de titulación en una defensa asignada.
Sin estudiantes no existirían defensas. Cada defensa está asociada a uno o más estudiantes que deben ser gestionados en términos de participación, identificación y seguimiento.

🧑‍⚖️ Tribunal
Es el conjunto de docentes responsables de evaluar la defensa. Cada miembro puede tener un rol específico (presidente, secretario, vocal).
Su inclusión es clave para validar y calificar la defensa. La asignación de tribunales debe ser trazable y organizada.

🏫 Aula
Es el Espacio físico donde se lleva a cabo la defensa.
Se requiere una gestión de aulas disponibles para evitar solapamientos de horarios y garantizar que el evento tenga un lugar adecuado.



⏰ Horario
Espacio temporal en la que se programa una defensa.
El control de horarios disponibles permite evitar conflictos y organizar las defensas de forma ordenada.

🧩 Entidades y Atributos del Dominio
A continuación se mostrará las entidades que modelan el sistema de gestión de defensas de trabajos de titulación, así como sus principales atributos.
|------------|----------------|----------|-------------------------------------------------------------------|
| Entidad    | Atributo       | Tipo     | Descripción                                                       |
|------------|----------------|----------|-------------------------------------------------------------------|
| Defensa    | id             | number   | Identificador único de la defensa                                 |
|            | fecha          | string   | Fecha de realización (YYYY-MM-DD)                                 |
|            | hora           | string   | Hora de inicio (HH:mm)                                            |
|            | aula_id        | number   | ID del aula asignada                                              |
|            | estado         | string   | Estado (programada, realizada, cancelada)                         |
|            | observaciones  | string   | Comentarios adicionales                                           |
|------------|----------------|----------|-------------------------------------------------------------------|
| Estudiante | id             | number   | Identificador del estudiante                                      |
|            | nombre         | string   | Nombre completo del estudiante                                    |
|            | carrera        | string   | Carrera del estudiante                                            |
|            | email          | string   | Correo electrónico del estudiante                                 |
|            | defensa_id     | number   | ID de la defensa en la que participa                              |
|------------|----------------|----------|-------------------------------------------------------------------|
| Tribunal   | id             | number   | Identificador del docente evaluador                               |
|            | nombres        | string   | Nombre completo del docente                                       |
|            | rol            | string   | Rol (presidente, secretario, vocal)                               |
|            | defensa_id     | number   | ID de la defensa asignada                                         |
|------------|----------------|----------|-------------------------------------------------------------------|
| Aula       | id             | number   | Identificador del aula                                            |
|            | nombre         | string   | Nombre del aula                                                   |
|            | capacidad      | number   | Número máximo de personas                                         |
|            | ubicacion      | string   | Ubicación física del aula                                         |
|------------|----------------|----------|-------------------------------------------------------------------|
| Horario    | id             | number   | Identificador del horario                                         |
|            | día            | string   | Día de la semana                                                  |
|            | hora_inicio    | string   | Hora de inicio (HH:mm)                                            |
|            | hora_fin       | string   | Hora de finalización (HH:mm)                                      |
|            | disponible     | boolean  | Si el horario está disponible o no                                |
|------------|----------------|----------|-------------------------------------------------------------------|
