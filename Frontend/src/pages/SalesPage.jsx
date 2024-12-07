//Página para registrar y listar las ventas.

import React, { useEffect, useState } from 'react';
import { getSales } from '../api/api';
import SaleForm from '../components/SaleForm';
import SalesTable from '../components/SalesTable';

const SalesPage = () => {
    const [sales, setSales] = useState([]);

    const fetchSales = async () => {
        const response = await getSales();
        setSales(response.data);
    };

    useEffect(() => {
        fetchSales();
    }, []);

    /* useEffect(() => {
        (async () => {
            const response = await getSales();
            const json = response.data;
            setSales(json);
        })();
    }, []); */

    return (
        <div style={homeContainerStyle}>
            {/* Seccion registrar venta */}
            <h1 style={{color: 'white'}}>Registrar Venta</h1>
            <hr style={{border: '3px solid black', height: 0, width: '90%', boxShadow: '0 1px 4px 0 #2A0D00', borderRadius: '100px/10px'}}/>
            <br />
            <SaleForm refreshSales={fetchSales} />
            <br />

            {/* Seccion vetas realizadas */}
            <h1 style={{color: 'white'}}>Ventas Realizadas</h1>
            <hr style={{border: '3px solid black', height: 0, width: '90%', boxShadow: '0 1px 4px 0 #2A0D00', borderRadius: '100px/10px'}}/>
            <br />
            <SalesTable productos={sales} />
            {/* <SalesList sales={sales} /> */}
        </div>
    );
};

export default SalesPage;

// Estilos en línea para el home
const homeContainerStyle = {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundImage: 'linear-gradient(to bottom, #645C59, #433129 58%, #2A0D00)', /* Degradado de arriba a abajo */
    minHeight: '100vh',
};