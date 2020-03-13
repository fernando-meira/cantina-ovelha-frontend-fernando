import React, { useState, useEffect } from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import lunch from '../../../../themes/assets/images/prato-de-restaurante-vegetariano@2x.png';

import { Container, ItemRestaurant } from './styles';
import mock from './dataMock';

export default function Example() {
  const data = mock;

  useEffect(() => {
    console.log('Mock', data);
  }, []);

  return (
    <Container>
      <Accordion
        allowMultipleExpanded={() => true}
        allowZeroExpanded={() => true}
      >
        {data.map(category => (
          <AccordionItem key={category.id}>
            <AccordionItemHeading>
              <AccordionItemButton>{category.type}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="Panel">
                {category.product.map(p => (
                  <ItemRestaurant key={p.id}>
                    <img src={p.image} alt={p.name} />
                    <div className="PlateDetais">
                      <strong>{p.name}</strong>
                      <p>{p.description}</p>

                      <span>{p.value}</span>
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
