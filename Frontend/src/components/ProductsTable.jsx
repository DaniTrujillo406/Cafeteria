import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { deleteProduct } from '../api/api';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmDialog from '../modals/ConfirmDialog';


const ProductsTable = ({ productos, refreshProducts, setEditing, setCurrentProduct, onView }) => {
    const handleDelete = async (id) => {
        await deleteProduct(id);

        // Alerta de éxito
        <Alert severity="success">
            <AlertTitle>Eliminación Exitosa</AlertTitle>
            El producto ha sido eliminado con exito.
        </Alert>

        refreshProducts();
    };

    return (
        <div style={{marginLeft: '21%', width: '58%'}}>
            <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell sx={{ width: '30px', textAlign: 'center' }}>ID</TableCell>
                    <TableCell sx={{ width: '50px', textAlign: 'center' }}>Nombre</TableCell>
                    <TableCell sx={{ width: '50px', textAlign: 'center' }}>Referencia</TableCell>
                    <TableCell sx={{ width: '30px', textAlign: 'center' }}>Precio</TableCell>
                    <TableCell sx={{ width: '30px', textAlign: 'center' }}>Stock</TableCell>
                    <TableCell>Acciones</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {productos.map((producto) => (
                        <TableRow key={producto.id}>
                            <TableCell sx={{ textAlign: 'center' }}>{producto.id}</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>{producto.nombre}</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>{producto.referencia}</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>{producto.precio}</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>{producto.stock}</TableCell>
                            <TableCell>
                                <Button
                                    variant="outlined"
                                    color="info"
                                    onClick={() => onView(producto.id)} // Llama a la función para ver detalles
                                    style={{ marginRight: '10px' }}
                                >
                                    <div style={{display: 'flex'}}>
                                        <RemoveRedEyeIcon fontSize="medium" sx={{marginRight: '5px'}}/>
                                        <span style={{ paddingTop: '2px' }}>Ver</span>
                                    </div>
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => {setEditing(true); setCurrentProduct(producto);}} // Llama a la función para editar
                                    style={{ marginRight: '10px' }}
                                >
                                    <div style={{display: 'flex'}}>
                                        <EditNoteIcon fontSize="medium" sx={{marginRight: '5px'}}/>
                                        <span style={{ paddingTop: '2px' }}>Editar</span>
                                    </div>
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => handleDelete(producto.id)} // Llama a la función para eliminar
                                >
                                    <div style={{display: 'flex'}}>
                                        <DeleteIcon fontSize="medium" sx={{marginRight: '5px'}}/>
                                        <span style={{ paddingTop: '2px' }}>Eliminar</span>
                                    </div>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>

            {/* El modal de confirmación */}
            {/* <ConfirmDialog
                open={openDialog}
                onClose={handleCloseDialog}
                onConfirm={handleConfirmDelete}
                productName={productToDelete ? productToDelete.nombre : ''}
            /> */}
        </div>
    );
};

export default ProductsTable;
