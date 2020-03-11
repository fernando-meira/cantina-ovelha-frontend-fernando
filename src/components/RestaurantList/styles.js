import styled from 'styled-components';
import media from 'styled-media-query';

import { colors } from '../../themes';
import { pxToRem } from '../../functions';

export const Container = styled.ul`
  margin-top: ${pxToRem(46)};

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  list-style: none;

  ${media.lessThan('small')`
    margin-top: ${pxToRem(10)}

    flex-direction: column;
  `}

  li {
    position: relative;

    width: ${pxToRem(367)};
    margin: 20px 34px;

    display: flex;
    align-items: center;
    padding: ${pxToRem(8)};
    border-radius: ${pxToRem(4)};

    background: ${colors.white};
    box-shadow: 0px 2px 4px ${colors.shadow};

    ${media.lessThan('small')`
      width: ${pxToRem(300)}
    `}

    img {
      align-self: center;

      max-width: ${pxToRem(100)};
      max-height: ${pxToRem(100)};
    }

    div {
      display: flex;
      flex-direction: column;
      > strong {
        font-size: ${pxToRem(16)};
      }

      > span {
        font-size: ${pxToRem(12)};
      }
    }
  }
`;

export const OpenOrClosed = styled.div`
  position: absolute;
  top: ${pxToRem(-24)};
  right: ${pxToRem(-24)};

  width: ${pxToRem(48)};
  height: ${pxToRem(48)};
  border-radius: 50%;

  text-align: center;
  justify-content: center;

  background: ${props =>
    props.status ? `${colors.purple}` : `${colors.lightPurple}`};

  p {
    font-weight: 800;
    color: ${colors.white};
    font-size: ${pxToRem(8)};
  }
`;
