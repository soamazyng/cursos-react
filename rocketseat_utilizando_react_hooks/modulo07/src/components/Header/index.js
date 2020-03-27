import React from 'react';

import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import Logo from '../../assets/images/logo.svg';

import { Container, Cart } from './styles';

// o nome da propriedade desestruturada deve ser igual ao nome que está lá no export default
function Header() {
  const cartSize = useSelector(state => state.cart.length);
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

export default Header;