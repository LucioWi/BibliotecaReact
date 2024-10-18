import React from 'react';
import '../AgregarLibros.css'

const AgregarLibros = () => (
    <div>
        <div className="containerBotonesAgregar">
            <button className='Agregar'>+ Añadir Libro</button>
            <button className='AgregarAPI'>+ Añadir Libro (Google Books API)</button>
        </div>
    </div>
);

  export default AgregarLibros;
  