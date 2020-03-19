import React from 'react';

import { BrowserRouter } from 'react-router-dom';

// vai deixar disponível o store da aplicação
import { Provider } from 'react-redux';

import Routes from './routes';

import Header from './components/Header';
import GlobalStyle from './styles/global';

import './config/Reactotron';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
