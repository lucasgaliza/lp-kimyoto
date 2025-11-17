import React from 'react';
import './HomePage.css';
import heroBg from '../assets/hero-image.webp';
import imgTemperos from '../assets/temperos.webp';
import imgChas from '../assets/chas.webp';
import imgGraos from '../assets/graos.webp';
import imgPacote from '../assets/pacote.svg';
import CtaWhatsapp from '../components/CtaWhatsapp';

function HomePage() {
  return (
    <>
      <section 
        className="hero-image"
        style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-copy">
        </div>
      </section>

      <section className="produtos-section">
        <h2 className="section-title-produtos">Conheça nossos produtos</h2>
        <div className="card-container">
          <article className="card">
            <img src={imgTemperos} alt="Temperos" />
            <h3>Temperos</h3>
            <p>Aqui, temperos são cuidadosamente selecionados para levar o máximo de sabor e qualidade para a sua mesa.</p>
          </article>
          <article className="card">
            <img src={imgChas} alt="Chás" />
            <h3>Chás</h3>
            <p>O máximo de aroma, sabor e bem-estar para a sua xícara.</p>
          </article>
          <article className="card">
            <img src={imgGraos} alt="Grãos" />
            <h3>Grãos</h3>
            <p>Priorizamos sempre a qualidade, a pureza e o sabor de nossos grãos.</p>
          </article>
        </div>
      </section>
      
      <section className="institucional-section">
        <div className="institucional-texto">
          <h2 className="section-title-institucional">Institucional</h2>
          
          <article className="texto-bloco">
            <h3>Quem somos</h3>
            <p>Atuamos no mercado a mais de 20 anos, priorizando qualidade e preços acessíveis. Saiba mais!</p>
          </article>

          <article className="texto-bloco">
            <h3>Como comprar</h3>
            <p>Entre em contato com um de nossos atendentes, nossos produtos são vendidos a preços exclusivos de atacado!</p>
          </article>

          <article className="texto-bloco">
            <h3>Junte-se a família!</h3>
            <p>Diversifique sua loja com nossos produtos naturais ou inicie a sua própria jornada de empreendedor!</p>
          </article>
        </div>
        
        <div className="institucional-imagem">
            <img src={imgPacote} alt="Pacote de produtos Kimyoto" />
        </div>
      </section>
      <CtaWhatsapp />
    </>
  );
}

export default HomePage;