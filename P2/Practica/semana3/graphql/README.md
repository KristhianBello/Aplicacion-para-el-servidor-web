# 🐾 AdoptaFácil - GraphQL API

Este proyecto es una API GraphQL desarrollada con **NestJS** y **TypeORM** que permite gestionar un sistema de adopción de mascotas. Se implementa una arquitectura por capas, aplicando buenas prácticas de diseño de software moderno, usando el enfoque *Code First* con GraphQL.

## 📘 Descripción del Proyecto

La API permite:

- Registrar y consultar información sobre adoptantes.
- Gestionar mascotas disponibles para adopción.
- Llevar control de las fechas de adopción entre adoptantes y mascotas.

---

## ⚙️ Tecnologías Utilizadas

- **Framework**: NestJS
- **Base de datos**: SQLite
- **ORM**: TypeORM
- **API**: GraphQL (Code First) con Apollo Server
- **Validación**: class-validator

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
- El esquema GraphQL se genera automáticamente (schema.gql)
- La base de datos SQLite (db.sqlite) se crea al ejecutar el proyecto
- Se aplican validaciones en los DTOs usando class-validator
- Se sigue el principio de separación por capas: datos, lógica y API

## Autor
Kristhian Bello