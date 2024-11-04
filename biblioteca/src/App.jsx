import { useState } from 'react';
import './App.css';
import Reservas from './components/Reservas';
import AgregarLibros from './components/AgregarLibros';
import Usuarios from './components/Usuarios';
import Prestamo from './components/Prestamo';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Inicio from './components/Inicio';
import PanelAdmin from './components/Inicio';

function App() {
  const [content, setContent] = useState('Inicio');
  const handleButtonClick = (section) => {
    setContent(section);
    setShowDropdown(false); // Cierra el dropdown si se hace clic en otro botón
  };
  return (
    <div>
      <Header />

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

      <Footer />

    </div>
  );
}

export default App;
