// src/main.ts
import express from "express";
import mascotaRoutes from "./interfaces/http/mascotaRoutes";
import fechaAdopcionRoutes from "./interfaces/http/fechaAdopcionRoutes";
import adopcionRoutes from "./interfaces/http/adopcionRoutes";
import { AppDataSource } from "./infrastructure/orm/data-source";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/mascotas", mascotaRoutes);
app.use("/fechas-adopcion", fechaAdopcionRoutes);
app.use("/adopciones", adopcionRoutes);

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error al iniciar la base de datos:", err);
  });
