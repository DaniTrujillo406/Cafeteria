//Componente que permite registrar una venta seleccionando el producto y la cantidad a vender.

import React, { useState, useEffect } from 'react';
import { getProducts, registerSale } from '../api/api';
import { Alert, AlertTitle, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const SaleForm = ({ refreshSales }) => {
    const [products, setProducts] = useState([]);
    const [sale, setSale] = useState({ producto_id: '', cantidad: 1 });

    // Cargar los productos disponibles para la venta
    useEffect(() => {
        const fetchProducts = async () => {
        const response = await getProducts();
        setProducts(response.data.filter(product => product.stock > 0)); // Solo productos con stock
        };

        fetchProducts();
    }, []);

    const handleChange = (e) => {
        setSale({ ...sale, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        /* e.preventDefault(); */
        
        const currentDate = new Date().toISOString();

        try {
            await registerSale({ ...sale, fecha: currentDate });

            // Alerta de éxito
            <Alert severity="success">
                <AlertTitle>Registro Exitoso</AlertTitle>
                La venta ha sido registrada con exito.
            </Alert>

            // Actualizar las ventas y limpiar el formulario
            refreshSales();
            setSale({ producto_id: '', cantidad: 1, fecha_venta: '' }); // Restablecer estado inicial
        } catch (error) {
            // Alerta de éxito
            <Alert severity="error">
                <AlertTitle>Registro Fallido</AlertTitle>
                Hubo un error al registrar la venta. Por favor, inténtalo de nuevo.
            </Alert>

            console.error("Error al registrar la venta:", error);
        }
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{width: '90%'}}>
                <FormControl fullWidth variant="outlined" style={{ maxWidth: '300px', color: 'black' }}>
                    <InputLabel
                        id="product-select-label"
                    >
                        Seleccionar Producto*
                    </InputLabel>
                        <Select
                            labelId="product-select-label"
                            id="product-select"
                            name="producto_id"
                            value={sale.producto_id}
                            onChange={handleChange}
                            required
                            label="Seleccionar Producto"
                            sx={{
                                margin: '0px 20px 20px 0', backgroundColor: 'white'
                            }}
                        >
                            <MenuItem value=""> <em>Seleccionar Producto</em> </MenuItem>
                            {products.map((product) => (
                                <MenuItem key={product.id} value={product.id}>
                                    {product.nombre} - {product.referencia}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                <TextField
                    type="number"
                    name="cantidad"
                    label="Cantidad"
                    variant="filled"
                    value={sale.cantidad}
                    onChange={handleChange}
                    min="1"
                    required
                    style={{
                        margin: '0 20px 20px 0', backgroundColor: 'white', color: 'black', borderRadius: '4px'
                    }}
                />
                <Button variant="contained" type="submit"
                    style={{backgroundColor: 'white', color: 'black', borderRadius: '15px', width: '15%', margin: '5px 0'}}
                    onClick={() => handleSubmit()}
                >
                    <div style={{display: 'flex'}}>
                        <CheckIcon fontSize="large" sx={{marginRight: '5px'}}/>
                        <span style={{ paddingTop: '7px' }}>Registrar venta</span>
                    </div>
                </Button>
            </div>
        </form>
    );
};

export default SaleForm;
