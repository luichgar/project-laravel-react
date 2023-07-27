import React, { useState } from 'react';
import { createDirector } from '../services/DirectorService';

const AddDirectorForm = () => {
  const [director, setDirector] = useState({
    name: '',
    birth_year: '',
    country: '',
    is_removed: false,
  });

  const handleChange = event => {
    const value = event.target.name === 'is_removed' ? event.target.checked : event.target.value;
    setDirector({ ...director, [event.target.name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const newDirector = await createDirector(director);
    if (newDirector) {
      alert('Director añadido con éxito');
      // Limpiar el formulario después de agregar el director exitosamente
      setDirector({
        name: '',
        birth_year: '',
        country: '',
        is_removed: false,
      });
    } else {
      alert('Hubo un problema añadiendo el director');
    }
  };

  return (
<div className="d-flex justify-content-center">
  <div className="card" style={{width: "30rem"}}>
    <div className="card-body">
    <h2 className="text-center">Agregar Director</h2>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={director.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="birth_year">Año de Nacimiento:</label>
          <input
            type="number"
            className="form-control"
            id="birth_year"
            name="birth_year"
            value={director.birth_year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">País:</label>
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            value={director.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="is_removed"
            name="is_removed"
            checked={director.is_removed}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="is_removed">
            ¿Eliminado?
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Añadir Director</button>
      </form>
    </div>
  </div>
</div>

  );
};

export default AddDirectorForm;