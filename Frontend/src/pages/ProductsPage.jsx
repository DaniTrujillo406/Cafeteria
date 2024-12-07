//Página para crear, editar, eliminar y listar los productos. 

import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/api';
import ProductForm from '../components/ProductForm';
import { Button } from '@mui/material';
import ProductsTable from '../components/ProductsTable';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const navigate = useNavigate();

    const fetchProducts = async () => {
        const response = await getProducts();
        setProducts(response.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleView = (id) => {
        // Redirige a una página de detalles con el ID del producto
        navigate(`/producto/${id}`);
    };

    return (
        <div style={homeContainerStyle}>
            <h1 style={{color: 'white'}}>Gestión de Productos de la Cafetería</h1>
            {editing ? (
                <ProductForm currentProduct={currentProduct} setEditing={setEditing} refreshProducts={fetchProducts} />
            ) : ( 
                <Button variant="contained"
                    style={{backgroundColor: 'white', color: 'black', borderRadius: '15px', width: '15%', margin: '20px 0'}}
                    onClick={() => {setEditing(true);}}
                >
                    <div style={{display: 'flex'}}>
                        <AddIcon fontSize="large" sx={{marginRight: '5px'}}/>
                        <span style={{ paddingTop: '7px' }}>Añadir Productos</span>
                    </div>
                </Button>
            )}
            <ProductsTable productos={products} refreshProducts={fetchProducts} setEditing={setEditing} setCurrentProduct={setCurrentProduct} onView={handleView}/>
            {/* <ProductList products={products} refreshProducts={fetchProducts} setEditing={setEditing} setCurrentProduct={setCurrentProduct} /> */}
        </div>
    );
};

export default ProductsPage;

// Estilos en línea para el home
const homeContainerStyle = {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundImage: 'linear-gradient(to bottom, #645C59, #433129 58%, #2A0D00)', /* Degradado de arriba a abajo */
    minHeight: '100vh',
};