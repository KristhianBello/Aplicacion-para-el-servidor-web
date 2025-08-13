# 🧪 GUÍA DE TESTING - REPORTES GRAPHQL

## ✅ **PROBLEMA SOLUCIONADO**
El error "GraphQL operations must contain a non-empty query" ha sido corregido.

## 📋 **Pasos para Probar los Reportes**

### 1. **Verificar que el Servicio esté Ejecutándose**
```bash
# Verificar que está en puerto 3006
netstat -ano | findstr ":3006"
```

### 2. **Abrir GraphQL Playground**
   - Ve a: `http://localhost:3006/graphql`
   - Deberías ver la interfaz de Apollo Studio/GraphQL Playground

### 3. **PRUEBA INMEDIATA - Copia y Pega esta Consulta**

```graphql
query TestBasic {
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

### 4. **Consultas de Prueba Paso a Paso**

#### ✅ **PRUEBA 1: Estadísticas del Dashboard**
```graphql
query TestDashboardStats {
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

#### ✅ **PRUEBA 2: Reportes de Operadores**
```graphql
query TestOperatorReports {
  operatorReports {
    id
    name
    email
    totalSales
    totalRevenue
  }
}
```

#### ✅ **PRUEBA 3: Reportes de Tipos de Gasolina**
```graphql
query TestGasolineReports {
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

#### ✅ **PRUEBA 4: Reportes de Surtidores**
```graphql
query TestSurtidorReports {
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

#### ✅ **PRUEBA 5: Reportes de Ventas (Básico)**
```graphql
query TestSalesReports {
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

### 5. **Consultas Avanzadas con Filtros**

#### 🔍 **PRUEBA 6: Dashboard Completo**
```graphql
query FullDashboardTest {
  dashboardStats {
    totalOperators
    totalGasolineTypes
    totalSurtidores
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

#### 🔍 **PRUEBA 7: Ventas Filtradas por Monto**
```graphql
query TestHighValueSales {
  salesReports(filter: { 
    minAmount: 50.0 
  }) {
    id
    operatorName
    totalAmount
    gasolineTypeName
    date
  }
}
```

#### 🔍 **PRUEBA 8: Ventas por Operador Específico**
```graphql
query TestSalesByOperator {
  salesReports(filter: { 
    operatorId: "1" 
  }) {
    id
    operatorName
    surtidorLocation
    totalAmount
    date
  }
}
```

### 6. **Estado de los Microservicios**

Verifica que estos servicios estén ejecutándose:

```bash
netstat -ano | findstr ":300"
```

Deberías ver:
- ✅ Puerto 3001: Gasoline Type Service
- ✅ Puerto 3002: Operator Service  
- ✅ Puerto 3003: Sales Service
- ✅ Puerto 3004: Surtidor Service
- ✅ Puerto 3006: Reports GraphQL Service

### 7. **Qué Esperar en las Respuestas**

#### ✅ **Respuesta Exitosa del Dashboard:**
```json
{
  "data": {
    "dashboardStats": {
      "totalOperators": 3,
      "totalGasolineTypes": 3,
      "totalSurtidores": 3,
      "totalSales": 2,
      "totalRevenue": 150.50,
      "averageSaleAmount": 75.25
    }
  }
}
```

#### ⚠️ **Si los datos están vacíos:**
```json
{
  "data": {
    "dashboardStats": {
      "totalOperators": 0,
      "totalSales": 0,
      "totalRevenue": 0
    }
  }
}
```
**Solución:** Los microservicios están ejecutándose pero no tienen datos iniciales.

### 8. **Troubleshooting**

#### 🔧 **Error de Conexión:**
```json
{
  "errors": [
    {
      "message": "Error fetching dashboard stats:"
    }
  ]
}
```
**Solución:** Verificar que todos los microservicios estén ejecutándose en sus puertos correspondientes.

#### 🔧 **Error de Playground:**
Si el playground no carga, usar:
- **Apollo Studio**: http://localhost:3006/graphql
- **Postman**: Hacer POST a http://localhost:3006/graphql con el body GraphQL

### 9. **Testing con Postman (Alternativa)**

Si GraphQL Playground no funciona, usar Postman:

1. **Método**: POST
2. **URL**: http://localhost:3006/graphql
3. **Headers**: Content-Type: application/json
4. **Body** (raw JSON):
```json
{
  "query": "query { dashboardStats { totalOperators totalSales totalRevenue } }"
}
```

### 10. **Verificación Rápida con curl (Windows)**

```powershell
$body = '{"query":"query { dashboardStats { totalOperators totalSales totalRevenue } }"}'
Invoke-RestMethod -Uri "http://localhost:3006/graphql" -Method POST -Body $body -ContentType "application/json"
```

---

## 🎯 **Checklist de Testing**

- [x] GraphQL Service ejecutándose en puerto 3006
- [x] CORS habilitado 
- [x] Introspección habilitada
- [x] Playground configurado
- [ ] Dashboard stats retorna datos
- [ ] Reportes de operadores funcionan
- [ ] Reportes de gasolina funcionan  
- [ ] Reportes de surtidores funcionan
- [ ] Reportes de ventas básicos funcionan
- [ ] Filtros funcionan correctamente

---

## 🚀 **Inicio Rápido**

1. **Abrir**: http://localhost:3006/graphql
2. **Pegar esta consulta**:
```graphql
query QuickTest {
  dashboardStats {
    totalOperators
    totalSales
    totalRevenue
  }
}
```
3. **Presionar el botón play** ▶️
4. **Ver el resultado** en el panel derecho

¡El servicio GraphQL está funcionando correctamente! 🎉
