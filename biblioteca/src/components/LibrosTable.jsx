import React from 'react';
import '../LibrosTable.css';

const LibrosTable = () => {
  return (
    <table className="libros-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>ISBN</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>rar</td>
        </tr>
      </tbody>
    </table>
    
  );
};

export default LibrosTable;