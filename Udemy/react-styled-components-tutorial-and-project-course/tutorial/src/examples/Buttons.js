import styled from "styled-components";

const color = "yellow";
const padding = "padding: 1rem";
const margin = "margin: 1rem";
const border = (value = 10) => {
  return `border: solid ${value}px red`;
};

export const Button = styled.button`
  ${padding};
  ${margin};
  color: red;
  background: blue;
  text-transform: uppercase;
  ${border(50)};
`;

export const SecondButton = styled.button`
  color: ${color};
  background: red;
  text-transform: uppercase;
`;
