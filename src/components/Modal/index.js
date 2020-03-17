import React from 'react';
import { GoDash, GoPlus } from 'react-icons/go';
import { IoMdClose } from 'react-icons/io';

import { Container, HeaderModal, BodyModal, FooterModal } from './styles';

import pic from '../../themes/assets/images/prato-de-restaurante-vegetariano-modal.png';

export default function Modal({ isOpen, onRequestClose, quantityProducts }) {
  return (
    <Container isOpen={isOpen} onRequestClose={() => onRequestClose()}>
      <HeaderModal>
        <button type="button" onClick={() => onRequestClose()}>
          <IoMdClose />
        </button>
      </HeaderModal>

      <BodyModal>
        <img src={pic} alt="pic" />

        <div className="PlateDetails">
          <div className="PlateDescription">
            <h2>Nome do Prato</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <span>R$ 19,90</span>
        </div>
      </BodyModal>

      <FooterModal>
        <div className="QuantityOfProducts">
          <button type="button">
            <GoDash />
          </button>
          {quantityProducts}
          <button type="button">
            <GoPlus />
          </button>
        </div>

        <div className="TotalProducts">
          <p>R$ 19,00</p>
        </div>
      </FooterModal>
    </Container>
  );
}