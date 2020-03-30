import React from 'react';
import { FaAward } from 'react-icons/fa';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { formatPrice } from '../../functions';
import no_image from '../../themes/assets/images/no_image.png';

import { Container, ProductImage, ItemRestaurant, PromoCard } from './styles';

export default function AccordionMenu({ openModal, categories }) {
  // console.log('Categories:', categories);

  return (
    <Container>
      <Accordion
        allowMultipleExpanded={() => true}
        allowZeroExpanded={() => true}
      >
        {categories.map(category => (
          <AccordionItem key={category.id_category}>
            <AccordionItemHeading>
              <AccordionItemButton>{category.description}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="Panel">
                {category.product.map(p => (
                  <ItemRestaurant
                    key={p.id_product}
                    onClick={() => openModal()}
                  >
                    <ProductImage
                      backgroundImage={p.picture ? p.picture.url : no_image}
                    />
                    <div className="PlateDetails">
                      <div className="TopDetails">
                        <strong>{p.name}</strong>

                        {p.name.length < 10 && (
                          <PromoCard>
                            <FaAward />

                            <p>
                              Promo <span>{category.description}</span>
                            </p>
                          </PromoCard>
                        )}
                      </div>
                      <p>{p.description}</p>

                      <div className="ProductValues">
                        <span>{formatPrice(20)}</span>

                        <p>{formatPrice(20)}</p>
                      </div>
                    </div>
                  </ItemRestaurant>
                ))}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}

AccordionMenu.propTypes = {
  openModal: PropTypes.func.isRequired,
  categories: PropTypes.shape({
    id_category: PropTypes.number,
    description: PropTypes.string,
    product: PropTypes.shape({
      id_product: PropTypes.number,
      name: PropTypes.string,
      picture: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
};
