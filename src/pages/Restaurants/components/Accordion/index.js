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

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Example() {
  const data = mock;

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
                <ItemRestaurant>
                  <img src={lunch} alt="Almoço" />
                  <div className="PlateDetais">
                    <strong>Nome do Prato</strong>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </p>

                    <span>R$ 19,90</span>
                  </div>
                </ItemRestaurant>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
