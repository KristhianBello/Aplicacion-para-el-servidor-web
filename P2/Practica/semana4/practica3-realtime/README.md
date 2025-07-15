# 🐶 Plataforma de Adopción - CRUD en Tiempo Real con WebSockets

**Proyecto académico para la asignatura "Aplicación para el Servidor Web" (Práctica 3)**  

---

## 📌 Descripción

Este proyecto implementa un **CRUD en tiempo real** usando **NestJS + WebSockets + TypeORM + SQLite** sobre tres entidades del sistema de adopciones:

- **ContratoAdopcion**  
- **DocumentacionMascota**  
- **CertificadoPropiedad**

Cada operación (crear, actualizar, eliminar) es transmitida por WebSockets a todos los clientes conectados, permitiendo sincronización inmediata de datos.

---

## 🧱 Tecnologías Usadas

- [NestJS](https://nestjs.com/)
- [Socket.IO](https://socket.io/)
- [TypeORM](https://typeorm.io/)
- [SQLite](https://www.sqlite.org/index.html)
- [Postman](https://www.postman.com/) v10+ con soporte WebSocket

---

## 🧩 Estructura de Entidades

### 📄 ContratoAdopcion

| Campo              | Tipo    | Descripción                             |
|--------------------|---------|------------------------------------------|
| contratoAdopcionId | number  | ID autogenerado del contrato            |
| adopcionId         | number  | Relación con la adopción                |
| contenido          | string  | Texto legal completo del contrato       |
| terminosEspeciales | string  | Condiciones especiales                  |
| fechaFirma         | string  | Fecha de firma (ISO)                    |
| archivoUrl         | string  | URL del archivo firmado (PDF)          |


---

## ⚙️ Instalación

```bash
git clone https://github.com/KristhianBello/Aplicacion-para-el-servidor-web.git
cd practica3-realtime
npm install
npm run start: dev (para Test)
```

> Asegúrate de tener instalado Node.js v18 o superior.

---

## 🔗 Conexión WebSocket

URL para Postman:

```
ws://localhost:3000/
```

### 📸 Captura - Crear Contrato desde Postman

![Crear Contrato](/img/crear-contrato.png)
![Escuchando Contrato](/img/escuchando-contrato.png)
![Verificacion contrato](/img/verificacion-contrato.png)
![Crear Documento](/img/crear-documentacion.png)
![Verificar Documento](/img/verficacion-documento.png)

---

## 📡 Eventos WebSocket

### 🔹 ContratoAdopcion

| Evento                 | Descripción                        |
|------------------------|------------------------------------|
| `crearContrato`        | Crear un nuevo contrato            |
| `listarContratos`      | Obtener todos los contratos        |
| `actualizarContrato`   | Actualizar contrato por ID         |
| `eliminarContrato`     | Eliminar contrato por ID           |
| `contratosActualizados`| Evento de respuesta emitido       |

### 🧪 Ejemplo de mensaje (crear)

```json
{
    "contratoAdopcionId": 1,
    "adopcionId": 1,
    "contenido": "Contrato de adopción",
    "terminosEspeciales": "Seguimiento obligatorio",
    "fechaFirma": "2025-07-14",
  
}
```

### Ejemplo de Documentacion (crear)
```json
{
  
  "documentoId": 1,
  "mascotaId": 1,
  "tipoDocumento": "Vacunacion",
  "fechaEmision": "2023-09-01",
  "fechaVencimiento": "2024-09-01",
  "entidadEmisora": "Veterinaria Los Andes",
  "descripcion": "Vacuna antirrábica anual"
  
}
```

### Actualizar documento
```json
{
  "event": "actualizarDocumentoMascota",
  "data": {
    "id": 1,
    "dto": {
      "descripcion": "Actualizado: Vacuna antirrábica y parvovirus"
    }
  }
}
```

### Ejemplo de certificado de Adopcion (crear)
```json
{
  "event": "crearCertificado",
  "data": {
    "certificadoId": 2,
    "adopcionId": 2,
    "numeroCertificado": "CERT-002",
    "fechaEmision": "2023-10-02",
    "entidadEmisora": "Entidad B",
    "hashSeguridad": "hash0987654321"
  }
}
```

### Actualizar Certificado
```json
{
  "event": "actualizarCertificado",
  "data": {
    "id": 2,
    "dto": {
      "entidadEmisora": "Entidad B - Actualizada"
    }
  }
}
```

---

## 📁 Organización de Carpetas

```
src/
├─ contrato-adopcion/
│  ├─ contrato-adopcion.service.ts
│  ├─ contrato-adopcion.gateway.ts
│  ├─ dto/
│  └─ entities/
├─ documentacion-mascota/
├─ certificado-propiedad/
├─ app.module.ts
```

---

## 🧪 Pruebas

- Conecta a WebSocket usando Postman
- Envía eventos con estructura JSON
- Verifica que los cambios se reflejan automáticamente en las respuestas emitidas

---

## 🧠 Consideraciones

- Se utiliza `synchronize: true` para desarrollo.
- La base de datos está en SQLite (`app.db`)
- Los eventos están configurados para emitir datos actualizados a todos los clientes conectados.
- Se aplicó validación en los DTOs con `class-validator`.

---

## 👤 Autor

**Kristhian Bello [Estudio]**  
Docente: *Ing. John Cevallos*  
Periodo: *2025-2026 (1)*  
Nivel: *Quinto - Paralelo A*