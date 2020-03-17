import React, { useState } from 'react';

import {
  Modal,
  Header,
  Search,
  ReturnButton,
  AccordionMenu,
  RestaurantDetails,
} from '../../components';

import { Container, TopContainers, LateralBlock } from './styles';

export default function Restaurants() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [quantityProducts, setProducts] = useState(10);

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
        <ReturnButton />
        <TopContainers>
          <RestaurantDetails />
          <Search searchStyle="modified" text="Buscar no cardápio" />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            quantityProducts={quantityProducts}
          />
          <AccordionMenu openModal={openModal} />
        </TopContainers>
        <LateralBlock />
      </Container>
    </>
  );
}
