import api from '../../../services/api'
import {call, put, all, takeLatest} from 'redux-saga/effects'
import {addToCartSuccess} from './actions'

// o asterisco é como se fosse o await
function* addToCart({id}){
  // como se fosse o wait
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data))

}

// takeLatest aguarda a chamada da api finalizar para poder add no carrinho
// takeEvery não aguarda e fica add toda hora que o usuário clicar muito rápido

// listener
export default all([

  // qual acao , qual funcao
  takeLatest('@cart/ADD_REQUEST', addToCart)

]);