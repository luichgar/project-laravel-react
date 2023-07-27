// components/APIController.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddActorForm from './AddActorForm'; // Corrige las rutas de importación
import AddDirectorForm from './AddDirectorForm'; // Corrige las rutas de importación
import AddMovieForm from './AddMovieForm'; // Corrige las rutas de importación
import UpdateActorForm from './UpdateActorForm'; // Corrige las rutas de importación
import UpdateDirectorForm from './UpdateDirectorForm'; // Corrige las rutas de importación
import UpdateMovieForm from './UpdateMovieForm'; // Corrige las rutas de importación

const APIController = () => {
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/agregar-actor" className="nav-link">Agregar Actor</Link>
            </li>
            <li className="nav-item">
              <Link to="/agregar-director" className="nav-link">Agregar Director</Link>
            </li>
            <li className="nav-item">
              <Link to="/agregar-pelicula" className="nav-link">Agregar Película</Link>
            </li>
            <li className="nav-item">
              <Link to="/actualizar-actor/:id" className="nav-link">Actualizar actor</Link>
            </li>
            <li className="nav-item">
              <Link to="/actualizar-director/:id" className="nav-link">Actualizar director</Link>
            </li>
            <li className="nav-item">
              <Link to="/actualizar-pelicula/:id" className="nav-link">Actualizar película</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/agregar-actor" element={<AddActorForm />} />
          <Route path="/agregar-director" element={<AddDirectorForm />} />
          <Route path="/agregar-pelicula" element={<AddMovieForm />} />
          <Route path="/actualizar-actor/:id" element={<UpdateActorForm />} />
          <Route path="/actualizar-director/:id" element={<UpdateDirectorForm />} />
          <Route path="/actualizar-pelicula/:id" element={<UpdateMovieForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default APIController;
