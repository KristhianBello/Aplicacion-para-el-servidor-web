# 🐾 AdoptaFácil API

API REST construida con [NestJS](https://nestjs.com/) y [SQLite](https://www.sqlite.org/index.html) para la gestión de mascotas, adoptantes y solicitudes de adopción.

## 📦 Características

- CRUD completo para 3 entidades: `mascota`, `adoptante`, y `FechaAdopcion`
- Documentación automática con Swagger
- Base de datos ligera usando SQLite
- Versionado de rutas: todos los endpoints están bajo `/api/v1`

## 🚀 Requisitos

- Node.js (versión LTS recomendada)
- npm (incluido con Node.js)

## ⚙️ Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/KristhianBello/Aplicacion-para-el-servidor-web.git
cd adoptafacil-api

```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor en modo desarrollo:

```bash
npm run start:dev
```

> Esto iniciará el servidor en `http://localhost:3000`

## 🧪 Endpoints de la API

Todos los endpoints están bajo el prefijo:

```
http://localhost:3000/api/mascotas
```

### 🐶 Mascota
- POST /mascota

- GET /mascota

- GET /mascota/:id

- PATCH /mascota/:id

- DELETE /mascota/:id

### 👤 Adoptante
- POST /adoptante

- GET /adoptante

- GET /adoptante/:id

- PATCH /adoptante/:id

- DELETE /adoptante/:id

## 📚 Documentación Swagger

Una vez ejecutado el servidor, puedes acceder a la documentación Swagger aquí:

```
http://localhost:3000/api
```
### 📄 JSON de ejemplo para POST /mascota
```
{
  "nombre": "Firulais",
  "raza": "Labrador",
  "edad": 3,
  "status": true
}
```
## 👨‍💻 Autor
Kristhian Bello
