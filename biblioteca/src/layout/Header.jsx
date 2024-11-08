import React from 'react'
import '../Header.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate(); // Inicializa el hook useNavigate
    const handleButtonClick = (section) => {
        setContent(section);
        setShowDropdown(false); // Cierra el dropdown si se hace clic en otro botón
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const [enabled, setEnabled] = useState(() => {
        const savedMode = localStorage.getItem('dark-mode');
        return savedMode === 'true';
    });

    useEffect(() => {
        localStorage.setItem('dark-mode', enabled);
        if (enabled) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [enabled]);

    return (
        <header>
            <nav>
                <div className='headerLogo'>
                    <a href="">
                        <img className='headerLogo-img' src="./img/EnetLogo.png" alt="Logo" />
                        <h1 className='headerLogo-text'>Enet Biblioteca</h1>
                    </a>
                </div>
                <div className="nav-buttons">
                    <button onClick={() => handleButtonClick('Admin')}>Admin</button>
                    <button onClick={() => handleButtonClick('Cart')}>Cart</button>
                    <div className="dropdown-container">
                        <button onClick={toggleDropdown}>Account</button>
                        {showDropdown && (
                            <div className="dropdown">
                                <button onClick={() => navigate('/Inicio-Sesion')}>Iniciar sesión</button>{/* Redirige a /Inicio-Sesion */}
                                <button onClick={() => navigate('/register')}>Registrarse</button> {/* Redirige a /register */}
                            </div>
                        )}
                    </div>
                    <button onClick={() => setEnabled(!enabled)}> {enabled ? '☀️' : '🌙'}</button>

                </div>
            </nav>
        </header>
    )
}

export default Header;