import React from 'react';

import logo from '../../themes/assets/images/vegan-restaurant-logo-design_1438-10.png';
import { Container, OpenOrClosed } from './styles';

export default function RestaurantList() {
  const listRestaurant = {
    img: logo,
    name: 'Nome do Restaurante',
    address: 'Endereço',
    open: true,
  };
  return (
    <Container>
      <li>
        <img src={listRestaurant.img} alt={listRestaurant.name} />

        <div>
          <strong>{listRestaurant.name}</strong>
          <span>{listRestaurant.address}</span>
        </div>

        <OpenOrClosed loading={listRestaurant.open}>
          {listRestaurant.open == true ? <p>aberto agora</p> : <p>fechado</p>}
        </OpenOrClosed>
      </li>
    </Container>
  );
}
