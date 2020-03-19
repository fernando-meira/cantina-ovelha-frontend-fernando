import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, SubmitButton } from './styles';

export default function Search({
  searchStyle,
  typeOfSearch,
  searchRestaurant,
  setSearchRestaurant,
}) {
  return (
    <Container searchStyle={searchStyle}>
      <div className="label">{typeOfSearch}</div>

      <input
        type="text"
        placeholder={typeOfSearch}
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
