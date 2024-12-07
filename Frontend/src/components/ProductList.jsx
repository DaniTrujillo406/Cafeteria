//Componente que muestra la lista de productos y opciones para Editar / Eliminar los productos.

import React from 'react';
import { deleteProduct } from '../api/api';

const ProductList = ({ products, refreshProducts, setEditing, setCurrentProduct }) => {
    const handleDelete = async (id) => {
        await deleteProduct(id);
        refreshProducts();
    };

    return (
        <ul>
        {products.map((product) => (
            <li key={product.id}>
                {product.nombre} - {product.categoria} - {product.stock}
                <button onClick={() => { setEditing(true); setCurrentProduct(product); }}>Editar</button>
                <button onClick={() => handleDelete(product.id)}>Eliminar</button>
            </li>
        ))}
        </ul>
    );
};

export default ProductList;
