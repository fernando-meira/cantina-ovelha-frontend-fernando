import React, { useState, useEffect } from 'react';
import { Spin } from 'react-loading-io';

import api from '../../services/api';

import {
  Header,
  Search,
  Loading,
  RestaurantList,
  TopMessage,
} from '../../components';
import { filterItems } from '../../functions';

import { Container } from './styles';

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState('');

  useEffect(() => {
    async function fetchRestaurants() {
      setLoading(true);
      try {
        const { data } = await api.get('restaurants');

        setRestaurants(data);
        setAllRestaurants(data);
        setLoading(false);
      } catch (error) {
        console.log('Error', error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    fetchRestaurants();
  }, []);

  function handleSearch() {
    const filteredRestaurants = filterItems(
      {
        allItems: allRestaurants,
        searchText: searchRestaurant,
      },
      [allRestaurants, searchRestaurant]
    );

    return setRestaurants(filteredRestaurants);
  }

  useEffect(() => {
    handleSearch();
  }, [searchRestaurant]);

  return (
    <>
      <Header />
      {loading ? (
        <Loading>
          <Spin />
        </Loading>
      ) : (
        <Container>
          <TopMessage />
          <Search
            typeOfSearch="Buscar estabelecimento"
            searchRestaurant={searchRestaurant}
            setSearchRestaurant={setSearchRestaurant}
          />

          <RestaurantList restaurants={restaurants} />
        </Container>
      )}
    </>
  );
}
