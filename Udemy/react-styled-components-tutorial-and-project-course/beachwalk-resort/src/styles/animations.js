import { css, keyframes } from 'styled-components';

export const fadeIn = (start, point, end) => {
  const animation = keyframes`
    0%{
      opacity: 0;
      transform: translateY(${start});
    }
    50%{
      opacity: 0.5;
      transform: translateY(${point});
    }
    100%{
      opacity: 1;
      transform: translateY(${end});
    }
  `;

  return css`
    animation: ${animation} 3s ease-in-out;
  `;
};

export const setTransition = ({
  property = 'all',
  time = '0.5s',
  timing = 'ease-in-out',
} = {}) => {
  return css`
    transition: ${property} ${time} ${timing};
  `;
};
