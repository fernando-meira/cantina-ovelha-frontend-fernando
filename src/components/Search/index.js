import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { colors } from '../../themes';

import { Container, SubmitButton } from './styles';

export default function Search() {
  return (
    <Container>
      <div className="label">
        <span>Buscar estabelecimento</span>
      </div>

      <input type="text" value="search" />

      <SubmitButton type="button" onClick={() => {}}>
        <FaSearch size={16} color={colors.black} />
      </SubmitButton>
    </Container>
  );
}
