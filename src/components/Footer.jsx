import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoFooter from '../assets/logo-footer.svg';
import iconLinkedin from '../assets/icon-linkedin.svg';
import iconInstagram from '../assets/icon-instagram.svg';

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="footer-logo">
          <img src={logoFooter} alt="Logo Kimyoto Alimentos" />
          <p>
            © 2025 Kimyoto Alimentos.<br />
            Todos os direitos reservados.
          </p>
        </div>

        <div className="footer-social">
          <p>Nos siga nas redes sociais!</p>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={iconLinkedin} alt="LinkedIn" width="40" height="40" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={iconInstagram} alt="Instagram" width="40" height="40" />
            </a>
          </div>
        </div>

        <nav className="footer-nav">
          <h3>Produtos</h3>
          <Link to="/produtos#temperos">Temperos</Link>
          <Link to="/produtos#chas">Chás</Link>
          <Link to="/produtos#graos">Grãos</Link>
        </nav>

        <nav className="footer-nav">
          <h3>Institucional</h3>
          <Link to="/sobre#quem-somos">Quem somos</Link>
          <Link to="/sobre#como-comprar">Como comprar</Link>
          <Link to="/sobre#junte-se">Junte-se a família!</Link>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;