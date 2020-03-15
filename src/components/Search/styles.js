import styled from 'styled-components';
import media from 'styled-media-query';

import { colors } from '../../themes';
import { pxToRem } from '../../functions';

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
  `};
`;

export const SubmitButton = styled.button`
  border: none;

  background: ${colors.transparent};
`;
