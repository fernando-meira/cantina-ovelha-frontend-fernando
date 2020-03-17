import styled from 'styled-components';
import media from 'styled-media-query';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.button`
  position: fixed;
  top: ${pxToRem(850)};

  border: none;
  border-radius: 50%;
  width: ${pxToRem(50)};
  height: ${pxToRem(50)};
  box-shadow: 0px 4px 8px ${colors.shadow};

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${colors.green};

  ${media.lessThan('1300px')`
    top: calc(100vh - 10%);
    left: calc(100vh - 50%);

    width: ${pxToRem(32)};
    height: ${pxToRem(32)};
  `}

  ${media.lessThan('small')`
    display: none;
  `}

  svg {
    color: ${colors.secondWhite};
    font-size: ${pxToRem(30)};
  }
`;
