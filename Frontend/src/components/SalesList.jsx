//Componente que muestra la lista de ventas ralizadas.

import React from 'react';

const SalesList = ({ sales }) => {
    return (
        <table>
        <thead>
            <tr>
            <th>ID Venta</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
            {sales.map((sale) => (
                <tr key={sale.id}>
                    <td>{sale.id}</td>
                    <td>{sale.producto}</td>
                    <td>{sale.cantidad}</td>
                    <td>{new Date(sale.fecha).toLocaleString()}</td>
                </tr>
            ))}
        </tbody>
        </table>
    );
};

export default SalesList;
