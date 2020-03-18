import styled from 'styled-components';
import media from 'styled-media-query';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.button`
  /* position: relative; */
  /* top: ${pxToRem(850)}; */

  border: none;
  border-radius: 50%;
  width: ${pxToRem(36)};
  height: ${pxToRem(36)};
  box-shadow: 0px 4px 8px ${colors.shadow};

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${colors.secondWhite};

  ${media.lessThan('1300px')`
    /* top: calc(100vh - 10%);
    left: calc(100vh - 50%); */

    width: ${pxToRem(32)};
    height: ${pxToRem(32)};
  `}

  ${media.lessThan('small')`
    display: none;
  `}

  svg {
    color: ${colors.green};
    font-size: ${pxToRem(24)};
  }
`;
