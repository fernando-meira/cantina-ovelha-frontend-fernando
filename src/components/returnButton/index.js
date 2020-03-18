import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

import { Container } from './styles';

export default function ReturnButton() {
  return (
    <Link to="/">
      <Container>
        <FaHome />
      </Container>
    </Link>
  );
}
