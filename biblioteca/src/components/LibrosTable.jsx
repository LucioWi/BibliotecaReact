import React from 'react';
import '../LibrosTable.css';

const LibrosTable = ({ libros }) => {
  return (
    <table className="libros-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>ISBN</th>
          <th>Editorial</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {libros.map((libro, index) => (
          <tr key={index}>
            <td className="title">{libro.title}</td>
            <td>{libro.author}</td>
            <td>{libro.genre}</td>
            <td>{libro.isbn}</td>
            <td className="price">{libro.editorial}</td>
            <td className="quantity">{libro.quantity}</td>
          </tr>
        ))}
      </tbody>

    </table>
  );
};

export default LibrosTable;
