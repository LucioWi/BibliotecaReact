import React, { useState } from 'react';
import '../Register.css';
import Header from '../layout/Header';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
    telefono: '',
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
        <h2 className="form-title">Registro de Usuario</h2>
        <form onSubmit={handleSubmit} className="user-form">
          <div className="form-group">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder='Nombre...'
              value={formData.nombre}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              placeholder='Apellido...'
              value={formData.apellido}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
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
            <label htmlFor="telefono" className="form-label">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder='Telefono...'
              value={formData.telefono}
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
          <button type="submit" className="form-button">Registrar</button>
        </form>
      </div>
    </>
  );
};

export default Register;
