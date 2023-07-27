import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddActorForm from './components/AddActorForm'; 
import AddDirectorForm from './components/AddDirectorForm'; 
import AddMovieForm from './components/AddMovieForm'; 
import UpdateActorForm from './components/UpdateActorForm'; 
import UpdateDirectorForm from './components/UpdateDirectorForm'; 
import UpdateMovieForm from './components/UpdateMovieForm'; 
import DataDisplay from './components/DataDisplay'; 
import ActorsDisplay from './components/ActorsDisplay'; 
import DirectorsDisplay from './components/DirectorsDisplay'; 
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container">
    <Link className="navbar-brand" to="#">Movie Land</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="." id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Agregar
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/agregar-actor">Agregar Actor</Link></li>
            <li><Link className="dropdown-item" to="/agregar-director">Agregar Director</Link></li>
            <li><Link className="dropdown-item" to="/agregar-pelicula">Agregar Película</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="." id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Actualizar
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/actualizar-actor/:id">Actualizar actor</Link></li>
            <li><Link className="dropdown-item" to="/actualizar-director/:id">Actualizar director</Link></li>
            <li><Link className="dropdown-item" to="/actualizar-pelicula/:id">Actualizar película</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/mostrar-peliculas">Mostrar Peliculas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/mostrar-actores">Mostrar Actores</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/mostrar-directores">Mostrar Directores</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
       
<div style={{marginTop: '4rem'}}>
  <Routes>
    <Route path="/mostrar-peliculas" element={<DataDisplay />} />
    <Route path="/mostrar-actores" element={<ActorsDisplay />} />
    <Route path="/mostrar-directores" element={<DirectorsDisplay />} />
    <Route path="/agregar-actor" element={<AddActorForm />} />
    <Route path="/agregar-director" element={<AddDirectorForm />} />
    <Route path="/agregar-pelicula" element={<AddMovieForm />} />
    <Route path="/actualizar-actor/:id" element={<UpdateActorForm />} />
    <Route path="/actualizar-director/:id" element={<UpdateDirectorForm />} />
    <Route path="/actualizar-pelicula/:id" element={<UpdateMovieForm />} />
  </Routes>
</div>



      </div>
      <Footer />
    </Router>

    
  );
};

export default App;
