import React from 'react';

import { Header, Search } from '../../components';
import { TopMessage } from './components';

import { Container } from './styles';

export default function Main() {
  return (
    <>
      <Header />
      <Container>
        <TopMessage />
        <Search />
      </Container>
    </>
  );
}
