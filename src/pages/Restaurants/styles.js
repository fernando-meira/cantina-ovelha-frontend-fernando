import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.div`
  max-width: ${pxToRem(1366)};
  display: flex;
  margin: 0 auto;

  ${media.lessThan('1280px')`
    max-width: ${pxToRem(1280)}
  `}

  ${media.lessThan('1024px')`
    max-width: ${pxToRem(1024)}
  `}

  ${media.lessThan('medium')`
    max-width: ${pxToRem(768)};
  `}
`;

export const TopContainers = styled.div`
  width: ${pxToRem(800)};
  margin-left: ${pxToRem(85)};

  ${media.lessThan('medium')`
    max-width: 90%;
    margin: 0 auto;
  `}
`;

export const LateralBlock = styled.aside`
  width: ${pxToRem(282)};
  height: ${pxToRem(675)};
  margin-top: ${pxToRem(207)};
  margin-left: ${pxToRem(134)};

  background: ${colors.lighterGray};

  ${media.lessThan('1280px')`
    margin-left: ${pxToRem(85)};
  `}

  ${media.lessThan('1024px')`
  display: none;
  `}
`;
