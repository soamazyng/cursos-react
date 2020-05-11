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
