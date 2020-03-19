import React from 'react';
import { Eclipse } from 'react-loading-io';

import { colors } from '../../themes';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <Eclipse color={colors.green} size={100} />
    </Container>
  );
}
