import React, { useState, useEffect, useCallback } from 'react';

import api from '../../services/api';

import { Header, Search, RestaurantList, TopMessage } from '../../components';
import { filterItems } from '../../functions';

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

  const handleSearch = useCallback(() => {
    const filteredRestaurants = filterItems({
      allItems: allRestaurants,
      searchText: searchRestaurant,
    });

    return setRestaurants(filteredRestaurants);
  });

  useEffect(() => {
    handleSearch();
  }, [searchRestaurant]);

  return (
    <>
      <Header />
      <Container>
        <TopMessage />
        <Search
          typeOfSearch="Buscar estabelecimento"
          searchRestaurant={searchRestaurant}
          setSearchRestaurant={setSearchRestaurant}
        />
        <RestaurantList restaurants={restaurants} />
      </Container>
    </>
  );
}
