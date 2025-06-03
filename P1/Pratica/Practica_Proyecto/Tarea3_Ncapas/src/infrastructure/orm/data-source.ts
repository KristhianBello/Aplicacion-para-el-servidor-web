// src/infrastructure/typeorm/data-source.ts
import { DataSource } from "typeorm";
import { Mascota } from "../../domain/entities/mascota";
import { FechaAdopcion } from "../../domain/entities/FechaAdopcion";
import { Adopcion } from "../../domain/entities/adopcion"

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db.sqlite",
  synchronize: true,
  logging: false,
  entities: [Mascota, FechaAdopcion, Adopcion],
});
