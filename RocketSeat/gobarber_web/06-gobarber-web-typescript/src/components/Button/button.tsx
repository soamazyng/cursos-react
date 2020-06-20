import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './button.style';

import Loading from '../Loading/Loading';

// add + 1 prop para o button, basta colocar o &
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? <Loading /> : children}
  </Container>
);

export default Button;
