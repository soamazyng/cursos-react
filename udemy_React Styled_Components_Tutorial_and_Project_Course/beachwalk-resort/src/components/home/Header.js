import React from 'react';
import Hero from '../globals/Hero';
import homeImg from '../../images/homeBcg.jpeg';
import Banner from '../globals/Banner';
import { PrimaryBtn } from '../globals/Buttons';

const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        title="beachwalk resort"
        greeting="welcome to"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A facere
        suscipit, voluptatum exercitationem vel cum quo."
      >
        <PrimaryBtn t="1rem">View Details</PrimaryBtn>
      </Banner>
    </Hero>
  );
};

export default Header;
