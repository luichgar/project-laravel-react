import React, { useState } from 'react';
import { createActor } from '../services/ActorService';

const AddActorForm = () => {
  const [actor, setActor] = useState({ name: '', birth_year: '', country: '', is_removed: false });

  const handleChange = event => {
    const value = event.target.name === 'is_removed' ? event.target.checked : event.target.value;
    setActor({ ...actor, [event.target.name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const newActor = await createActor(actor);
    if (newActor) {
      alert('Actor añadido con éxito');
    } else {
      alert('Hubo un problema añadiendo el actor');
    }
  };

  return (
<div className="d-flex justify-content-center">
  <div className="card" style={{width: "30rem"}}>
    <div className="card-body">
    <h2 className="text-center">Agregar Actor</h2>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={actor.name}
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
            value={actor.birth_year}
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
            value={actor.country}
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
            checked={actor.is_removed}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="is_removed">
            ¿Eliminado?
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Añadir Actor</button>
      </form>
    </div>
  </div>
</div>


  );
};

export default AddActorForm;
