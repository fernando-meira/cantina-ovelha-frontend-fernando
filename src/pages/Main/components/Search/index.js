import React from 'react';
import { GoSearch } from 'react-icons/go';

import { Container } from './styles';

export default function Search() {
  return (
    <Container>
      <h1>Bem-vindo ao Lista Rango</h1>

      <div>
        <input type="text" placeholder="Buscar estabelecimento" />
        <GoSearch />
      </div>
    </Container>
  );
}
