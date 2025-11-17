import React, { useEffect } from 'react'; 
import { Link, useLocation } from 'react-router-dom'; 
import './ProdutosPage.css'; 
import CtaWhatsapp from '../components/CtaWhatsapp'; 

import heroBg from '../assets/produtos-hero.webp'; 
import imgTemperos from '../assets/foto-temperos.webp';
import imgChas from '../assets/foto-chas.webp';
import imgGraos from '../assets/foto-graos.webp';


function ProdutosPage() {
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
        className="hero-produtos"
      >
        <img src={heroBg} alt="Banner de produtos" className="hero-produtos-image" />
        <div className="hero-produtos-copy">
          <h1>Os melhores sabores!</h1>
        </div>
      </section>

      <div className="produtos-page-container">
        
        <section className="produto-item" id="temperos">
          <div className="produto-item-texto">
            <h2>Temperos</h2>
            <p>Aqui, temperos são cuidadosamente selecionados para levar o máximo de sabor e qualidade para a sua mesa.</p>
            <p className="sub-desc">Não vendemos apenas ingredientes; oferecemos experiências gastronômicas.</p>
            <button className="button-ver-produtos" disabled>Ver produtos</button>
            <p className="construcao-legenda">em construção</p>
          </div>
          <div className="produto-item-imagem">
            <img src={imgTemperos} alt="Temperos variados" />
          </div>
        </section>

        <section className="produto-item reverse" id="chas">
          <div className="produto-item-texto">
            <h2>Chás</h2>
            <p>Cada folha é meticulosamente escolhida para levar o máximo de aroma, sabor e bem-estar para a sua xícara.</p>
            <button className="button-ver-produtos" disabled>Ver produtos</button>
            <p className="construcao-legenda">em construção</p>
          </div>
          <div className="produto-item-imagem">
            <img src={imgChas} alt="Chás variados" />
          </div>
        </section>

        <section className="produto-item" id="graos">
          <div className="produto-item-texto">
            <h2>Grãos</h2>
            <p>Priorizamos sempre a qualidade, a pureza e o sabor de nossos grãos, garantindo que você receba produtos frescos e nutritivos.</p>
            <button className="button-ver-produtos" disabled>Ver produtos</button>
            <p className="construcao-legenda">em construção</p>
          </div>
          <div className="produto-item-imagem">
            <img src={imgGraos} alt="Grãos variados" />
          </div>
        </section>

      </div>

      <CtaWhatsapp title="Garanta já nossos produtos através do WhatsApp" />
    </>
  );
}

export default ProdutosPage;