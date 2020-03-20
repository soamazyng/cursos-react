import React, { Component } from 'react';

import { connect } from 'react-redux';

// eu preciso utilizar este bindAction para poder acessar as actions do meu reducer
// diretamente pelo meu componente.
import {bindActionCreators} from 'redux';

import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';

import { ProductList } from './styles';

import {formatPrice} from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {

  state = {
    products: [],
  }

  async componentDidMount(){
    const response = await api.get('products');

    const data = response.data.map(prod => ({
      ...prod,
      priceFormatted: formatPrice(prod.price)
    }))

    this.setState({ products: data});
  }

  handleAddProduct = id =>{

    //serve para disparar a action
    const {addToCart} = this.props;
    addToCartRequest(id);
    
  }

  render() {

    const {products} = this.state;

    const {amount} = this.props;

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
                onClick={()=> this.handleAddProduct(prod.id)} >
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
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, prod) => {
    amount[prod.id] = prod.amount
    return amount
  }, {})
});

// convert actions do redux como funções do nosso componente.
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

// o connect retorna uma função e 
// por este motivo o outro parenteses eu passo a minha class
export default connect(mapStateToProps, mapDispatchToProps)(Home);