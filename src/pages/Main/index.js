import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Header, Search, RestaurantList, TopMessage } from '../../components';

import { Container } from './styles';

export default function Main() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const { data } = await api.get('restaurants');

        setRestaurants(data);
      } catch (error) {
        console.log('Error', error.message);
      }
    }

    fetchRestaurants();
  }, []);

  useEffect(() => {
    console.log(restaurants);
  }, [restaurants]);

  return (
    <>
      <Header />
      <Container>
        <TopMessage />
        <Search text="Buscar estabelecimento" />
        <RestaurantList />
      </Container>
    </>
  );
}
