import styled from 'styled-components';

import { colors } from '../../themes';
import { pxToRem } from '../../functions';

export const Container = styled.div`
  margin: 0 auto;
  height: ${pxToRem(40)};
  width: ${pxToRem(840)};
  padding: ${pxToRem(20)};

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${colors.gray};
  box-shadow: 0 2px 4px ${colors.shadow};
  border-radius: ${pxToRem(20)};

  div > label {
    margin: 0 ${pxToRem(16)};
  }

  input {
    border: none;

    flex: 1;

    background: ${colors.transparent};
  }
`;

export const SubmitButton = styled.button`
  border: none;

  background: ${colors.transparent};
`;
