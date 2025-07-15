# 🐶 Plataforma de Adopción - CRUD en Tiempo Real con WebSockets
Proyecto académico para la asignatura "Aplicación para el Servidor Web" (Práctica 3)
Universidad Laica Eloy Alfaro de Manabí - Carrera de Software

---
### 📌 Descripción
Este proyecto implementa un CRUD en tiempo real usando NestJS + WebSockets + TypeORM + SQLite sobre tres entidades del sistema de adopciones:

- ContratoAdopcion
- DocumentacionMascota
- CertificadoPropiedad

Cada operación (crear, actualizar, eliminar) es transmitida por WebSockets a todos los clientes conectados, permitiendo sincronización inmediata de datos.

## ⚙️ Tecnologías Utilizadas

- NestJS
- Socket.IO
- TypeORM
- SQLite
- Postman v10+ con soporte WebSocket

---

## 🚀 Instalación y Ejecución

```bash
# Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd adoptafacil-api

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run start:dev
```

Accede a GraphQL Playground en: http://localhost:3000/graphql

---
## 🧱 Entidades del Proyecto

1. Adoptante
-`id`: number

-`nombre`: string

-`direccion`: string

-`telefono`: number

2. Mascota
-`id`: number

-`nombre`: string

-`raza`: string

-`edad`: number

3. FechaAdopcion
-`id`: number 

-`fecha`: string

-`adoptanteId`: number (relación)

-`mascotaId`: number (relación)

---

🧪 Ejemplos de Queries y Mutations

### Crear un Adoptante
```graphql
mutation {
  createAdoptante(createAdoptanteInput: {
    nombre: "Ana López",
    email: "ana@example.com",
    telefono: "0987654321"
  }) {
    id
    nombre
  }
}
```
### Consultar Mascota
```graphql
query {
  mascotas {
    id
    nombre
    especie
    raza
    edad
  }
}
```

### Registrar Adopcion
```graphql
mutation {
  createFechaAdopcion(createFechaAdopcionInput: {
    fecha: "2025-07-03",
    adoptanteId: 1,
    mascotaId: 2
  }) {
    id
    fecha
  }
}
```

---

## 📁 Estructura del Proyecto
```
src/
├── app.module.ts
├── main.ts
├── adoptante/
│   ├── adoptante.module.ts
│   ├── adoptante.service.ts
│   ├── adoptante.resolver.ts
│   ├── dto/
│   │   ├── create-adoptante.input.ts
│   │   └── update-adoptante.input.ts
│   └── entities/
│       └── adoptante.entity.ts
├── mascota/
│   ├── mascota.module.ts
│   ├── mascota.service.ts
│   ├── mascota.resolver.ts
│   ├── dto/
│   │   ├── create-mascota.input.ts
│   │   └── update-mascota.input.ts
│   └── entities/
│       └── mascota.entity.ts
├── fecha-adopcion/
│   ├── fecha-adopcion.module.ts
│   ├── fecha-adopcion.service.ts
│   ├── fecha-adopcion.resolver.ts
│   ├── dto/
│   │   ├── create-fecha-adopcion.input.ts
│   │   └── update-fecha-adopcion.input.ts
│   └── entities/
│       └── fecha-adopcion.entity.ts


```

---

## 📌 Notas Importantes

## Autor
Kristhian Bello [Estudio]
Docente: Ing. John Cevallos
Periodo: 2025-2026 (1)
Nivel: Quinto - Paralelo A