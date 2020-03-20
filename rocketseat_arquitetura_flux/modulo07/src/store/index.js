import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga'

import rootSaga from './modules/rootSaga'

import rootReducers from './modules/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const enhancer = process.env.NODE_ENV === 'development'
  ? compose(console.tron.createEnhancer(),
  applyMiddleware(sagaMiddleware))
  : applyMiddleware(sagaMiddleware) 

const store = createStore(rootReducers, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
