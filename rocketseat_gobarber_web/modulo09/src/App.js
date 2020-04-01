import React from 'react';

import { Router } from 'react-router-dom';

import Routes from './routes';

import './config/ReactotronConfig';
import history from './services/history';
import GlobalStyle from './styles/global'; // o global style pode ser inserido em qualquer lugar da aplicação

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
