import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GoDash, GoPlus } from 'react-icons/go';
import { IoMdClose } from 'react-icons/io';

import { formatPrice } from '../../functions';

import { Container, HeaderModal, BodyModal, FooterModal } from './styles';

import pic from '../../themes/assets/images/prato-de-restaurante-vegetariano-modal.png';

export default function Modal({ isOpen, onRequestClose }) {
  const [quantity, setQuantity] = useState(1);
  const valor = 20;
  const [total, setTotal] = useState(formatPrice(valor));

  function changeQuantity(quantityProducts, value) {
    if (quantity > 0) {
      setQuantity(quantityProducts + value);
    }
  }

  useEffect(() => {
    if (quantity === 0) {
      setQuantity(1);
    }
    setTotal(formatPrice(quantity * valor));
  }, [quantity]);

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
          <button type="button" onClick={() => changeQuantity(quantity, -1)}>
            <GoDash />
          </button>
          {quantity}
          <button type="button" onClick={() => changeQuantity(quantity, +1)}>
            <GoPlus />
          </button>
        </div>

        <div className="TotalProducts">
          <p>{total}</p>
        </div>
      </FooterModal>
    </Container>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};
