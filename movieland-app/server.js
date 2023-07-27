const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Configuración del servidor proxy para redirigir las solicitudes a 'http://127.0.0.1:8000'
app.use('/api', createProxyMiddleware({ target: 'http://127.0.0.1:8000', changeOrigin: true }));

// Agregar encabezados CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Iniciar el servidor en el puerto 3001
app.listen(3001, () => {
  console.log('Servidor proxy escuchando en el puerto 3001');
});
