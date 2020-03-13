import styled from 'styled-components';
import media from 'styled-media-query';

import { colors } from '../../themes';
import { pxToRem } from '../../functions';

export const Container = styled.ul`
  margin-top: ${pxToRem(46)};

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  list-style: none;

  a {
    text-decoration: none;
    color: ${colors.gray}
  }

  ${media.lessThan('large')`
    margin: ${pxToRem(46)} auto;
  `}

  ${media.lessThan('medium')`
    margin-top: ${pxToRem(32)};
  `}

  ${media.lessThan('small')`
    margin-top: ${pxToRem(10)}

    flex-direction: column;
  `}

  li {
    position: relative;

    margin: 20px 34px;
    width: ${pxToRem(367)};
    padding: ${pxToRem(8)};
    border-radius: ${pxToRem(4)};

    display: flex;
    align-items: center;

    background: ${colors.white};
    box-shadow: 0px 2px 4px ${colors.shadow};
    transition: transform 0.2s;

    ${media.lessThan('medium')`
      width: ${pxToRem(300)};
    `}

    ${media.lessThan('small')`
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
  li:hover {
    transform: scale(1.04);
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
  box-shadow: 0px 2px 4px ${colors.shadow};

  background: ${props =>
    props.status ? `${colors.purple}` : `${colors.lightPurple}`};

  ${media.lessThan('small')`
    top: ${pxToRem(-12)};
    right: ${pxToRem(-12)};

    width: ${pxToRem(32)};
    height: ${pxToRem(32)};
  `}

  p {
    font-weight: 600;
    color: ${colors.white};
    font-size: ${pxToRem(8)};

    ${media.lessThan('small')`
      font-size: 6px;
    `}
  }
`;
