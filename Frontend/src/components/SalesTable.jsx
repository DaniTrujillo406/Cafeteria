import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import moment from 'moment';
import 'moment/locale/es'; // Para formato en español

const SalesTable = ({ productos }) => {
    const ventasConFechaFormateada = productos.map((venta) => {
        const formattedDate = moment(venta.fecha_venta).locale('es').format('D [de] MMMM [de] YYYY');
        return {
          ...venta, // Mantiene las propiedades originales
          fecha_venta_formateada: formattedDate, // Añade la fecha formateada
        };
    });


    return (
        <div style={{marginLeft: '21%', width: '58%'}}>
            <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell sx={{ width: '30px', textAlign: 'center' }}>ID</TableCell>
                    <TableCell sx={{ width: '50px', textAlign: 'center' }}>Nombre del Producto</TableCell>
                    <TableCell sx={{ width: '50px', textAlign: 'center' }}>Cantidad</TableCell>
                    <TableCell sx={{ width: '50px', textAlign: 'center' }}>Precio Und.</TableCell>
                    <TableCell sx={{ width: '50px', textAlign: 'center' }}>Total</TableCell>
                    <TableCell sx={{ width: '50px', textAlign: 'center' }}>Fecha de Factura</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {productos.map((producto) => (
                        <TableRow key={producto.id}>
                            <TableCell sx={{ textAlign: 'center' }}>{producto.id}</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>{producto.producto}</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>{producto.cantidad}</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>{producto.precio}</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>{producto.total}</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>
                                {ventasConFechaFormateada
                                    .filter((venta) => venta.id === producto.id) // Filtra por ID
                                    .map((venta) => (
                                      venta.fecha_venta_formateada // Muestra solo la fecha de la venta con el ID seleccionado
                                    ))
                                }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
};

export default SalesTable;
