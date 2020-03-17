import React, { useState, useEffect } from 'react';
import { GoDash, GoPlus } from 'react-icons/go';
import { IoMdClose } from 'react-icons/io';

import { Container, HeaderModal, BodyModal, FooterModal } from './styles';

import pic from '../../themes/assets/images/prato-de-restaurante-vegetariano-modal.png';

export default function Modal({ isOpen, onRequestClose }) {
  const [count, setCount] = useState(1);

  const changeCount = type => {
    if (type === 'more' && count > 0) {
      setCount(count + 1);
    }

    if (type === 'less' && count > 1) {
      setCount(count - 1);
    }
  };

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
          <button type="button" onClick={() => changeCount('less')}>
            <GoDash />
          </button>
          {count}
          <button type="button" onClick={() => changeCount('more')}>
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
