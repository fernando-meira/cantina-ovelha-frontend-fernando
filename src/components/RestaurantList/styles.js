import styled from 'styled-components';
import media from 'styled-media-query';

import { colors } from '../../themes';
import { pxToRem } from '../../functions';

export const Container = styled.ul`
  margin-top: ${pxToRem(46)};

  display: grid;
  grid-gap: ${pxToRem(48)};
  grid-template-columns: repeat(3, 1fr);

  list-style: none;
  li {
    position: relative;

    display: flex;
    align-items: center;
    padding: ${pxToRem(8)};
    border-radius: ${pxToRem(4)};

    background: ${colors.white};
    box-shadow: 0px 2px 4px ${colors.shadow};

    img {
      align-self: center;

      max-width: ${pxToRem(100)};
    }

    div {
      display: flex;
      flex-direction: column;
      > strong {
        font-size: ${pxToRem(16)};
      }

      > span {
        font-size: ${pxToRem(12)};
      }
    }

    }
  }
`;

export const OpenOrClosed = styled.div`
  position: absolute;
      top: ${pxToRem(-24)};
      right: ${pxToRem(-24)};

      width: ${pxToRem(48)};
      height: ${pxToRem(48)};
      border-radius: 50%;

      text-align: center;
      justify-content: center;

      background: ${colors.purple};

      p {
        font-weight: 800;
        color: ${colors.white};
        font-size: ${pxToRem(8)};
`;
