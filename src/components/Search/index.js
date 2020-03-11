import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, SubmitButton } from './styles';

export default function Search() {
  return (
    <Container>
      <div className="label">
        <label htmlFor="Search">Buscar estabelecimento</label>
      </div>

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
