import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDirectorById, updateDirectorById } from '../services/DirectorService';

const UpdateDirectorForm = () => {
  const { id } = useParams();
  const [director, setDirector] = useState({
    name: '',
    birth_year: '',
    country: '',
  });

  useEffect(() => {
    getDirectorById(id)
      .then(data => {
        setDirector({
          name: data.name,
          birth_year: data.birth_year,
          country: data.country,
        });
      })
      .catch(error => {
        console.error('Error al obtener los detalles del director:', error);
      });
  }, [id]);

  const handleChange = event => {
    setDirector({ ...director, [event.target.name]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await updateDirectorById(id, director);
      alert('Director actualizado con éxito');
    } catch (error) {
      console.error('Error al actualizar el director:', error);
      alert('Hubo un problema al actualizar el director');
    }
  };

  return (
<div className="d-flex justify-content-center">
  <div className="card" style={{width: "30rem"}}>
    <div className="card-body">
    <h2 className="text-center">Actualizar Director</h2>
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
          <label htmlFor="birth_year">Año de nacimiento:</label>
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
        <button type="submit" className="btn btn-primary">Actualizar Director</button>
      </form>
    </div>
  </div>
</div>

  
  );
};

export default UpdateDirectorForm;

