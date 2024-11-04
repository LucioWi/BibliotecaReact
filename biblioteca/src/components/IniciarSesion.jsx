import React, { useState } from 'react';
import '../InicioSesion.css'; 
import Header from '../layout/Header';

const IniciarSesion = () => {
  const [formData, setFormData] = useState({
    email: '',
    contraseña: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Datos enviados:', formData);
  };

  return (
    <>
    <Header />

    <div className="form-container">
      <h2 className="form-title">Iniciar Sesion</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email...'
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contraseña" className="form-label">Contraseña</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            placeholder='Constraseña...'
            value={formData.contraseña}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">Iniciar Sesion</button>
      </form>
    </div>
    </>
  );

};

export default IniciarSesion;