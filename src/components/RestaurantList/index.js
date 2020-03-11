import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import logo from '../../themes/assets/images/vegan-restaurant-logo-design_1438-10.png';
import { Container, OpenOrClosed } from './styles';

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const { data } = await api.get('restaurants');

        setRestaurants(data);
      } catch (error) {
        console.log('Erro', error.message);
      }
    }
    fetchRestaurants();
  }, []);

  // useEffect(() => {
  //   console.log('Restaurantes', restaurants);
  // }, [restaurants]);

  return (
    <Container>
      {restaurants.map(restaurant => (
        <li key={restaurant.id}>
          <img src={logo} alt={restaurant.name} />

          <div>
            <strong>{restaurant.name}</strong>
            <span>{restaurant.address}</span>
          </div>

          <OpenOrClosed status={restaurant.open}>
            {restaurant.open === true ? <p>Aberto agora</p> : <p>Fechado</p>}
          </OpenOrClosed>
        </li>
      ))}
    </Container>
  );
}
