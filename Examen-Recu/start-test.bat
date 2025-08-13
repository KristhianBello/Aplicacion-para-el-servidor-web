@echo off
echo 🚀 Iniciando servicios esenciales para prueba WebSocket...
echo.

echo 📦 Instalando dependencias...
npm install
echo.

echo 🔔 Iniciando servicio de notificaciones (puerto 3001)...
start cmd /k "cd /d %~dp0 && npm run start:notifications"
timeout /t 5 >nul

echo 🚪 Iniciando gateway API (puerto 3000)...
start cmd /k "cd /d %~dp0 && npm run start:gateway"
timeout /t 5 >nul

echo ⛽ Iniciando servicio de tipos de gasolina (puerto 3002)...
start cmd /k "cd /d %~dp0 && npm run start:gasoline-type"
timeout /t 3 >nul

echo.
echo ✅ Servicios iniciados:
echo 🌐 Gateway API: http://localhost:3000
echo 🔔 Notificaciones WebSocket: http://localhost:3001
echo 🧪 Test WebSocket: http://localhost:3000/websocket-test.html
echo.
echo 💡 Para probar:
echo 1. Abre http://localhost:3000/websocket-test.html
echo 2. Haz operaciones CRUD en http://localhost:3000/gasoline-types
echo 3. Ve las notificaciones en tiempo real
echo.
pause
