@echo off
echo 🚀 Iniciando todos los microservicios...
echo.

echo 📦 Instalando dependencias...
call npm install
echo.

echo 🏗️ Compilando aplicaciones...
call npm run build
echo.

echo 🌐 Iniciando servicios en paralelo...
echo.

start cmd /k "echo 🔔 Iniciando servicio de notificaciones... && npm run start:notifications"
timeout /t 3 >nul

start cmd /k "echo ⛽ Iniciando servicio de tipos de gasolina... && npm run start:gasoline-type"
timeout /t 2 >nul

start cmd /k "echo 👷 Iniciando servicio de operadores... && npm run start:operator"
timeout /t 2 >nul

start cmd /k "echo ⛽ Iniciando servicio de surtidores... && npm run start:surtidor"
timeout /t 2 >nul

start cmd /k "echo 💰 Iniciando servicio de ventas... && npm run start:sales"
timeout /t 2 >nul

start cmd /k "echo 🚪 Iniciando gateway API... && npm run start:gateway"
timeout /t 3 >nul

echo.
echo ✅ Todos los servicios se están iniciando...
echo 🌐 Gateway API: http://localhost:3000
echo 🔔 Notificaciones: http://localhost:3001
echo 🧪 Test WebSocket: http://localhost:3000/websocket-test.html
echo.
echo ⚠️  Espera unos segundos para que todos los servicios estén listos
pause
