# Reports GraphQL Service

Este es un servicio de reportes GraphQL que se conecta a los microservicios de gasolinera para generar reportes consolidados y estadísticas.

## Características

- 🚀 **GraphQL API** para consultas flexibles de reportes
- 📊 **Dashboard de estadísticas** generales del sistema
- 👥 **Reportes de operadores** con métricas de ventas
- ⛽ **Reportes de tipos de gasolina** con volúmenes y ingresos
- 🏢 **Reportes de surtidores** por ubicación
- 📈 **Reportes de ventas** con filtros avanzados
- 🔗 **Integración con microservicios** via TCP

## Requisitos Previos

1. Node.js (versión 18 o superior)
2. Los siguientes microservicios ejecutándose:
   - **Operator Service** en puerto 3002
   - **Gasoline Type Service** en puerto 3001
   - **Surtidor Service** en puerto 3004
   - **Sale Service** en puerto 3003

## Instalación

```bash
# Instalar dependencias
npm install

# Compilar el proyecto
npm run build
```

## Ejecución

```bash
# Desarrollo (con watch mode)
npm run start:dev

# Producción
npm run start:prod

# Debug mode
npm run start:debug
```

El servicio estará disponible en:
- **GraphQL Playground**: http://localhost:3006/graphql
- **Endpoint GraphQL**: http://localhost:3006/graphql

## Estructura del Proyecto

```
src/
├── app.module.ts          # Módulo principal con configuración GraphQL
├── main.ts               # Punto de entrada de la aplicación
└── reports/
    ├── dto/
    │   ├── report.dto.ts     # Tipos GraphQL para reportes
    │   └── filter.input.ts   # Inputs para filtros de consultas
    ├── reports.module.ts     # Módulo de reportes con clientes TCP
    ├── reports.resolver.ts   # Resolver GraphQL con queries
    └── reports.service.ts    # Lógica de negocio y comunicación con microservicios
```

## Consultas GraphQL Disponibles

### 1. Estadísticas del Dashboard
```graphql
query GetDashboardStats {
  dashboardStats {
    totalOperators
    totalGasolineTypes
    totalSurtidores
    totalSales
    totalRevenue
    averageSaleAmount
  }
}
```

### 2. Reportes de Operadores
```graphql
query GetOperatorReports {
  operatorReports {
    id
    name
    email
    totalSales
    totalRevenue
  }
}
```

### 3. Reportes de Tipos de Gasolina
```graphql
query GetGasolineTypeReports {
  gasolineTypeReports {
    id
    name
    price
    totalSales
    totalVolume
    totalRevenue
  }
}
```

### 4. Reportes de Surtidores
```graphql
query GetSurtidorReports {
  surtidorReports {
    id
    location
    gasolineTypeName
    totalSales
    totalVolume
    totalRevenue
  }
}
```

### 5. Reportes de Ventas con Filtros
```graphql
query GetFilteredSalesReports {
  salesReports(filter: {
    operatorId: "1"
    minAmount: 100.0
    maxAmount: 500.0
    dateRange: {
      startDate: "2024-01-01"
      endDate: "2024-12-31"
    }
  }) {
    id
    operatorName
    surtidorLocation
    gasolineTypeName
    quantity
    totalAmount
    date
  }
}
```

## Filtros Disponibles

Los reportes de ventas soportan los siguientes filtros:

- **operatorId**: ID del operador específico
- **surtidorId**: ID del surtidor específico
- **gasolineTypeId**: ID del tipo de gasolina
- **minAmount**: Monto mínimo de la venta
- **maxAmount**: Monto máximo de la venta
- **dateRange**: Rango de fechas (startDate, endDate)

## Configuración de Microservicios

El servicio se conecta a los siguientes puertos por defecto:

| Servicio | Puerto | Descripción |
|----------|---------|-------------|
| Gasoline Type Service | 3001 | Gestión de tipos de gasolina |
| Operator Service | 3002 | Gestión de operadores |
| Sale Service | 3003 | Gestión de ventas |
| Surtidor Service | 3004 | Gestión de surtidores |

## GraphQL Playground

Una vez que el servicio esté ejecutándose, puedes acceder a GraphQL Playground en:
`http://localhost:3006/graphql`

Aquí podrás:
- 📝 Escribir y probar consultas GraphQL
- 📚 Explorar el esquema y documentación automática
- 🔍 Ver autocompletado y validación en tiempo real

## Ejemplos de Uso

### Dashboard Completo
```graphql
query GetFullDashboard {
  dashboardStats {
    totalOperators
    totalSales
    totalRevenue
    averageSaleAmount
  }
  
  operatorReports {
    name
    totalSales
    totalRevenue
  }
  
  gasolineTypeReports {
    name
    price
    totalSales
    totalRevenue
  }
}
```

### Ventas de Alto Valor
```graphql
query GetHighValueSales {
  salesReports(filter: { minAmount: 200.0 }) {
    operatorName
    totalAmount
    date
  }
}
```

### Ventas por Período
```graphql
query GetMonthlySales {
  salesReports(filter: {
    dateRange: {
      startDate: "2024-01-01"
      endDate: "2024-01-31"
    }
  }) {
    operatorName
    totalAmount
    date
  }
}
```

## Desarrollo

### Agregar Nuevos Reportes

1. Crear el tipo GraphQL en `dto/report.dto.ts`
2. Implementar la lógica en `reports.service.ts`
3. Agregar la query en `reports.resolver.ts`

### Testing

```bash
# Ejecutar tests
npm test

# Tests con coverage
npm run test:cov

# Tests en modo watch
npm run test:watch
```

## Arquitectura

El servicio utiliza:

- **NestJS** como framework principal
- **Apollo Server** para GraphQL
- **RxJS** para manejo de streams y observables
- **TCP Transport** para comunicación con microservicios
- **Class Validator** para validación de inputs

## Notas Técnicas

- Todas las consultas retornan observables para manejo asíncrono
- Los errores de microservicios son manejados gracefully
- Se implementa retry logic automático para conexiones TCP
- Los reportes son calculados en tiempo real desde los microservicios

## Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear un Pull Request
