// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Inicio = ({ handleButtonClick }) => {
  const handleCardClick = (section) => {
    // Desplazarse a la parte superior
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Llamar a la función que maneja el clic
    handleButtonClick(section);
  };

  return (
    <div>
      <h2>Bienvenido al panel de administrador.</h2>
      <div className="card-container">
        <div className="card" onClick={() => handleCardClick('Prestamo')}>
          <img src="./img/imgPrestamo.png" alt="Image 1" />
          <h3>Prestamo</h3>
          <p>Administra los libros prestados por los alumnos y profesores.</p>
        </div>
        <div className="card" onClick={() => handleCardClick('Reservas')}>
          <img src="./img/imgReserva.png" alt="Image 2" />
          <h3>Reserva</h3>
          <p>Administra las reservas de libros por los alumnos y profesores.</p>
        </div>
        <div className="card" onClick={() => handleCardClick('Agregar libros')}>
          <img src="./img/imgAgregarLibros.png" alt="Image 3" />
          <h3>Agregar libros</h3>
          <p>Añade o elimina los libros de la biblioteca.</p>
        </div>
        <div className="card" onClick={() => handleCardClick('Usuarios')}>
          <img src="./img/imgUsuarios.png" alt="Image 4" />
          <h3>Usuarios</h3>
          <p>Administra los distintos usuarios que se registraron en la página.</p>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
