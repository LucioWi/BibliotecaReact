import React, { useState } from 'react';
import '../AgregarLibros.css';
import LibrosTable from './LibrosTable';
import Modal from './Modal';

const AgregarLibros = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [libros, setLibros] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    isbn: '',
    editorial: '',
    quantity: '',
    imageUrl: '',
  });

  const handleAddBookClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewBook({
      title: '',
      author: '',
      genre: '',
      description: '',
      isbn: '',
      editorial: '',
      quantity: '',
      imageUrl: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSaveBook = (e) => {
    e.preventDefault();
    setLibros((prevLibros) => [...prevLibros, newBook]);
    handleCloseModal();
  };

  return (
    <div>
      <div className="containerBotonesAgregar">
        <button className='Agregar' onClick={handleAddBookClick}>+ Añadir Libro</button>
        <button className='AgregarAPI'>+ Añadir Libro (Google Books API)</button>
      </div>
      <LibrosTable libros={libros} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Añadir Nuevo Libro</h2>
        <form onSubmit={handleSaveBook}>
          <div className="form-row">
            <div className="form-group">
              <label>Título *</label>
              <input type="text" name="title" value={newBook.title} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Autor *</label>
              <input type="text" name="author" value={newBook.author} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Género *</label>
              <input type="text" name="genre" value={newBook.genre} onChange={handleInputChange} required />
            </div>
          </div>
          <div className="form-group">
            <label>Breve descripción *</label>
            <textarea className='text-area'
              name="description" 
              value={newBook.description} 
              onChange={handleInputChange} 
              required 
              maxLength="500"
            />
            <div className="char-count">
              Caracteres: {newBook.description.length}/500
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>ISBN (10 o 13 digitos) *</label>
              <input type="text" name="isbn" value={newBook.isbn} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Editorial *</label>
              <input type="text" name="editorial" value={newBook.editorial} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Cantidad *</label>
              <input type="number" name="quantity" value={newBook.quantity} onChange={handleInputChange} required />
            </div>
          </div>
          <div className="form-group">
            <label>URL de la imagen * (debe terminar en 'jpg', 'jpeg', o 'png')</label>
            <input className="inputImg" type="text" name="imageUrl" value={newBook.imageUrl} onChange={handleInputChange} />
          </div>
          <div className="significadoAsterisco">
              un * significa que es un campo obligatorio a rellenar.
          </div>
          <button type="submit" className="save-button">Añadir</button>
        </form>
      </Modal>
    </div>
  );
};

export default AgregarLibros;
