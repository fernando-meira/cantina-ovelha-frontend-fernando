import styled from 'styled-components';
import media from 'styled-media-query';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.div`
  max-width: ${pxToRem(1366)};
  display: flex;
  margin: 0 auto;

  ${media.lessThan('1280px')`
    max-width: ${pxToRem(1170)}
  `}
`;

export const TopContainers = styled.div`
  width: ${pxToRem(800)};
  margin-left: ${pxToRem(85)};
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
`;
