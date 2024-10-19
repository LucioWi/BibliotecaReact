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
          <h1 className="brand">Between the Lines</h1>
          <div className="nav-buttons">
            <button onClick={() => handleButtonClick('Admin')}>Admin</button>
            <button onClick={() => handleButtonClick('Cart')}>Cart</button>
            <button onClick={() => handleButtonClick('Account')}>Account</button>
          </div>
        </nav>
      </header>

      <div className="section">
        {['Prestamo', 'Reservas', 'Agregar libros', 'Usuarios'].map((section) => (
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
        {content === 'Prestamo' && <Prestamo />}
        {content === 'Reservas' && <Reservas />}
        {content === 'Agregar libros' && <AgregarLibros />}
        {content === 'Usuarios' && <Usuarios />}
      </main>
    </div>
  );
}

export default App;
