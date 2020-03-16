import React, { useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { GoDash, GoPlus } from 'react-icons/go';
import Modal from 'react-modal';

import {
  Header,
  Search,
  ReturnButton,
  AccordionMenu,
  RestaurantDetails,
} from '../../components';
import pic from '../../themes/assets/images/prato-de-restaurante-vegetariano-modal.png';

import { Container, TopContainers, LateralBlock } from './styles';

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    width: '600px',
    height: 'auto',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    border: 'none',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    zIndex: 9999,
  },
};

Modal.setAppElement('#root');

export default function Restaurants() {
  const [modalIsOpen, setIsOpen] = useState(true);
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
            onAfterOpen={() => {}}
            onRequestClose={closeModal}
            style={modalStyle}
          >
            <button onClick={closeModal}>
              <IoIosCloseCircle />
            </button>

            <img src={pic} alt="pic" />

            <h1>Nome do Prato</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <span>R$ 19,90</span>

            <hr />

            <div>
              <GoDash />
              1
              <GoPlus />
            </div>

            <div>
              <strong>Adicionar</strong>
              <p>R$ 19,00</p>
            </div>
          </Modal>
          <AccordionMenu onClick={openModal} />
        </TopContainers>
        <LateralBlock />
      </Container>
    </>
  );
}
