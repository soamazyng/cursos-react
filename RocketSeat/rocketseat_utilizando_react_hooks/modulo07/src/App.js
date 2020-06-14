import React from 'react';

import { Router } from 'react-router-dom';

// vai deixar disponível o store da aplicação
import { Provider } from 'react-redux';

import {ToastContainer} from 'react-toastify'

import Routes from './routes';

import Header from './components/Header';
import GlobalStyle from './styles/global';

import './config/Reactotron';

import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
