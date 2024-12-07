const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 8080;

// Configuración de la conexión con PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cafeteria',
    password: 'da123',
    port: 5432, // Puerto por defecto de PostgreSQL
});

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Ruta base
app.get('/', (req, res) => {
    res.send('Backend de Inventario Konecta funcionando');
});

// Importar rutas
const productosRoutes = require('./routes/productos');
const ventasRoutes = require('./routes/ventas');

app.use('/productos', productosRoutes(pool));
app.use('/ventas', ventasRoutes(pool));

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});