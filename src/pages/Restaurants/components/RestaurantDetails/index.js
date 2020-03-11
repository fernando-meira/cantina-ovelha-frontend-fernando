import React from 'react';

import logo from '../../../../themes/assets/images/vegan-restaurant-logo-design_1438-10@2x.png';
import { Container, Details } from './styles';

export default function RestaurantDetails() {
  return (
    <Container>
      <img src={logo} alt="lg-restaurant" />

      <Details>
        <strong>Nome do Restaurante</strong>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p className="Days">
          Segunda à Sexta: <span>11:30 às 15:00</span>
        </p>

        <p className="Days">
          Sábados: <span>11:30 às 22:00</span>
        </p>

        <p className="Days">
          Domingos e Feriados: <span>11:30 às 15:00</span>
        </p>
      </Details>
    </Container>
  );
}
