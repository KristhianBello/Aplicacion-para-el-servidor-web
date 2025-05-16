import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { crearAdopcion, listarAdopciones } from "./models/crud";

AppDataSource.initialize()
  .then(async () => {
    console.log("Conexión exitosa!");
    await crearAdopcion();
    const adopciones = await listarAdopciones();
    console.log("Adopciones:", adopciones);
  })
  .catch((error) => console.log(error));