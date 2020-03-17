import styled from 'styled-components';
import Modal from 'react-modal';

import { colors } from '../../themes';
import { pxToRem } from '../../functions';

export const Container = styled(Modal)`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  width: 90%;
  max-width: ${pxToRem(600)};
  border-radius: ${pxToRem(8)};
  padding: ${pxToRem(20)} ${pxToRem(10)};
  box-shadow: 0px 4px 8px ${colors.shadow};

  display: flex;
  align-items: center;
  flex-direction: column;

  background: ${colors.white};

  > button {
    position: relative;
    top: -35px;
    right: -300px;

    width: 20px;
    height: 20px;
    border: none;
    border-radius: 50%;
    width: ${pxToRem(32)};
    height: ${pxToRem(32)};
    box-shadow: 0px 4px 8px ${colors.shadow};

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${colors.dark};
    font-size: ${pxToRem(20)};
    font-weight: bold;
    background-color: ${colors.secondWhite};
  }
`;
