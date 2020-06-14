import React from 'react';
import { SmallBtn } from '../globals/Buttons';
import styled from 'styled-components';
import {
  setRem,
  setLetterSpacing,
  setColor,
  setShadow,
  setBorder,
  setCenter,
} from '../../styles/functions';
import { setTransition } from '../../styles/animations';

import PropTypes from 'prop-types';

const Room = ({ className, room }) => {
  const { img, title, info, price = 0 } = room;
  return (
    <article className={className}>
      <div className="img-container">
        <img src={img} alt={title} />
        <div className="price">${price}</div>
      </div>
      <div className="room-info">
        <h4>{title}</h4>
        <p>{info}</p>
        <SmallBtn>Read More</SmallBtn>
      </div>
    </article>
  );
};

export default styled(Room)`
  background: ${setColor.mainWhite};
  margin: ${setRem(32)} 0;

  ${setShadow.light};
  ${setTransition};
  &:hover {
    ${setShadow.dark};
  }

  .img-container {
    background: ${setColor.mainBlack};
    position: relative;
    img {
      width: 100%;
      display: block;
      ${setTransition};
    }

    &:hover img {
      opacity: 0.5;
    }

    .price {
      ${setCenter};
      color: ${setColor.mainWhite};
      ${setLetterSpacing(5)};
      font-size: ${setRem(22)};
      padding: ${setRem(10)} ${setRem(33)};
      ${setBorder({ color: setColor.mainWhite })};
      opacity: 0;
      ${setTransition};
    }
    &:hover .price {
      opacity: 1;
    }
  }

  .room-info {
    padding: ${setRem()};
    h4 {
      text-transform: capitalize;
      ${setLetterSpacing()};
    }

    p {
      ${setLetterSpacing()};
    }
  }
`;

Room.propTypes = {
  room: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.string,
    price: PropTypes.number,
  }),
};
