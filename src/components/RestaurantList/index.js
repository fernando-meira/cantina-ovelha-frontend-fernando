import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../themes/assets/images/vegan-restaurant-logo-design_1438-10.png';

import mock from './dataMock';
import { Container, OpenOrClosed } from './styles';

export default function RestaurantList() {
  const data = mock;

  return (
    <Container>
      {data.map(restaurant => (
        <Link to="/restaurants" key={restaurant.id}>
          <li>
            <img src={logo} alt={restaurant.name} />

            <div>
              <strong>{restaurant.name}</strong>
              <span>{restaurant.address}</span>
            </div>

            <OpenOrClosed status={restaurant.open}>
              {restaurant.open === true ? <p>Aberto agora</p> : <p>Fechado</p>}
            </OpenOrClosed>
          </li>
        </Link>
      ))}
    </Container>
  );
}
