import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../themes/assets/images/vegan-restaurant-logo-design_1438-10.png';

import { Container, OpenOrClosed } from './styles';

export default function RestaurantList({ restaurants }) {
  console.log('Restaurantes', restaurants);
  return (
    <Container>
      {restaurants.map(restaurant => (
        <Link to="/restaurants" key={restaurant.id_restaurant}>
          <li>
            <img
              src={`${
                restaurant.id_picture
                  ? 'http://' + restaurant.picture.url
                  : logo
              }`}
              alt={restaurant.name}
            />
            {console.log(restaurant.picture)}
            <div>
              <strong>{restaurant.name}</strong>
              {restaurant.address.map(add => (
                <span key={add.id_address}>{`${add.street}, ${
                  add.number === null ? 'S/N' : add.number
                }, ${add.district}, ${add.city}, ${add.state}`}</span>
              ))}
            </div>

            <OpenOrClosed status={restaurant.schedule[0].isOpen}>
              {restaurant.open ? <p>Aberto agora</p> : <p>Fechado</p>}
            </OpenOrClosed>
          </li>
        </Link>
      ))}
    </Container>
  );
}
