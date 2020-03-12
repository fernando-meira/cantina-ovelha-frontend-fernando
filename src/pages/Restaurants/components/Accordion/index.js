import React, { useState, useEffect } from 'react';

import lunch from '../../../../themes/assets/images/prato-de-restaurante-vegetariano@2x.png';

import { Container, ItemRestaurant } from './styles';

import 'react-accessible-accordion/dist/fancy-example.css';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Example() {
  const [items] = useState([
    {
      id: 1,
      type: 'Almoços',
    },
    {
      id: 2,
      type: 'Bebidas',
    },
    {
      id: 3,
      type: 'Sobremesas',
    },
    {
      id: 4,
      type: 'Acompanhamento',
    },
  ]);

  useEffect(() => {
    console.log('Items', items);
  }, []);

  return (
    <Container>
      <Accordion
        allowMultipleExpanded={() => true}
        allowZeroExpanded={() => true}
      >
        {items.map(item => (
          <AccordionItem key={item.id}>
            <AccordionItemHeading>
              <AccordionItemButton>{item.type}</AccordionItemButton>
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
