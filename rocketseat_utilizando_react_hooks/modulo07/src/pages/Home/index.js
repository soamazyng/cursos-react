import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {bindActionCreators} from 'redux';

import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';
import {formatPrice} from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

export default function Home() {

  const amount = useSelector(state => state.cart.reduce((amount, prod) => {
    amount[prod.id] = prod.amount
    return amount
  }, {}),);

  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() =>{
    async function loadProducts(){
      const response = await api.get('products');

      const data = response.data.map(prod => ({
        ...prod,
        priceFormatted: formatPrice(prod.price)
      }))

      setProducts(data);
    }

    loadProducts()
  }, [])

  function handleAddProduct(id){

    //serve para disparar a action
    dispatch(CartActions.addToCartRequest(id));
    
  }

    return (
      <ProductList>

        {products.map(prod => (
          <li key={prod.id}>
            <img
              src={prod.image}
              alt={prod.title}
            />
            <strong>{prod.title}</strong>
            <span>{prod.priceFormatted}</span>
            <button type="button" 
                onClick={()=> handleAddProduct(prod.id)} >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" /> { amount[prod.id] || 0 }
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
}