import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Header, Search, RestaurantList, TopMessage } from '../../components';

import { Container } from './styles';

export default function Main() {
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState('');

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const { data } = await api.get('restaurants');

        setRestaurants(data);
        setAllRestaurants(data);
      } catch (error) {
        console.log('Error', error.message);
      }
    }

    fetchRestaurants();
  }, []);

  console.log('AllRestaurants', allRestaurants);

  return (
    <>
      <Header />
      <Container>
        <TopMessage />
        <Search
          text="Buscar estabelecimento"
          searchRestaurant={searchRestaurant}
          setSearchRestaurant={setSearchRestaurant}
        />
        <RestaurantList restaurants={restaurants} />
      </Container>
    </>
  );
}
