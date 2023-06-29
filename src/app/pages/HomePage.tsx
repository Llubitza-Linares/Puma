import React from 'react';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: '300px', flex: '1 1 300px' }}>
        <div
          style={{
            width: '100%',
            height: '350px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            borderRadius: '5px',
            overflow: 'hidden',
          }}
        >
          <img
            src="./public/pumakatari.jpg" // Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
            alt="Imagen"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div
          style={{
            width: '100%',
            height: '350px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            borderRadius: '5px',
            overflow: 'hidden',
            marginTop: '20px',
          }}
        >
          <img
            src="./public/pumaso.jpg" // Reemplaza "ruta-de-la-otra-imagen.jpg" con la ruta de tu otra imagen
            alt="Otra Imagen"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
      <div
        style={{
          width: '100%',
          maxWidth: '300px',
          height: 'fit-content',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          borderRadius: '5px',
          padding: '20px',
          backgroundColor: 'orange', // Agrega el fondo naranja aquí
        }}
      >
        <h2>PUMAKATARI</h2>
        <p>La Paz Bus es un sistema masivo de autobuses urbanos que opera en la ciudad de La Paz, sede de gobierno de Bolivia.1​ Es administrado por el Servicio de Transporte Municipal (SETRAM), que está a cargo del Gobierno Autónomo Municipal de La Paz2​3​

La primera modalidad del sistema, denominado PumaKatari, fue puesta en marcha el 24 de febrero de 2014 y fue planificado para convertirse en un bus alimentador complementario para la segunda modalidad del sistema que se planifica como un sistema BRT que operará en las arterias principales de la ciudad. El servicio atiende a la demanda de los ciudadanos que viven en las zonas más alejadas de La Paz.

Hasta 2021, el sistema operaba las 24 horas del día, situación que cambió a sólo 14 horas por decisión de la nueva administración municipal. Cuenta con siete líneas o rutas dentro de la ciudad de La Paz, 4​ con una estación de transbordo de pasajeros del bus PumaKatari ubicada en el Parque Urbano Central y con puntos de intercambio modal compartidos con las líneas roja, amarilla y verde del sistema de transporte aéreo por cable Mi Teleférico.

Es el primer sistema de transporte público operado por el Estado desde la "privatización" del transporte público ocurrida como consecuencia del Decreto Supremo 21060.​</p>
        {/* Resto del contenido del texto */}
      </div>
    </div>
  );
};

export default HomePage;
