import { useState } from 'react';
import './App.css';
import Reservas from './components/Reservas';
import AgregarLibros from './components/AgregarLibros';
import Usuarios from './components/Usuarios';

function App() {
  const [content, setContent] = useState('');

  const handleButtonClick = (section) => {
    setContent(section);
  };

  return (
    <div>
      <header>
        <nav>
        <button onClick={() => handleButtonClick('Prestamo')}>Prestamo</button>
          <button onClick={() => handleButtonClick('Reservas')}>Reservas</button>
          <button onClick={() => handleButtonClick('Agregar libros')}>Agregar libros</button>
          <button onClick={() => handleButtonClick('Usuarios')}>Usuarios</button>
        </nav>
      </header>
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
