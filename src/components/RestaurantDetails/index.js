import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../themes/assets/images/vegan-restaurant-logo-design_1438-10@2x.png';
import { Container, Details, LogoRestaurant } from './styles';

export default function RestaurantDetails({ restaurant }) {
  return (
    <Container>
      <LogoRestaurant
        backgroundImage={restaurant.id_picture ? restaurant.picture.url : logo}
      />

      <Details>
        <strong>{restaurant.name}</strong>
        {restaurant.addresses &&
          restaurant.addresses.map(address => (
            <p key={address.id_address}>{`${address.street}, ${
              address.number === null ? 'S/N' : address.number
            }, ${address.district}, ${address.city} - ${address.state}`}</p>
          ))}
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

RestaurantDetails.protoTypes = {
  restaurant: PropTypes.shape({
    id_picture: PropTypes.number,
    picture: PropTypes.shape({
      url: PropTypes.string,
    }),
    name: PropTypes.string,
    addresses: PropTypes.arrayOf(
      PropTypes.shape({
        id_address: PropTypes.number,
        street: PropTypes.string,
        number: PropTypes.number,
        district: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
      })
    ),
  }).isRequired,
};
