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
  const [authors, setAuthors] = useState([]);

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
    setAuthors([]); // Limpiar la lista de autores al cerrar el modal
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleAuthorChange = async (e) => {
    const { value } = e.target;
    setNewBook((prevBook) => ({ ...prevBook, author: value }));
  
    if (value.length > 2) {
      try {
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjUsImVtYWlsIjoibGF1dGFyb2x1bmE5MDZAZ21haWwuY29tIiwibmFtZSI6IkxhdXRhcm8iLCJzdXJuYW1lIjoiTHVuYSIsInJvbGUiOiJST0xFX0FETUlOIiwiaWF0IjoxNzI5NzgwMTIwLCJleHAiOjE3MzAzODQ5MjB9.IB7XKc6yCkAD1vXb7iqJDtkANgAmubV3Fv1XzRIIDQY";
        
        const response = await fetch(`http://api-biblioteca.test/api/author/search?name=${encodeURIComponent(value)}`, {
          headers: {
            'Authorization': token, // Agregar el token al encabezado
          },
        });
        const data = await response.json();
        console.log(data); // Debug: Verifica lo que devuelve la API
  
        if (data.authors && data.authors.length > 0) {
          setAuthors(data.authors);
        } else {
          setAuthors([]); // Limpiar si no hay autores
        }
      } catch (error) {
        console.error('Error fetching authors:', error);
        setAuthors([]); // Limpiar en caso de error
      }
    } else {
      setAuthors([]); // Limpiar la lista si hay menos de 3 caracteres
    }
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
              <input
                type="text"
                name="author"
                value={newBook.author}
                onChange={handleAuthorChange}
                required
              />
              {authors.length > 0 && (
                <ul className="author-suggestions">
                  {authors.map((author) => (
                    <li key={author.id} onClick={() => setNewBook((prevBook) => ({ ...prevBook, author: author.name }))}>
                      {author.name}
                    </li>
                  ))}
                  <li style={{ fontStyle: 'italic' }}>No encontraste el autor? Se guardará como nuevo autor.</li>
                </ul>
              )}
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
              <label>ISBN (10 o 13 dígitos) *</label>
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
