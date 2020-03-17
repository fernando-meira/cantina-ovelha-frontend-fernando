import React from 'react';

import { Header, Search, RestaurantList, TopMessage } from '../../components';

import { Container } from './styles';

export default function Main() {
  return (
    <>
      <Header />
      <Container>
        <TopMessage />
        <Search text="Buscar estabelecimento" />
        <RestaurantList />
      </Container>
    </>
  );
}
