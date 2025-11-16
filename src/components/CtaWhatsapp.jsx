import React from 'react';
import './CtaWhatsapp.css';
import iconWhatsapp from '../assets/whatsapp-icon.svg';

function CtaWhatsapp({ title }) {
  const defaultTitle = "Fale conosco através do WhatsApp";

  return (
    <div className="cta-whatsapp-wrapper">
      <section className="cta-whatsapp">
        <h2 className="section-title-cta">{title || defaultTitle}</h2>
        <a 
          href="https://wa.me/5511970986716?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos" 
          className="button-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={iconWhatsapp} alt="WhatsApp Icon" />
          Chat no WhatsApp
        </a>
      </section>
    </div>
  );
}

export default CtaWhatsapp;