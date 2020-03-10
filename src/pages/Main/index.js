import React from 'react';

import { Header } from '../../components';
import { Search } from './components';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Search />
    </Container>
  );
}
