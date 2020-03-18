import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, SubmitButton } from './styles';

export default function Search({
  searchStyle,
  text,
  searchRestaurant,
  setSearchRestaurant,
}) {
  console.log('Procura de Restaurantes', searchRestaurant);
  return (
    <Container searchStyle={searchStyle}>
      <div className="label">{text}</div>

      <input
        type="text"
        placeholder={text}
        value={searchRestaurant}
        onChange={event => setSearchRestaurant(event.target.value)}
      />

      <div>
        <SubmitButton type="button">
          <FaSearch />
        </SubmitButton>
      </div>
    </Container>
  );
}
