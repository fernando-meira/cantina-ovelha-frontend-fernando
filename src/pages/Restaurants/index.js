import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import {
  Modal,
  Header,
  Search,
  Loading,
  AccordionMenu,
  RestaurantDetails,
} from '../../components';

import { Container, TopContainers, LateralBlock } from './styles';

function Restaurants() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [restaurant, setRestaurant] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data } = await api.get(`categories`);

        setCategories(data);
      } catch (error) {
        console.log('Erro', error.message);
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchRestaurant() {
      setLoading(true);
      try {
        const { data } = await api.get(`restaurants/${id}`);

        setRestaurant(data);
      } catch (error) {
        console.log('Erro', error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    fetchRestaurant();
  }, [id]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Header />

      {loading ? (
        <Loading />
      ) : (
        <Container>
          <TopContainers>
            <RestaurantDetails restaurant={restaurant} />
            <Search searchStyle="modified" typeOfSearch="Buscar no cardápio" />
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              categories={categories}
            />
            <AccordionMenu openModal={openModal} categories={categories} />
          </TopContainers>
          <LateralBlock />
        </Container>
      )}
    </>
  );
}

export default Restaurants;
