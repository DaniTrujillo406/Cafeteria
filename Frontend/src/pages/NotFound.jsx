//Página que muestra un mensaje de error si el usuario accede a una ruta no válida.

import React from 'react';

const NotFound = () => {
    return (
        <div style={homeContainerStyle}>
            <h1 style={{color: 'white'}}>Oops, parece que algo salió mal</h1>
            <h2 style={{color: 'white'}}>404 - Página no encontrada</h2>
            <p style={{color: 'white'}}>La página que estás buscando no existe o ha sido movida.</p>
            <p style={{color: 'white'}}>Puede que el enlace esté roto o que hayas escrito mal la dirección.</p>
        </div>
    );
};

export default NotFound;

// Estilos en línea para el home
const homeContainerStyle = {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundImage: 'linear-gradient(to bottom, #645C59, #433129 58%, #2A0D00)', /* Degradado de arriba a abajo */
    minHeight: '100vh',
};