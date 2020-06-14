import React from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import Logo from '../../assets/images/logo.svg';

import { Container, Cart } from './styles';

// o nome da propriedade desestruturada deve ser igual ao nome que está lá no export default
function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="RocketShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

Header.propTypes = {
  cartSize: PropTypes.number.isRequired,
};

// convert reducers da nossa aplicação em propriedades do nosso componente
// state.{cart} cart por que é o nome do reducer dentro do rootReducer
const mapStateToProps = state => ({
  data: state.cart,
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
