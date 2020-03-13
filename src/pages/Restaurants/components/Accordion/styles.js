import styled from 'styled-components';
import media from 'styled-media-query';

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

  ${media.lessThan('1280px')`
    width: ${pxToRem(384)};
  `}

  ${media.lessThan('medium')`
    width: ${pxToRem(336)};
  `}

  img {
    height: auto;
    max-width: ${pxToRem(115)};
  }

  .PlateDetails {
    padding: ${pxToRem(16)};

    overflow: hidden;
    text-overflow: ellipsis;

    > p {
      margin: ${pxToRem(8)} 0;

      font-size: ${pxToRem(12)};
    }
  }

  .TopDetails {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      width: 100px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: ${pxToRem(16)};

      ${media.lessThan('medium')`
      font-size: ${pxToRem(14)};
    `}
    }
  }

  .ProductValues {
    display: flex;
    flex-direction: row;
    align-items: center;

    > p {
      margin-left: ${pxToRem(8)};

      font-size: ${pxToRem(12)};
      color: ${colors.lightGray};
      text-decoration: line-through;
    }

    > span {
      color: ${colors.green};
      font-size: ${pxToRem(16)};
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

export const PromoCard = styled.div`
  padding: ${pxToRem(5)};
  max-height: ${pxToRem(20)};
  border-radius: ${pxToRem(20)};

  display: flex;
  flex-direction: row;
  align-items: center;

  white-space: nowrap;
  color: ${colors.white};
  background: ${colors.purple};

  svg {
    width: ${pxToRem(8)};
    margin-right: ${pxToRem(5)};
  }

  > p {
    font-size: ${pxToRem(10)} !important;
    span {
      color: ${colors.white} !important;
      font-size: ${pxToRem(10)} !important;

      ${media.lessThan('medium')`
        font-size: ${pxToRem(8)} !important;
      `}
    }
    ${media.lessThan(`medium`)`
      font-size: ${pxToRem(8)} !important;

    `}
  }
`;
