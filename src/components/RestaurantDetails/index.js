import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../themes/assets/images/vegan-restaurant-logo-design_1438-10@2x.png';
import { Container, Details, LogoRestaurant } from './styles';

export default function RestaurantDetails({ restaurant }) {
  // console.log('Data', restaurant);

  console.log('restaurant.address', restaurant.address);

  return (
    <Container>
      <LogoRestaurant
        backgroundImage={restaurant.id_picture ? restaurant.picture.url : logo}
      />

      <Details>
        <strong>{restaurant.name}</strong>
        {restaurant.address &&
          restaurant.address.map(add => (
            <p key={add.id_address}>{`${add.street}, ${
              add.number === null ? 'S/N' : add.number
            }, ${add.district}, ${add.city} - ${add.state}`}</p>
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
  restaurant: PropTypes.object.isRequired,
};
