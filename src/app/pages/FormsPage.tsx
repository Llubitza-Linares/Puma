import React from 'react';
import { useForm } from 'react-hook-form';

const FormsPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Puedes hacer lo que necesites con los datos del formulario aquí
  };

  return (
    <div
      style={{
        backgroundColor: 'orange',
        padding: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h2>Buscar Rutas y Horarios</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Origen:</label>
          <input type="text" {...register('origen')} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Destino:</label>
          <input type="text" {...register('destino')} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Fecha:</label>
          <input type="date" {...register('fecha')} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Hora:</label>
          <input type="time" {...register('hora')} />
        </div>

        <button type="submit" style={{ width: '100%' }}>Buscar</button>
      </form>
    </div>
  );
};

export default FormsPage;
