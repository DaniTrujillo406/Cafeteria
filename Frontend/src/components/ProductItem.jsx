//Componente que mostrará los detalles de un producto cuando se haga clic en él.

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/api';
import moment from 'moment';
import 'moment/locale/es'; // Para formato en español

const ProductItem = () => {
    const { id } = useParams(); // Obtiene el ID del producto de la URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await getProductById(id);
            setProduct(response.data[0]);
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <h2>Loading...</h2>;
    }

    const isoDate = product.fechaCreacion;
    const formattedDate = moment(isoDate).locale('es').format(' D [de] MMMM [de] YYYY');

    return (
        <div style={homeContainerStyle}>
            <h1 style={{color: 'white', width: '10%', marginLeft: '30%'}}>{product.nombre}</h1>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left', color: 'white', fontSize: '18px'}}>
                <div style={{ marginLeft: '6%'}}>
                    <p><strong>Id: </strong> {product.id}</p>
                    <p><strong>Nombre: </strong> {product.nombre}</p>
                    <p><strong>Referencia: </strong> {product.referencia}</p>
                    <p><strong>Precio: </strong> ${product.precio}</p>
                </div>
                <div style={{ marginLeft: '5%'}}>
                    <p><strong>Peso: </strong> {product.peso}g</p>
                    <p><strong>Categoría: </strong> {product.categoria}</p>
                    <p><strong>Stock: </strong> {product.stock}</p>
                    <p><strong>Fecha de Creación: </strong> {formattedDate}</p>
                </div>
            </div>
        </div>
    );
};

// Estilos en línea para el contenedor del producto
const productContainerStyle = {
    margin: '20px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const homeContainerStyle = {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundImage: 'linear-gradient(to bottom, #645C59, #433129 58%, #2A0D00)', /* Degradado de arriba a abajo */
    minHeight: '68vh',
};

export default ProductItem;