import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SobrePage.css';
import CtaWhatsapp from '../components/CtaWhatsapp';
import heroBg from '../assets/sobre-hero.webp';
import imgSpices from '../assets/sobre-spices.webp';
import imgGrains from '../assets/sobre-grains.webp';

function SobrePage() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
      <section 
        className="hero-sobre"
      >
        <img src={heroBg} alt="Casa estilo japonês" className="hero-sobre-image" />
        <div className="hero-sobre-copy">
        </div>
      </section>
      <div className="sobre-page-container">
        
        <section className="sobre-bloco-texto" id="quem-somos">
          <h2>Quem somos</h2>
          <p>Nascemos 20 anos atrás pelo amor à boa comida e do desejo de levar sabor autêntico para a mesa das famílias brasileiras. Começamos pequenos, mas com um grande sonho: transformar suas refeições em momentos especiais.</p>
        </section>

        <section className="sobre-image-grid">
          <img src={imgSpices} alt="Temperos variados" />
          <img src={imgGrains} alt="Grãos em sacos" />
        </section>

        <section className="sobre-bloco-texto" id="como-comprar">
          <h2>Como comprar</h2>
          <p>Entre em contato conosco através de um de nossos canais de atendimento ou um de nossos vendedores, entregamos em toda região de São Paulo.</p>
          <ul className="contato-lista">
            <li><strong>Telefone:</strong> (11) 2094-5811</li>
            <li><strong>Whatsapp:</strong> (11) 97098-6716</li>
            <li><strong>Email:</strong> contato.kimyoto@gmail.com</li>
          </ul>
        </section>

        <section className="sobre-bloco-texto" id="junte-se">
          <h2>Junte-se a nossa família!</h2>
          <p>Seja para expandir seu mix de produtos ou começar do zero, temos condições acessíveis e negociáveis, com margens atrativas especially nas primeiras compras.</p>
          <p>Aproveite nossos preços competitivos de atacado e impulsione suas vendas com nosso portfólio diversificado de especiarias.</p>
        </section>

      </div>

      <CtaWhatsapp title="Fale conosco através do WhatsApp" />
    </>
  );
}

export default SobrePage;