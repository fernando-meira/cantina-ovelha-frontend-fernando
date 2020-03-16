import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, SubmitButton } from './styles';

export default function Search({ searchStyle }) {
  return (
    <Container searchStyle={searchStyle}>
      <div className="label">Buscar no cardápio</div>

      <input
        type="text"
        id="Search"
        name="Search"
        placeholder="Buscar estabelecimento"
      />

      <div>
        <SubmitButton type="button">
          <FaSearch />
        </SubmitButton>
      </div>
    </Container>
  );
}
