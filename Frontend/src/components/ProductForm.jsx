//Componente que permite Crear y Editar los productos.

import React, { useState } from 'react';
import { createProduct, updateProduct } from '../api/api';
import { Alert, AlertTitle, Button, TextField } from '@mui/material';
import { NumericFormat } from 'react-number-format';
import AddIcon from '@mui/icons-material/Add';
import EditNoteIcon from '@mui/icons-material/EditNote';

const ProductForm = ({ currentProduct, setEditing, refreshProducts }) => {
    const [formData, setFormData] = useState(
        currentProduct || { nombre: '', referencia: '', precio: '', peso: '', categoria: '', stock: '' }
    );

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentProduct) {
            await updateProduct(currentProduct.id, formData);

            // Alerta de éxito
            <Alert severity="success">
                <AlertTitle>Actualización Exitosa</AlertTitle>
                El producto ha sido actualizado con exito.
            </Alert>
        } else {
            await createProduct(formData);

            // Alerta de éxito
            <Alert severity="success">
                <AlertTitle>Registro Exitoso</AlertTitle>
                El producto ha sido registrado con exito.
            </Alert>
        }
        refreshProducts();
        setEditing(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <TextField
                    name="nombre"
                    label="Nombre del Producto"
                    variant="filled"
                    value={formData.nombre}
                    onChange={handleChange}
                    style={{
                        margin: '0 20px 20px 0', backgroundColor: 'whitesmoke', color: 'black'
                    }}
                    required
                />
                <TextField
                    name="referencia"
                    label="Referencia"
                    variant="filled"
                    value={formData.referencia}
                    onChange={handleChange}
                    style={{
                        margin: '0 20px 20px 0', backgroundColor: 'whitesmoke', color: 'black'
                    }}
                    required
                />
                <TextField
                    name="precio"
                    label="Precio"
                    variant="filled"
                    value={formData.precio}
                    onChange={handleChange}
                    style={{
                        margin: '0 20px 20px 0', backgroundColor: 'whitesmoke', color: 'black'
                    }}
                    /* InputProps={{
                        inputComponent: NumberFormatCustom,
                    }} */
                    required
                />
            </div>
            <div>
                <TextField
                    name="peso"
                    label="Peso"
                    variant="filled"
                    value={formData.peso}
                    onChange={handleChange}
                    style={{
                        margin: '0 20px 20px 0', backgroundColor: 'whitesmoke', color: 'black'
                    }}
                    required
                />
                <TextField
                    name="categoria"
                    label="Categoría"
                    variant="filled"
                    value={formData.categoria}
                    onChange={handleChange}
                    style={{
                        margin: '0 20px 20px 0', backgroundColor: 'whitesmoke', color: 'black'
                    }}
                    required
                />
                <TextField
                    name="stock"
                    label="Stock"
                    variant="filled"
                    value={formData.stock}
                    onChange={handleChange}
                    style={{
                        margin: '0 20px 20px 0', backgroundColor: 'whitesmoke', color: 'black'
                    }}
                    required
                />
            </div>
            {currentProduct ?
                <Button variant="contained" type="submit"
                    style={{backgroundColor: 'white', color: 'black', borderRadius: '15px', width: '15%', margin: '20px 0'}}
                    onClick={() => setEditing(true)}
                >
                    <div style={{display: 'flex'}}>
                        <EditNoteIcon fontSize="large" sx={{marginRight: '5px'}}/>
                        <span style={{ paddingTop: '7px' }}>Actualizar Producto</span>
                    </div>
                </Button>
            :
                <Button variant="contained" type="submit"
                    style={{backgroundColor: 'white', color: 'black', borderRadius: '15px', width: '15%', margin: '20px 0'}}
                    onClick={() => setEditing(true)}
                >
                    <div style={{display: 'flex'}}>
                        <AddIcon fontSize="large" sx={{marginRight: '5px'}}/>
                        <span style={{ paddingTop: '7px' }}>Crear Producto</span>
                    </div>
                </Button>
            }
        </form>
    );
};

export default ProductForm;

// Este componente de formato personaliza cómo el input maneja la entrada del precio
function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumericFormat
            {...other}
            getInputRef={inputRef}
            thousandSeparator=","
            prefix="$"
            decimalScale={2}
            fixedDecimalScale
            isNumericString
            allowNegative={false}
            onValueChange={(values) => {
            onChange({
                target: {
                name: props.name,
                value: values.value,
                },
            });
            }}
        />
    );
}