const express = require('express');

module.exports = (pool) => {
    const router = express.Router();

    // Obtener todos las ventas
    router.get('/', async (req, res) => {
        /* try {
        const result = await pool.query('SELECT * FROM ventas');
        res.json(result.rows);
        } catch (err) {
        res.status(500).json({ error: 'Error al obtener ventas', details: err.message});
        } */

        try {
            const result =
            await pool.query('SELECT ventas.id, productos.nombre AS producto, productos.precio, ventas.cantidad, (productos.precio * ventas.cantidad) AS total, ventas.fecha_venta'+
                ' FROM ventas'+
                ' JOIN productos'+
                ' ON ventas.producto_id = productos.id');
                res.json(result.rows);
            } catch (err) {
                res.status(500).json({ error: 'Error al obtener ventas', details: err.message});
            }
        
    });

    // Registrar una venta
    router.post('/', async (req, res) => {
        const { producto_id, cantidad } = req.body;
        try {
        // Verificar si el producto tiene suficiente stock
        const producto = await pool.query('SELECT stock FROM productos WHERE id = $1', [producto_id]);
        if (!producto.rows.length || producto.rows[0].stock < cantidad) {
            return res.status(400).json({ error: 'Stock insuficiente o producto no encontrado' });
        }

        // Registrar la venta
        const venta = await pool.query(
            'INSERT INTO ventas (producto_id, cantidad) VALUES ($1, $2) RETURNING *',
            [producto_id, cantidad]
        );

        // Actualizar el stock del producto
        await pool.query('UPDATE productos SET stock = stock - $1 WHERE id = $2', [cantidad, producto_id]);

        res.json(venta.rows[0]);
        } catch (err) {
        res.status(500).json({ error: 'Error al registrar la venta', details: err.message });
        }
    });

    return router;
};