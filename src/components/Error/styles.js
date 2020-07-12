import styled from 'styled-components';
import media from 'styled-media-query';

import { colors } from '../../themes';
import { pxToRem } from '../../functions';

export const Container = styled.div`
  width: 40%;
  margin: 0 auto;
  margin-top: 1rem;
  border-radius: 1.25rem;
  padding: ${pxToRem(10)};
  box-shadow: 0 2px 4px #00000029;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${colors.green};

  p {
    font-size: 1rem;
    font-weight: bold;
    color: ${colors.white};
  }

  ${media.lessThan('small')`
    width: 90%;

    p {
      font-size: 14px;
      font-weight: 500;
    }
  `}
`;
