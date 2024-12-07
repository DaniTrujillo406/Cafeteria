const express = require('express');

module.exports = (pool) => {
    const router = express.Router();

    // Obtener todos los productos /productos
    router.get('/', async (req, res) => {
        try {
            const result = await pool.query('SELECT * FROM productos');
            res.json(result.rows);
        } catch (err) {
            res.status(500).json({ error: 'Error al obtener productos', details: err.message });
        }
    });

    // Obtener producto por ref /productos/ref
    router.get('/buscar', async (req, res) => {
        const { referencia } = req.query;  // Obtener la referencia desde los parámetros de la URL
        try {
            const result = await pool.query('SELECT * FROM productos WHERE referencia = $1', [referencia]);
            if (result.rows.length > 0) {
                res.json(result.rows);
            } else {
                res.status(404).json({ message: 'Producto no encontrado' });
            }
        } catch (err) {
            res.status(500).json({ error: 'Error al obtener producto por referencia', details: err.message });
        }
    });

    // Obtener producto por ref /productos/id
    router.get('/buscar/:id', async (req, res) => {
        const { id } = req.params;  // Obtener el ID desde los parámetros de la URL
        try {
            const result = await pool.query('SELECT * FROM productos WHERE id = $1', [id]);
            if (result.rows.length > 0) {
                res.json(result.rows);
            } else {
                res.status(404).json({ message: 'Producto no encontrado' });
            }
        } catch (err) {
            res.status(500).json({ error: 'Error al obtener el producto por ID', details: err.message });
        }
    });

    // Crear un nuevo producto /productos
    router.post('/', async (req, res) => {
        const { nombre, referencia, precio, peso, categoria, stock } = req.body;
        try {
            const result = await pool.query(
                'INSERT INTO productos (nombre, referencia, precio, peso, categoria, stock) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
                [nombre, referencia, precio, peso, categoria, stock]
            );
            res.json(result.rows[0]);
        } catch (err) {
            res.status(500).json({ error: 'Error al crear el producto', details: err.message });
        }
    });

    // Editar un producto existente /productos/id
    router.put('/:id', async (req, res) => {
        const { id } = req.params;
        const { nombre, referencia, precio, peso, categoria, stock } = req.body;
        try {
            const result = await pool.query(
                'UPDATE productos SET nombre = $1, referencia = $2, precio = $3, peso = $4, categoria = $5, stock = $6 WHERE id = $7 RETURNING *',
                [nombre, referencia, precio, peso, categoria, stock, id]
            );
            res.json(result.rows[0]);
        } catch (err) {
            res.status(500).json({ error: 'Error al actualizar el producto', details: err.message });
        }
    });

    // Eliminar un producto /productos/id
    router.delete('/:id', async (req, res) => {
        const { id } = req.params;
        try {
        await pool.query('DELETE FROM productos WHERE id = $1', [id]);
        res.json({ message: 'Producto eliminado' });
        } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el producto', details: err.message });
        }
    });

    return router;
};