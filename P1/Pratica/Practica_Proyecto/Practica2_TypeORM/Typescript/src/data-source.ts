import 'reflect-metadata'
import { DataSource } from "typeorm";
import { Mascota } from "./models/mascota";
import { Adoptante } from "./models/adoptante";
import { FechaAdopcion } from "./models/fecha_de_adopcion";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "mypass",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Mascota, Adoptante, FechaAdopcion],
  migrations: [],
});