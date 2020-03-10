import styled from 'styled-components';

import { pxToRem } from '../../../../functions';

export const Container = styled.div`
  display: flex;

  h1 {
    margin: ${pxToRem(32)} auto;

    font-weight: 400;
    font-size: ${pxToRem(24)};
  }
`;
