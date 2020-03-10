import styled from 'styled-components';

import { colors } from '../../themes';
import { pxToRem } from '../../functions';

export const Container = styled.ul`
  margin-top: ${pxToRem(46)};

  display: grid;
  grid-gap: ${pxToRem(48)};
  grid-template-columns: repeat(3, 1fr);

  list-style: none;
  li {
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
`;
