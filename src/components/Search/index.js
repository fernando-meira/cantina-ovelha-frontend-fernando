import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { colors } from '../../themes';

import { Container, SubmitButton } from './styles';
import { pxToRem } from '../../functions';

export default function Search() {
  return (
    <Container>
      <div className="label">
        <label>Buscar estabelecimento</label>
      </div>

      <input type="text" id="Search" name="Search" />

      <div>
        <SubmitButton type="button">
          <FaSearch />
        </SubmitButton>
      </div>
    </Container>
  );
}
