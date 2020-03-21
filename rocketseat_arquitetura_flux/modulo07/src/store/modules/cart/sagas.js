import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmount } from './actions';

// o asterisco é como se fosse o await
function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    console.tron.warn('error');
    return;
  }

  if (productExists) {
    yield put(updateAmount(id, amount));
  } else {
    // como se fosse o wait
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

// takeLatest aguarda a chamada da api finalizar para poder add no carrinho
// takeEvery não aguarda e fica add toda hora que o usuário clicar muito rápido

// listener
export default all([
  // qual acao , qual funcao
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);
