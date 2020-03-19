import styled from 'styled-components';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.header`
  width: 100%;
  height: ${pxToRem(62)};
  padding: ${pxToRem(16)};

  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: ${colors.green};
  box-shadow: 0px 4px 8px ${colors.shadow};
`;
