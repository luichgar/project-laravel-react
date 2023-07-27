import React, { useState, useEffect } from 'react';

const DirectorsDisplay = () => {
  const [directors, setDirectors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/directors');
      const data = await response.json();
      setDirectors(data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDirectors = directors.filter(director =>
    director.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    director.birth_year.toString().includes(searchTerm) ||
    director.country.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleUpdateDirector = (directorId) => {
    // Redirigir al usuario a la página de actualización con el ID del director
    window.location.href = `/actualizar-director/${directorId}`;
  };


  return (
<div className="container">
  <h2 className="my-4">Directores</h2>
  <input type="text" className="form-control my-4" value={searchTerm} onChange={handleSearchChange} placeholder="Search..." />
  <div className="row">
    {filteredDirectors.map((director) => (
      <div key={director.id} className="col-12 col-md-4 col-md-6 mb-4 d-flex">
        <div className="card flex-fill h-70">
          <div className="card-body">
            <h5 className="card-title">{director.name}</h5>
            <p className="card-text">Pais: {director.country}</p>
            <p className="card-text">Año de Nacimiento: {director.birth_year}</p>
            <button
              className="btn btn-primary"
              onClick={() => handleUpdateDirector(director.id)}
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

export default DirectorsDisplay;