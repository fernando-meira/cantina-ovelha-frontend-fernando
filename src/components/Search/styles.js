import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { colors, metrics } from '../../themes';
import { pxToRem } from '../../functions';

const isDetailStyles = css`
  padding-left: 0;
  background: ${colors.greyDark};
  > .label {
    height: 100%;
    min-width: ${pxToRem(214)};
    margin-right: ${metrics.baseSpacing()};
    border-radius: ${pxToRem(20)} 0 0 ${pxToRem(20)};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.white};
    ${media.lessThan('small')`
      min-width: ${pxToRem(140)};
    `}
    > span {
      font-size: 16px;
      font-weight: 400;
      color: ${colors.black};
      ${media.lessThan('small')`
        font-size: 16px;
      `}
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  height: ${pxToRem(40)};
  padding: ${pxToRem(20)};
  max-width: ${pxToRem(840)};
  border-radius: ${pxToRem(20)};

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 2px 4px ${colors.shadow};

  ${media.lessThan('medium')`
    max-width: ${pxToRem(672)}
  `}

  ${media.lessThan('small')`
    max-width: ${pxToRem(320)};
  `}

  div > label {
    margin: 0 ${pxToRem(16)};

    ${media.lessThan('small')`
      display: none;
    `}
  }

  input {
    border: none;

    flex: 1;

    background: ${colors.transparent};
  }
  input::placeholder {
    color: transparent;
  }

  ${media.lessThan('small')`
    input::placeholder {
      color: ${colors.lightGray}
    }
  `}
  ${({ isDetail }) => isDetail && isDetailStyles};
`;

export const SubmitButton = styled.button`
  border: none;

  background: ${colors.transparent};
`;
