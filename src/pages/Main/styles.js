import styled from 'styled-components';
import media from 'styled-media-query';

import { pxToRem } from '../../functions';

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${pxToRem(1366)};

  ${media.lessThan('large')`
    max-width: 1170px;
  `}
`;
