import styled from 'styled-components';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.div`
  max-width: 1366px;
  display: flex;
  margin: 0 auto;
`;

export const TopContainers = styled.div`
  width: ${pxToRem(800)};
  margin-left: ${pxToRem(85)};
`;

export const LateralBlock = styled.aside`
  width: ${pxToRem(282)};
  height: ${pxToRem(765)};
  margin-top: ${pxToRem(207)};
  margin-left: ${pxToRem(134)};

  background: ${colors.lighterGray};
`;
