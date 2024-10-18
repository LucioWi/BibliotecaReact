import { useState } from 'react';
import './App.css';
import Reservas from './components/Reservas';
import AgregarLibros from './components/AgregarLibros';
import Usuarios from './components/Usuarios';
import Prestamo from './components/Prestamo';

function App() {
  const [content, setContent] = useState('');

  const handleButtonClick = (section) => {
    setContent(section);
  };

  return (
    <div>
      <header>
        <nav>
          <h1 className="brand">Between the sas</h1>
          <div className="nav-buttons">
            <button onClick={() => handleButtonClick('Prestamo')}>Por el momento</button>
            <button onClick={() => handleButtonClick('Reservas')}>no hacen</button>
            <button onClick={() => handleButtonClick('Agregar libros')}>falta</button>
          </div>
        </nav>
      </header>
    
      <div className="section">
        <button className="section-buttons" onClick={() => handleButtonClick('Prestamo')}>Prestamo</button>
        <button className="section-buttons" onClick={() => handleButtonClick('Reservas')}>Reservas</button>
        <button className="section-buttons" onClick={() => handleButtonClick('Agregar libros')}>Agregar libros</button>
        <button className="section-buttons" onClick={() => handleButtonClick('Usuarios')}>Usuarios</button>
      </div>

      <main>
        {content === 'Prestamo' && <Prestamo />}
        {content === 'Reservas' && <Reservas />}
        {content === 'Agregar libros' && <AgregarLibros />}
        {content === 'Usuarios' && <Usuarios />}
      </main>
    </div>
  );
}

export default App;
