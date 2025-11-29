import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ContatoSucessoPage.css'; 

function ContatoSucessoPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [countdown, setCountdown] = useState(10);

  const isFromWhatsapp = location.state?.fromWhatsapp;

  useEffect(() => {
    if (isFromWhatsapp) {
      return; 
    }

    const redirectTimer = setTimeout(() => {
      navigate('/'); 
    }, 10000); 

    const countdownTimer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000); 

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdownTimer);
    };
  }, [navigate, isFromWhatsapp]);

  return (
    <div className="sucesso-container">
      {isFromWhatsapp ? (
        <h2>Obrigado pelo seu interesse na Kimyoto Alimentos!</h2>
      ) : (
        <h2>Formulário enviado com sucesso!</h2>
      )}

      <p>Responderemos sua mensagem em breve.</p>
      
      {!isFromWhatsapp && (
        <p className="redirect-mensagem">
          Clique no botão abaixo para retornar a página inicial, ou aguarde <span className="countdown-highlight">{countdown}</span> segundos para ser redirecionado automaticamente.
        </p>
      )}

      <button className="button-voltar" onClick={() => navigate('/')}>
        Retornar a página inicial
      </button>
    </div>
  );
}

export default ContatoSucessoPage;