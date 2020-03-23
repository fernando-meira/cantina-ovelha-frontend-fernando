import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  Modal,
  Header,
  Search,
  AccordionMenu,
  RestaurantDetails,
} from '../../components';

import api from '../../services/api';

import { Container, TopContainers, LateralBlock } from './styles';

function Restaurants() {
  const { id } = useParams();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    async function fetchRestaurant() {
      try {
        const { data } = await api.get(`restaurants/${id}`);

        setRestaurant(data);
      } catch (error) {
        console.log('Erro', error.message);
      }
    }

    fetchRestaurant();
  }, []);

  console.log('Restaurant', restaurant);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Header />
      <Container>
        <TopContainers>
          <RestaurantDetails />
          <Search searchStyle="modified" typeOfSearch="Buscar no cardápio" />
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal} />
          <AccordionMenu openModal={openModal} />
        </TopContainers>
        <LateralBlock />
      </Container>
    </>
  );
}

export default Restaurants;
