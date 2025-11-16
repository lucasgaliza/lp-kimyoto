import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import SobrePage from './pages/SobrePage.jsx'
import ContatoPage from './pages/ContatoPage.jsx'
import ProdutosPage from './pages/ProdutosPage.jsx'
import ContatoSucessoPage from './pages/ContatoSucessoPage.jsx';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="sobre" element={<SobrePage />} />
        <Route path="contato" element={<ContatoPage />} />
        <Route path="contato/sucesso" element={<ContatoSucessoPage />} />
        <Route path="produtos" element={<ProdutosPage />} />
      </Route>
    </Routes>
)