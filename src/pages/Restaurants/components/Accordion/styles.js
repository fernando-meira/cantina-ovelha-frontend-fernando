import styled from 'styled-components';

import { colors } from '../../../../themes';
import { pxToRem } from '../../../../functions';

export const Container = styled.div`
  margin-top: ${pxToRem(24)};
  margin-bottom: ${pxToRem(160)};

  .accordion {
    border-radius: 2px;
  }

  /* .accordion__item + .accordion__item {
    border: none;
  } */

  .accordion__button {
    width: 100%;
    border: none;
    padding: ${pxToRem(18)};

    color: #444;
    cursor: pointer;
    text-align: left;
    background-color: #f4f4f4;
}

.accordion__button:hover {
  background-color: ${colors.lighterGray};
}

.accordion__button:before {
  content: '';
  width: ${pxToRem(10)};
  height: ${pxToRem(10)};
  margin-right: ${pxToRem(12)};
  border-bottom: ${pxToRem(2)} solid currentColor;
  border-right: ${pxToRem(2)} solid currentColor;

  display: inline-block;

  transform: rotate(-45deg);
}

.accordion__button[aria-expanded='true']::before,
.accordion__button[aria-selected='true']::before {
  transform: rotate(45deg);
}

.accordion__button {
  padding: ${pxToRem(12)};
  border-bottom: ${pxToRem(1)} solid ${colors.gray};

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  font-weight: 600;
  color: ${colors.gray};
  background: ${colors.transparent};
}
  /* .accordion__heading {
    margin-top: ${pxToRem(37)};
  } */

  .accordion__panel {
  padding: 0;
  animation: fadein 0.35s ease-in;
}


  .Panel {
    margin-bottom: ${pxToRem(37)};

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
    height: 100%;
    max-width: ${pxToRem(115)};
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

  .ProductValues {
    display: flex;
    align-items: center;

    > p {
      margin-left: ${pxToRem(8)};

      color: ${colors.lightGray};
      text-decoration: line-through;
    }
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
