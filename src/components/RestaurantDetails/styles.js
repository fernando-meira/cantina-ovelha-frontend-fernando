import styled from 'styled-components';
import media from 'styled-media-query';

import { pxToRem } from '../../functions';

export const Container = styled.div`
  margin: ${pxToRem(36)} 0;
  max-width: ${pxToRem(700)};
  margin-bottom: ${pxToRem(26)};

  display: flex;
  align-items: center;

  > img {
    width: ${pxToRem(145)};
    height: ${pxToRem(145)};
  }

  ${media.lessThan('medium')`
    flex-direction: column;
  `}

  ${media.lessThan('small')`
    margin: ${pxToRem(16)} 0;
  `}
`;

export const Details = styled.div`
  max-width: ${pxToRem(530)};
  margin-left: ${pxToRem(21)};

  ${media.lessThan('medium')`
    margin-left: 0;
  `}

  ${media.lessThan('small')`
    display: flex;
    align-items: center;
    flex-direction: column;
  `}

  > strong {
    font-weight: 500;
    font-size: ${pxToRem(24)};
  }

  > p {
    margin: ${pxToRem(8)} 0;

    font-size: ${pxToRem(16)};

    ${media.lessThan('small')`
      text-align: center;
    `}
  }

  > p.Days {
    margin: 0;
    font-size: ${pxToRem(12)};

    > span {
      font-weight: 600;
    }
  }
`;

export const LogoRestaurant = styled.div`
  width: ${pxToRem(145)};
  height: ${pxToRem(145)};
  margin-right: ${pxToRem(20)};
  border-radius: ${pxToRem(4)};

  background: transparent url(${({ backgroundImage }) => backgroundImage})
    no-repeat;
  background-size: cover;
  background-position: center;

  ${media.lessThan('medium')`
    margin-right: 0;
    margin-bottom: ${pxToRem(20)};
  `}
`;
