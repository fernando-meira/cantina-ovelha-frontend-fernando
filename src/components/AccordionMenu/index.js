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

import {
  Container,
  ProductImage,
  ItemRestaurant,
  PromoCard,
  Price,
} from './styles';

export default function AccordionMenu({ openModal, categories, restaurant }) {
  console.log('Restaurant:', restaurant);

  return (
    <Container>
      <Accordion
        allowMultipleExpanded={() => true}
        allowZeroExpanded={() => true}
      >
        {categories.map(category => (
          <AccordionItem key={category.id_category}>
            <AccordionItemButton>{category.description}</AccordionItemButton>
            <AccordionItemPanel>
              <div className="Panel">
                {restaurant.products?.map(p => (
                  <ItemRestaurant
                    key={p.product.id_product}
                    onClick={() => openModal()}
                  >
                    <ProductImage
                      backgroundImage={
                        p.product.picture ? p.product.picture.url : no_image
                      }
                    />
                    <div className="PlateDetails">
                      <div className="TopDetails">
                        <strong>{p.product.name}</strong>

                        {p.offers.promotional_price && (
                          <PromoCard>
                            <FaAward />

                            <p>
                              Promo <span>{category.description}</span>
                            </p>
                          </PromoCard>
                        )}
                      </div>
                      <p>{p.product.description}</p>

                      {p.offers.promotional_price ? (
                        <div className="ProductValues">
                          <span>{formatPrice(p.offers)}</span>

                          <p>{formatPrice(p.price)}</p>
                        </div>
                      ) : (
                        <Price>{formatPrice(p.price)}</Price>
                      )}
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
