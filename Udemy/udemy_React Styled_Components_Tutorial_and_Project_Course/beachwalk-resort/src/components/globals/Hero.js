import styled from 'styled-components';
import { setFlex, setBackground } from '../../styles/functions';

const Hero = styled.header`
  min-height: 100vh;
  ${(props) => setBackground({ img: props.img, color: 'rgba(0,0,0,0.2)' })}
  ${setFlex()}
`;

export default Hero;
