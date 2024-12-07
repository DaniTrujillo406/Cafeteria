//Inicio de la app

import React from 'react';
import Img1 from '../assets/Img1.jpg'; // Importa la imagen
import Img2 from '../assets/Img2.png';
import Img3 from '../assets/Img3.jpg';
import Img4 from '../assets/Img4.jpg';
import Img5 from '../assets/Img5.jpg';
import Img6 from '../assets/Img6.png';
import {Box, Button} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const Home = () => {
    return (
        <div style={homeContainerStyle}>
            {/* Seccion hora del café */}
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${Img1})`, margin: '0 4%', ...imageBackground}}>
                    <p style={{margin: '30px'}}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                    <Button variant="contained"
                        style={{backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        color: 'black', borderRadius: '15px'
                        }}
                    >
                        Información
                    </Button>
                </div>
                <div>
                    <h1 style={{color: 'white'}}>Hora del Café!</h1>
                    <hr style={{border: '3px solid black', height: 0, width: '90%', boxShadow: '0 1px 4px 0 #2A0D00', borderRadius: '100px/10px'}}/>
                    <br />
                    <img src={Img4} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5))`,
                        margin: '0 4%', borderRadius: '5px', width: '75%'}}/>
                </div>
                <br />
            </div>
            <br />
            {/* Seccion sobre nosotros */}
            <h1 style={{color: 'white'}}>Sobre Nosotros</h1>
            <hr style={{border: '3px solid black', height: 0, width: '90%', boxShadow: '0 1px 4px 0 #2A0D00', borderRadius: '100px/10px'}}/>
            <br />
            <div style={{display: 'flex', justifyContent: ' center'}}>
                <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${Img3})`, margin: '0 4%', ...imageBackground}}>
                    <h2 style={{margin: '30px'}}>
                        KONECTA <br />Cafeteria
                    </h2>
                </div>
                <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${Img2})`, margin: '0 4%', ...imageBackground}}>
                    <p style={{margin: '30px'}}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
            <br />
            {/* Seccion testimonios */}
            <h1 style={{color: 'white'}}>Testimonios</h1>
            <hr style={{border: '3px solid black', height: 0, width: '90%', boxShadow: '0 1px 4px 0 #2A0D00', borderRadius: '100px/10px'}}/>
            <br />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${Img5})`, margin: '0 2%', ...imageBackgroundTestominy}}>
                    <img src={Img6} style={{margin: '0 4%', width: '40%', margin: '15px 0'}}/>
                    <Box component="section" sx={{
                            width: '100%',
                            height: '60%',
                            borderRadius: 1,
                            bgcolor: 'white',
                            color: 'black'
                    }}>
                        <p style={{marginTop: '30px'}}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                        <p style={{fontWeight: 'bold'}}>- Juan</p>
                        <div>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                        </div>
                    </Box>
                </div>
                <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${Img5})`, margin: '0 2%', ...imageBackgroundTestominy}}>
                    <img src={Img6} style={{margin: '0 4%', width: '40%', margin: '15px 0'}}/>
                    <Box component="section" sx={{
                            width: '100%',
                            height: '60%',
                            borderRadius: 1,
                            bgcolor: 'white',
                            color: 'black'
                    }}>
                        <p style={{marginTop: '30px'}}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                        <p style={{fontWeight: 'bold'}}>- Juan</p>
                        <div>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                        </div>
                    </Box>
                </div>
                <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${Img5})`, margin: '0 2%', ...imageBackgroundTestominy}}>
                    <img src={Img6} style={{margin: '0 4%', width: '40%', margin: '15px 0'}}/>
                    <Box component="section" sx={{
                            width: '100%',
                            height: '60%',
                            borderRadius: 1,
                            bgcolor: 'white',
                            color: 'black'
                    }}>
                        <p style={{marginTop: '30px'}}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                        <p style={{fontWeight: 'bold'}}>- Juan</p>
                        <div>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                        </div>
                    </Box>
                </div>
                <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${Img5})`, margin: '0 2%', ...imageBackgroundTestominy}}>
                    <img src={Img6} style={{margin: '0 4%', width: '40%', margin: '15px 0'}}/>
                    <Box component="section" sx={{
                            width: '100%',
                            height: '60%',
                            borderRadius: 1,
                            bgcolor: 'white',
                            color: 'black'
                    }}>
                        <p style={{marginTop: '30px'}}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                        <p style={{fontWeight: 'bold'}}>- Juan</p>
                        <div>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                            <StarIcon fontSize="large" sx={{ color: 'orange' }}/>
                        </div>
                    </Box>
                </div>
            </div>
            <br />
        </div>
    );
};

// Estilos en línea para el home
const homeContainerStyle = {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundImage: 'linear-gradient(to bottom, #645C59, #433129 58%, #2A0D00)', /* Degradado de arriba a abajo */
    minHeight: '100vh',
};

const linksContainerStyle = {
    marginTop: '20px',
};

const linkStyle = {
    margin: '0 10px',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '18px',
};

const imageBackground = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    width: '60%',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(#000, 0, 0, 0.9)',
    color: 'white',
    fontSize: '15px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    flexDirection: 'column',
    boxShadow: '5px 5px 12px rgba(0, 0, 0, 0.5)'
}

const imageBackgroundTestominy = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    width: '20%',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(#000, 0, 0, 0.9)',
    color: 'white',
    fontSize: '15px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    flexDirection: 'column',
    boxShadow: '5px 5px 12px rgba(0, 0, 0, 0.5)'
}

export default Home;
