import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logoKimyoto from '../assets/logo.svg'; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-wrapper">
      <nav className="header">
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logoKimyoto} alt="Logo Kimyoto Alimentos" />
          </Link>
        </div>

        <button 
          className="hamburger-button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E22F28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E22F28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>

        <div className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/produtos" onClick={handleLinkClick}>Produtos</Link>
          <Link to="/sobre" onClick={handleLinkClick}>Institucional</Link>
          <Link to="/contato" className="button-header" onClick={handleLinkClick}>Fale conosco</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;