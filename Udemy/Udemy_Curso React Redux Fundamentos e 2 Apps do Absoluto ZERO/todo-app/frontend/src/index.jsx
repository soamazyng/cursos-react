import React from 'react'
import ReactDOM from 'react-dom'

//tem que importar o applyMiddleware para começar a funcionar os middleware
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

// *** middlewares
//middleware que é utilizado para uma promise, ele espera o dado estar pronto
import promise from 'redux-promise'

//middleware que é utilizado para chamar + do que 1 action creator ao mesmo tempo (array)
// o problema do multi é que ele disparar duas actions em paralelo
import multi from 'redux-multi'

// utilizado para poder chamar o then() dentro de uma action que chama + doq 1 action
// resolve o problema do multi que dispara duas actions em pararelo
// ele também faz com que não seja necessário retornar uma action create com o type, passa a suportar o retorno do Dispatch
// no final você chama uma action com o Type
// deixa disponível o dispach
import thunk from 'redux-thunk'
// *** middlewares

import App from './main/app'
import reducers from './main/reducers'

//precisa desta linha para funcionar a extensão do Google Chrome Redux.
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()

//chama os middlewares
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))