import React from 'react';
import APIController from './APIController'; // Ajusta la ruta de importación

const APIPage = () => {
  return (
    <div className="main-container">
      <h1 className="text-center">Controlador de API</h1>
      <APIController />
    </div>
  );
};

export default APIPage;
