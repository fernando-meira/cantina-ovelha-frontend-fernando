import React from 'react';
import { GoDash, GoPlus } from 'react-icons/go';
import { IoMdClose } from 'react-icons/io';

import { Container } from './styles';

import pic from '../../themes/assets/images/prato-de-restaurante-vegetariano-modal.png';

export default function Modal({ modalIsOpen, setIsOpen }) {
  return (
    <Container isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
      <button type="button" onClick={() => setIsOpen(false)}>
        <IoMdClose />
      </button>

      <img src={pic} alt="pic" />

      <h1>Nome do Prato</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
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
    </Container>
  );
}
