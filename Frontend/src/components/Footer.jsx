//Componente común que se puede usar en todas las páginas para la navegación o como título.

import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>
                &copy; {new Date().getFullYear()} KONECTA Cafeteria. Todos los derechos reservados.
            </p>
            <ul style={styles.links}>
                <li><p>Acerca de</p></li>
                <li><p>Contacto</p></li>
                <li><p>Política de privacidad</p></li>
            </ul>
        </footer>
    );
};

// Estilos en línea para el footer
const styles = {
    footer: {
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        padding: '20px 0',
    },
    text: {
        margin: 0,
        fontSize: '14px',
    },
    links: {
        listStyleType: 'none',
        padding: 0,
        margin: '10px 0 0',
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
    }
};

export default Footer;