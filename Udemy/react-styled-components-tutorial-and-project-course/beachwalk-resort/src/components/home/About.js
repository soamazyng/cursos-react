import React from 'react';
import Section from '../globals/Section';
import Title from '../globals/Title';
import aboutImg from '../../images/aboutBcg.jpeg';
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media,
} from '../../styles/functions';

import { PrimaryBtn } from '../globals/Buttons';

import styled from 'styled-components';

const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={aboutImg} alt="About img" />
        </div>
        <div className="about-info">
          <Title title="about us"></Title>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            corporis eligendi perferendis totam consectetur asperiores enim
            ducimus porro
          </p>
          <PrimaryBtn> read more </PrimaryBtn>
        </div>
      </AboutCenter>
    </Section>
  );
};

const AboutCenter = styled.div`
  width: 90vw;
  margin: 0 auto;

  ${media.large`

    .about-img,
    .about-info {
      padding: ${setRem(30)};
    }

    width: 100vw;
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${setRem(32)};
    .about-img, .about-info{
      align-self: center;
    }
    .about-info{
      p{
        width: 80%;
      }
    }
  `}

  .about-img,
  .about-info {
    padding: ${setRem(30)};
  }

  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })}
    }
  }
  .about-info {
    p {
      ${setLetterSpacing(3)}
    }
  }
`;

export default About;
