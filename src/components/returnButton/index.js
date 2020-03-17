import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

import { Container } from './styles';

export default function ReturnButton() {
  return (
    <Link to="/">
      <Container>
        <IoMdArrowRoundBack />
      </Container>
    </Link>
  );
}
