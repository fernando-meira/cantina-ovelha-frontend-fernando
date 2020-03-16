import React from 'react';

import {
  Header,
  Search,
  ReturnButton,
  AccordionMenu,
  RestaurantDetails,
} from '../../components';

import { Container, TopContainers, LateralBlock } from './styles';

export default function Restaurants() {
  return (
    <>
      <Header />
      <Container>
        <ReturnButton />
        <TopContainers>
          <RestaurantDetails />
          <Search searchStyle="modified" text="Buscar no cardápio" />
          <AccordionMenu />
        </TopContainers>
        <LateralBlock />
      </Container>
    </>
  );
}
