import React from 'react';

import {
  Header,
  Search,
  RestaurantDetails,
  AccordionMenu,
} from '../../components';

import { Container, TopContainers, LateralBlock } from './styles';

export default function Restaurants() {
  return (
    <>
      <Header />
      <Container>
        <TopContainers>
          <RestaurantDetails />
          <Search searchStyle="modified" />
          <AccordionMenu />
        </TopContainers>
        <LateralBlock />
      </Container>
    </>
  );
}
