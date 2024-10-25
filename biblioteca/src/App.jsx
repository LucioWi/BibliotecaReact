import { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import Reservas from './components/Reservas';
import AgregarLibros from './components/AgregarLibros';
import Usuarios from './components/Usuarios';
import Prestamo from './components/Prestamo';
import Footer from './layout/Footer';
import Inicio from './components/Inicio';
import PanelAdmin from './components/Inicio';

function App() {
  const navigate = useNavigate(); // Inicializa el hook useNavigate
  const [content, setContent] = useState('Inicio');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleButtonClick = (section) => {
    setContent(section);
    setShowDropdown(false); // Cierra el dropdown si se hace clic en otro botón
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <header>
        <nav>
          <div className='headerLogo'>
            <a href="">
              <img className='headerLogo-img' src="./img/EnetLogo.png" alt="Logo" />
              <h1 className='headerLogo-text'>Enet Biblioteca</h1>
            </a>
          </div>
          <div className="nav-buttons">
            <button onClick={() => handleButtonClick('Admin')}>Admin</button>
            <button onClick={() => handleButtonClick('Cart')}>Cart</button>
            <div className="dropdown-container">
              <button onClick={toggleDropdown}>Account</button>
              {showDropdown && (
                <div className="dropdown">
                  <button onClick={() => navigate('/Inicio-Sesion')}>Iniciar sesión</button>{/* Redirige a /Inicio-Sesion */}
                  <button onClick={() => navigate('/register')}>Registrarse</button> {/* Redirige a /register */}
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      <div className="section">
        {['Inicio', 'Prestamo', 'Reservas', 'Agregar libros', 'Usuarios'].map((section) => (
          <button
            key={section}
            className={`section-buttons ${content === section ? 'selected' : ''}`}
            onClick={() => handleButtonClick(section)}
          >
            {section}
          </button>
        ))}
      </div>

      <main>
        {content === 'Inicio' && <Inicio handleButtonClick={handleButtonClick} />}
        {content === 'Prestamo' && <Prestamo />}
        {content === 'Reservas' && <Reservas />}
        {content === 'Agregar libros' && <AgregarLibros />}
        {content === 'Usuarios' && <Usuarios />}
        {content === 'Admin' && <PanelAdmin handleButtonClick={handleButtonClick} />}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
