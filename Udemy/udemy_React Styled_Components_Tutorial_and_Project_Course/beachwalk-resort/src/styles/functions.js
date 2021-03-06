import { css } from 'styled-components';

export const setColor = {
  primaryColor: '#af9a7d',
  mainWhite: '#fff',
  mainBlack: '#222',
  mainGrey: '#ececec',
  lightGrey: '#f7f7f7',
};

export const setFont = {
  main: "'Lato', sans-serif;",
  slanted: "'Courgette', cursive;",
};

export const setFlex = ({ x = 'center', y = 'center' } = {}) => {
  return `
    display: flex;
    align-items: ${y};
    justify-content: ${x};
  `;
};

export const setBackground = ({
  img = 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  color = 'rgba(0,0,0,0)',
} = {}) => {
  return `
    background: linear-gradient(${color}, ${color}),
    url(${img}) center/cover fixed no-repeat;
  `;
};

export const setRem = (number = 16) => {
  return `${number / 16}rem`;
};

export const setLetterSpacing = (number = 2) => {
  return `letter-spacing: ${number}px`;
};

export const setBorder = ({
  width = '2px',
  style = 'solid',
  color = 'black',
} = {}) => {
  return `border: ${width} ${style} ${color};`;
};

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const setShadow = {
  light: 'box-shadow: 10px 10px 29px -12px rgba(204,204,204,1);',
  dark: 'box-shadow: 6px 6px 29px -12px rgba(145,145,145,1);',
  darkest: 'box-shadow: 10px 10px 29px -2px rgba(89,89,89,1);',
};

// lembrar que o objeto anterior a este deve ter a position relative
export const setCenter = () => {
  return `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  
  `;
};
