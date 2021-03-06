import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {

  const total = useSelector(state => formatPrice(
    state.cart.reduce((total, prod) => {
      return total + prod.price * prod.amount;
    }, 0)
  ));

  const prods = useSelector(state => state.cart.map(prod => ({
    ...prod,
    subTotal: formatPrice(prod.price * prod.amount),
  })));

  const dispatch = useDispatch();

  function increment(prod) {
    dispatch(CartActions.updateAmountRequest(prod.id, prod.amount + 1));
  }

  function decrement(prod) {
    dispatch(CartActions.updateAmountRequest(prod.id, prod.amount - 1));
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {prods.map(prod => (
            <tr>
              <td>
                <img src={prod.image} alt={prod.title} />
              </td>
              <td>
                {prod.title}
                <span>{prod.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(prod)}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={prod.amount} />
                  <button type="button" onClick={() => increment(prod)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{prod.subTotal}</strong>
              </td>
              <td>
                <button type="button" onClick={() => dispatch(CartActions.removeFromCart(prod.id))}>
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button"> Finalizar pedido</button>
        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
