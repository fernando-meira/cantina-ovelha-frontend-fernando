import styled from 'styled-components';

import { colors } from '../../../../themes';
import { pxToRem } from '../../../../functions';

export const Container = styled.div`
  margin-top: ${pxToRem(24)};

  .accordion {
    border: none;
  }

  .accordion__button {
    padding: ${pxToRem(12)};
    border-bottom: 1px solid ${colors.gray};

    font-weight: 600;
    color: ${colors.gray};
    background: ${colors.transparent};
  }
`;
