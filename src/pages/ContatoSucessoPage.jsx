import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContatoSucessoPage.css';

function ContatoSucessoPage() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
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
  }, [navigate]);

  return (
    <div className="sucesso-container">
      <h2>Formulário enviado com sucesso!</h2>
      <p>Obrigado por entrar em contato. Responderemos em breve.</p>
      <p className="redirect-mensagem">
        Você será redirecionado para a página inicial em {countdown} segundos...
      </p>
    </div>
  );
}

export default ContatoSucessoPage;