import React, { useState, useEffect } from 'react';

const ActorsDisplay = () => {
  const [actors, setActors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/actors');
      const data = await response.json();
      setActors(data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredActors = actors.filter(actor =>
    actor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    actor.birth_year.toString().includes(searchTerm) ||
    actor.country.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleUpdateActor = (actorId) => {
    // Redirigir al usuario a la página de actualización con el ID del actor
    window.location.href = `/actualizar-actor/${actorId}`;
  };

  return (
    <div className="container">
      <h2 className="my-4">Actores</h2>
      <input type="text" className="form-control my-4" value={searchTerm} onChange={handleSearchChange} placeholder="Search..." />
      <div className="row">
        {filteredActors.map((actor) => (
          <div key={actor.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{actor.name}</h5>
                <p className="card-text">Country: {actor.country}</p>
                <p className="card-text">Birth Year: {actor.birth_year}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleUpdateActor(actor.id)}
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
export default ActorsDisplay;