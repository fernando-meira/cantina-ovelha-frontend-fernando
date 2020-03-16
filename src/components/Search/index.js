import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, SubmitButton } from './styles';

export default function Search({ searchStyle, text }) {
  return (
    <Container searchStyle={searchStyle}>
      <div className="label">{text}</div>

      <input type="text" id="Search" name="Search" placeholder={text} />

      <div>
        <SubmitButton type="button">
          <FaSearch />
        </SubmitButton>
      </div>
    </Container>
  );
}
