//Componente común que se puede usar en todas las páginas para la navegación o como título.

import React from 'react';
import { Link } from 'react-router-dom';
import CoffeeIcon from '@mui/icons-material/Coffee';
import FlatwareIcon from '@mui/icons-material/Flatware';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1 style={{ margin: '15px 50px' }}>KONECTA Cafeterías</h1>
            <div style={{ marginRight: '20px' }}>
                <CoffeeIcon fontSize="large"/>
                <FlatwareIcon fontSize="large"/>
            </div>
            <h1 style={{ margin: '15px 50px' }}>|</h1>
            <nav>
                <ul style={navListStyle}>
                <li>
                    <Link to="/" style={linkStyle}>Home</Link> {/* Enlace a la página de inicio */}
                </li>
                <li>
                    <Link to="/productos" style={linkStyle}>Productos</Link>
                </li>
                <li>
                    <Link to="/ventas" style={linkStyle}>Ventas</Link>
                </li>
                </ul>
            </nav>
        </header>
    );
};

// Estilos en línea para el header
const headerStyle = {
    backgroundColor: '#000',
    color: 'white',
    padding: '10px 0',
    justifyItems: 'flex-start',
    display: 'flex',
    alignItems: 'center'
};

const navListStyle = {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '18px',
};

export default Header;