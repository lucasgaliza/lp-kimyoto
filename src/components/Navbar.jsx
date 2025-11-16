import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logoKimyoto from '../assets/logo.svg'; 

function Navbar() {
  return (
    <header className="header-wrapper">
      <nav className="header">
        <div className="logo">
          <Link to="/">
            <img src={logoKimyoto} alt="Logo Kimyoto Alimentos" />
          </Link>
        </div>
        <div className="menu-items">
          <Link to="/produtos">Produtos</Link>
          <Link to="/sobre">Institucional</Link>
          <Link to="/contato" className="button-header">Fale conosco</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;