import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './CtaWhatsapp.css'; 

import iconWhatsapp from '../assets/whatsapp-icon.svg';

function CtaWhatsapp({ title }) {
  const defaultTitle = "Fale conosco através do WhatsApp";
  const navigate = useNavigate();

  const handleWhatsappClick = (e) => {
    e.preventDefault(); 
    
    window.open("https://wa.me/5511970986716?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos", "_blank");

    navigate('/contato/sucesso', { state: { fromWhatsapp: true } });
  };

  return (
    <div className="cta-whatsapp-wrapper">
      <section className="cta-whatsapp">
        <h2 className="section-title-cta">{title || defaultTitle}</h2>
        <a 
          href="#" 
          onClick={handleWhatsappClick}
          className="button-whatsapp"
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