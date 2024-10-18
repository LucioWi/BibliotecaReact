import React from 'react';
import '../AgregarLibros.css';
import LibrosTable from './LibrosTable';

const AgregarLibros = () => (
  <div>
    <div className="containerBotonesAgregar">
      <button className='Agregar'>+ Añadir Libro</button>
      <button className='AgregarAPI'>+ Añadir Libro (Google Books API)</button>
    </div>
    <LibrosTable />
  </div>
);
export default AgregarLibros;

  