import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActorById, updateActorById } from '../services/ActorService';

const UpdateActorForm = () => {
  const { id } = useParams(); 
  const [actor, setActor] = useState({
    name: '',
    birth_year: '',
    country: '',
  });

  useEffect(() => {
    getActorById(id)
      .then(data => {
        setActor({
          name: data.name,
          birth_year: data.birth_year,
          country: data.country,
        });
      })
      .catch(error => {
        console.error('Error al obtener los detalles del actor:', error);
      });
  }, [id]);

  const handleChange = event => {
    setActor({ ...actor, [event.target.name]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await updateActorById(id, actor);
      alert('Actor actualizado con éxito');
    } catch (error) {
      console.error('Error al actualizar el actor:', error);
      alert('Hubo un problema al actualizar el actor');
    }
  };

  return (
<div className="d-flex justify-content-center">
  <div className="card" style={{width: "30rem"}}>
    <div className="card-body">
    <h2 className="text-center">Actualizar Actor</h2>
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
          <label htmlFor="birth_year">Año de nacimiento:</label>
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
        <button type="submit" className="btn btn-primary">Actualizar Actor</button>
      </form>
    </div>
  </div>
</div>


  );
};

export default UpdateActorForm;
