import React, { useState, useEffect } from 'react';

import { Container } from './styles';

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
      type: 'Almoço',
    },
    {
      id: 2,
      type: 'Bebida',
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
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
