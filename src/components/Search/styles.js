import styled from 'styled-components';

import { metrics, colors } from '../../themes';
import { pxToRem } from '../../functions';

export const Container = styled.form`
  height: ${metrics.baseSpacing(5)};
  width: 80%;
  max-width: ${pxToRem(840)};
  box-shadow: 0px 2px 4px #00000029;
  padding: 0 ${metrics.baseSpacing(3)};
  border-radius: ${metrics.borderRadius(10)};

  display: flex;
  align-items: center;
  justify-content: space-between;

  > input {
    border: none;
    width: 100%;
    font-weight: 500;
    color: ${colors.black};
    background: ${colors.grey};
    &::placeholder {
      color: ${colors.black};
    }
  }
  > button {
    border: none;
    background: transparent;
  }

  input {
    background: ${colors.black};
  }
`;

export const SubmitButton = styled.button`
  border: none;

  display: flex;
  align-items: center;
  background: transparent;
`;
