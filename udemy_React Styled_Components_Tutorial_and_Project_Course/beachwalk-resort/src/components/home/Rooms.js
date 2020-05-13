import React, { useState } from 'react';
import Room from './Room';
import styled from 'styled-components';
import Title from '../globals/Title';
import Section from '../globals/Section';
import roomsData from './rooms-data';
import { setColor, media, setRem } from '../../styles/functions';

const Rooms = () => {
  const [rooms, setRooms] = useState(roomsData);
  return (
    <Section color={setColor.lightGrey}>
      <Title title="our rooms" center />
      <RoomsCenter>
        {rooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </RoomsCenter>
    </Section>
  );
};

const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;

  ${media.large`
    width: 100vw;
    max-width: 1170px;
  `};

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  column-gap: ${setRem(45)};
`;

export default Rooms;
