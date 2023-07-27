import React, { useState, useEffect } from 'react';

const DataDisplay = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const moviesResponse = await fetch('http://127.0.0.1:8000/api/movies');
      const moviesData = await moviesResponse.json();

      const moviesWithExtraData = await Promise.all(
        moviesData.map(async movie => {
          const directorResponse = await fetch(`http://127.0.0.1:8000/api/directors/${movie.id}`);
          const directorData = await directorResponse.json();

          const actorResponse = await fetch(`http://127.0.0.1:8000/api/actors/${movie.id}`);
          const actorData = await actorResponse.json();

          return {
            ...movie,
            director: directorData,
            actor: actorData,
          };
        })
      );

      setData(moviesWithExtraData);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.director && item.director.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (item.actor && item.actor.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    item.year.toString().includes(searchTerm) ||
    item.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.length_minutes.toString().includes(searchTerm)
  );

  const handleUpdateMovie = (movieId) => {
    window.location.href = `/actualizar-pelicula/${movieId}`;
  };

  return (
    <div className="container">
      <h2 className="my-4">Peliculas</h2>
      <input type="text" className="form-control my-4" value={searchTerm} onChange={handleSearchChange} placeholder="Search..." />
      <div className="row">
        {filteredData.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Año: {item.year}</h6>
                <p className="card-text">Duración: {item.length_minutes} minutos</p>
                <p className="card-text">Género: {item.genre}</p>
                <p className="card-text">Director: {item.director ? item.director.name : 'N/A'}</p>
                <p className="card-text">Actor: {item.actor ? item.actor.name : 'N/A'}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleUpdateMovie(item.id)}
                >
                  Actualizar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataDisplay;
