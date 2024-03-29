import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Recados from '../pages/ListaRecados';
import InserirRecados from '../pages/InserirRecados';
import EditarRecados from '../pages/EditarRecados';

const ComponetName: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/editar-recados/:id" element={<EditarRecados />} />
          <Route path="/lista-recados" element={<Recados />} />
          <Route path="/inserir-recados" element={<InserirRecados />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ComponetName;
