import React, { useState, useEffect } from 'react';

import {
  Modal,
  Header,
  Search,
  AccordionMenu,
  RestaurantDetails,
} from '../../components';

import api from '../../services/api';

import { Container, TopContainers, LateralBlock } from './styles';

export default function Restaurants() {
  const [modalIsOpen, setIsOpen] = useState(false);

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
