import styled from 'styled-components';

import { pxToRem } from '../../../../functions';

export const Container = styled.div`
  max-width: ${pxToRem(700)};
  margin: ${pxToRem(36)} 0;
  margin-bottom: ${pxToRem(26)};

  display: flex;
  align-items: center;

  > img {
    width: ${pxToRem(145)};
    height: ${pxToRem(145)};
  }
`;

export const Details = styled.div`
  max-width: ${pxToRem(530)};
  margin-left: ${pxToRem(21)};
  > strong {
    font-weight: 500;
    font-size: ${pxToRem(24)};
  }

  > p {
    margin: ${pxToRem(8)} 0;

    font-size: ${pxToRem(16)};
  }

  > p.Days {
    margin: 0;
    font-size: ${pxToRem(12)};

    > span {
      font-weight: 600;
    }
  }
`;
