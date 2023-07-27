import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById, updateMovieById } from '../services/MovieService';

const UpdateMovieForm = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({
    title: '',
    year: '',
    length_minutes: '',
    genre: '',
    director_id: '',
    actor_id: '',
  });

  useEffect(() => {
    getMovieById(id)
      .then(data => {
        setMovie({
          title: data.title,
          year: data.year,
          length_minutes: data.length_minutes,
          genre: data.genre,
          director_id: data.director_id,
          actor_id: data.actor_id,
        });
      })
      .catch(error => {
        console.error('Error al obtener los detalles de la película:', error);
      });
  }, [id]);

  const handleChange = event => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await updateMovieById(id, movie);
      alert('Película actualizada con éxito');
    } catch (error) {
      console.error('Error al actualizar la película:', error);
      alert('Hubo un problema al actualizar la película');
    }
  };

  return (
<div className="d-flex justify-content-center">
  <div className="card" style={{width: "30rem"}}>
    <div className="card-body">
    <h2 className="text-center">Actualizar Película</h2>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={movie.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Año:</label>
          <input
            type="number"
            className="form-control"
            id="year"
            name="year"
            value={movie.year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="length_minutes">Duración (minutos):</label>
          <input
            type="number"
            className="form-control"
            id="length_minutes"
            name="length_minutes"
            value={movie.length_minutes}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Género:</label>
          <input
            type="text"
            className="form-control"
            id="genre"
            name="genre"
            value={movie.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="director_id">ID del Director:</label>
          <input
            type="number"
            className="form-control"
            id="director_id"
            name="director_id"
            value={movie.director_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="actor_id">ID del Actor:</label>
          <input
            type="number"
            className="form-control"
            id="actor_id"
            name="actor_id"
            value={movie.actor_id}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Actualizar Película</button>
      </form>
    </div>
  </div>
</div>


  );
};

export default UpdateMovieForm;
