# Consultas GraphQL de ejemplo para el servicio de reportes

## Estadísticas del Dashboard
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

## Reportes de Operadores
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

## Reportes de Tipos de Gasolina
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

## Reportes de Surtidores
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

## Reportes de Ventas (sin filtros)
```graphql
query GetAllSalesReports {
  salesReports {
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

## Reportes de Ventas con Filtros
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

## Consulta Combinada para Dashboard Completo
```graphql
query GetFullDashboard {
  dashboardStats {
    totalOperators
    totalGasolineTypes
    totalSurtidores
    totalSales
    totalRevenue
    averageSaleAmount
  }
  
  operatorReports {
    id
    name
    totalSales
    totalRevenue
  }
  
  gasolineTypeReports {
    id
    name
    price
    totalSales
    totalRevenue
  }
  
  surtidorReports {
    id
    location
    gasolineTypeName
    totalSales
    totalRevenue
  }
}
```

## Ventas por Operador Específico
```graphql
query GetSalesByOperator($operatorId: String!) {
  salesReports(filter: { operatorId: $operatorId }) {
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

Variables:
```json
{
  "operatorId": "1"
}
```

## Ventas en un Rango de Fechas
```graphql
query GetSalesByDateRange($startDate: String!, $endDate: String!) {
  salesReports(filter: {
    dateRange: {
      startDate: $startDate
      endDate: $endDate
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

Variables:
```json
{
  "startDate": "2024-01-01",
  "endDate": "2024-01-31"
}
```

## Ventas por Monto Mínimo
```graphql
query GetHighValueSales($minAmount: Float!) {
  salesReports(filter: { minAmount: $minAmount }) {
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

Variables:
```json
{
  "minAmount": 200.0
}
```
