import React from 'react';

import { Header, Search } from '../../components';
import { RestaurantDetails } from './components';

import { Container, TopContainers, LateralBlock } from './styles';

export default function Restaurants() {
  return (
    <>
      <Header />
      <Container>
        <TopContainers>
          <RestaurantDetails />
          <Search />
        </TopContainers>
        <LateralBlock />
      </Container>
    </>
  );
}
