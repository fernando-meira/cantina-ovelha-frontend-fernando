import styled from 'styled-components';

import { colors } from '../../../../themes';
import { pxToRem } from '../../../../functions';

export const Container = styled.div`
  margin-top: ${pxToRem(24)};

  .accordion {
    border: none;
  }

  /* .accordion__heading {
    margin-top: ${pxToRem(37)};
  } */

  .accordion__panel {
    padding: 0;
  }

  .accordion__item {
    border: none;
  }

  .Panel {
    margin-bottom: ${pxToRem(37)};

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .accordion__button {
    padding: ${pxToRem(12)};
    border-bottom: 1px solid ${colors.gray};

    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    font-weight: 600;
    color: ${colors.gray};
    background: ${colors.transparent};
  }
`;

export const ItemRestaurant = styled.section`
  width: ${pxToRem(386)};
  height: ${pxToRem(115)};
  margin-top: ${pxToRem(24)};

  display: flex;
  align-items: center;

  background: ${colors.white};
  box-shadow: 0px 4px 8px ${colors.shadow};

  img {
    max-width: ${pxToRem(115)};
    max-height: ${pxToRem(115)};
  }

  .PlateDetais {
    padding: ${pxToRem(16)};

    strong {
      font-size: ${pxToRem(16)};
    }

    p {
      margin: ${pxToRem(8)} 0;

      font-size: ${pxToRem(12)};
    }

    span {
      color: ${colors.green};
      font-size: ${pxToRem(16)};
    }
  }
`;
