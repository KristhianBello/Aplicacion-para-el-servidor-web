import { AppDataSource } from "../data-source";
import { Mascota } from "./mascota";
import { Adoptante } from "./adoptante";
import { FechaAdopcion } from "./fecha_de_adopcion";

export async function crearAdopcion() {
  const mascota = new Mascota();
  mascota.nombre = "Luna";
  mascota.especie = "Gato";

  const adoptante = new Adoptante();
  adoptante.nombre = "María García";

  const fechaAdopcion = new FechaAdopcion();
  fechaAdopcion.fecha = new Date();
  fechaAdopcion.mascota = mascota;
  fechaAdopcion.adoptante = adoptante;

  await AppDataSource.manager.save(mascota);
  await AppDataSource.manager.save(adoptante);
  await AppDataSource.manager.save(fechaAdopcion);
}

export async function listarAdopciones() {
  return await AppDataSource.manager.find(FechaAdopcion, {
    relations: ["mascota", "adoptante"],
  });
}