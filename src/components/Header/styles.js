import styled from 'styled-components';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.header`
  width: 100%;
  height: ${pxToRem(62)};

  background: ${colors.green};
  box-shadow: 0px 4px 8px #00000029;
`;
