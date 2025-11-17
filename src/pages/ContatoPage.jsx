import React, { useState } from 'react';
import './ContatoPage.css';

import imgTyping from '../assets/contato-typing.webp';

function ContatoPage() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (
    <div className="contato-page-container">
      <div className="contato-info">
        <h1>Fale conosco</h1>
        <p className="contato-subtitulo">
          Nos envie uma mensagem ou entre em contato conosco através dos canais:
        </p>

        <ul className="contato-lista-info">
          <li><strong>Telefone:</strong> (11) 2094-5811</li>
          <li><strong>Whatsapp:</strong> (11) 97098-6716</li>
          <li><strong>Email:</strong> contato.kimyoto@gmail.com</li>
        </ul>

        <form 
          className="contato-form"
          action="https://formspree.io/f/mjkjjoyj"
          method="POST"
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input 
                type="text" 
                id="nome" 
                name="nome" 
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="sobrenome">Sobrenome</label>
              <input 
                type="text" 
                id="sobrenome" 
                name="sobrenome" 
                placeholder="Seu sobrenome"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Endereço de e-mail</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="email@dominio.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Sua mensagem</label>
            <textarea 
              id="mensagem" 
              name="mensagem" 
              rows="5" 
              placeholder="Digite sua pergunta ou mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="button-enviar">Enviar</button>
        </form>
      </div>

      <div className="contato-imagem">
        <img src={imgTyping} alt="Pessoa digitando em um teclado" />
      </div>
    </div>
  );
}

export default ContatoPage;