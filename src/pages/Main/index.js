import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import {
  Error,
  Header,
  Search,
  Loading,
  TopMessage,
  RestaurantList,
} from '../../components';
import { filterItems } from '../../functions';

import { Container } from './styles';

export default function Main() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState({});
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
      } catch (error) {
        setError({
          error: true,
          message: error.message,
          info: 'Erro ao processar a solicitação, tente novamente!',
        });
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
        <Loading />
      ) : (
        <Container>
          <TopMessage />
          <Search
            typeOfSearch="Buscar estabelecimento"
            searchRestaurant={searchRestaurant}
            setSearchRestaurant={setSearchRestaurant}
          />

          {Object.keys(error).length > 0 && <Error data={error} />}
          <RestaurantList restaurants={restaurants} />
        </Container>
      )}
    </>
  );
}
