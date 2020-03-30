import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../themes/assets/images/vegan-restaurant-logo-design_1438-10.png';

import { Container, LogoRestaurant, OpenOrClosed } from './styles';

export default function RestaurantList({ restaurants }) {
  console.log(
    'Restaurant Array',
    restaurants.map(restaurant => restaurant)
  );
  return (
    <Container>
      {restaurants.map(restaurant => (
        <Link
          to={`/restaurants/${restaurant.id_restaurant}`}
          key={restaurant.id_restaurant}
        >
          <li>
            <LogoRestaurant
              backgroundImage={
                restaurant.id_picture ? restaurant.picture.url : logo
              }
            />

            <div className="RestaurantInfo">
              <strong>{restaurant.name}</strong>
              {restaurant.addresses?.map(address => (
                <span key={address.id_address}>{`${address.street}, ${
                  address.number === null ? 'S/N' : address.number
                }, ${address.district}, ${address.city}, ${
                  address.state
                }`}</span>
              ))}
            </div>

            <OpenOrClosed status={restaurant.schedules[0]?.isOpen}>
              {restaurant.schedules[0]?.isOpen === true ? (
                <p>Aberto agora</p>
              ) : (
                <p>Fechado</p>
              )}
            </OpenOrClosed>
          </li>
        </Link>
      ))}
    </Container>
  );
}
