import styled from 'styled-components';
import Modal from 'react-modal';
import media from 'styled-media-query';

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
  box-shadow: 0px 4px 8px ${colors.shadow};

  display: flex;
  align-items: center;
  flex-direction: column;

  background: ${colors.white};

  ${media.lessThan('small')`
    max-width: ${pxToRem(375)};
  `}
`;

export const HeaderModal = styled.header`
  position: relative;
  top: ${pxToRem(-25)};
  right: ${pxToRem(-300)};

  display: flex;
  align-items: center;
  flex-direction: column;

  ${media.lessThan('small')`
    top: ${pxToRem(-15)};
    right: ${pxToRem(-160)};
    z-index: 1;
  `}
  button {
    border: none;
    border-radius: 50%;
    width: ${pxToRem(48)};
    height: ${pxToRem(48)};
    box-shadow: 0px 4px 8px ${colors.shadow};

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${colors.dark};
    background-color: ${colors.secondWhite};

    svg {
      height: auto;
      width: ${pxToRem(30)};
    }

    ${media.lessThan('small')`
      width: ${pxToRem(32)};
      height: ${pxToRem(32)};
    `}
  }
`;

export const BodyModal = styled.div`
  position: relative;
  top: ${pxToRem(-20)};
  border-bottom: ${pxToRem(1)} solid ${colors.lighterGray};

  display: flex;
  align-items: center;
  flex-direction: column;

  ${media.lessThan('small')`
    img {
      max-width: 90%;
      border-radius: ${pxToRem(4)};
    }
  `}

  .PlateDetails {
    width: 100%;
    margin-top: ${pxToRem(45)};
    padding: 0 16px 24px 16px;

    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;

    > span {
      color: ${colors.green};
      font-size: ${pxToRem(32)};
      margin-left: ${pxToRem(30)};

      ${media.lessThan('small')`
        font-size: ${pxToRem(20)};
        margin-left: ${pxToRem(10)};
      `}
    }
  }

  .PlateDescription {
    max-width: 70%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > h2 {
      font-size: ${pxToRem(24)};
    }

    > p {
      font-size: ${pxToRem(16)};
    }
  }
`;

export const FooterModal = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  .QuantityOfProducts {
    width: ${pxToRem(125)};
    height: ${pxToRem(50)};
    padding: ${pxToRem(24)};
    border-radius: ${pxToRem(4)};
    border: 1px solid ${colors.lighterGray};

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${colors.green};
    font-size: ${pxToRem(24)};
    > button {
      border: none;

      color: ${colors.green};
      background: ${colors.transparent};
    }
  }

  .TotalProducts {
    width: auto;
    height: ${pxToRem(50)};
    padding: ${pxToRem(24)};
    border-radius: ${pxToRem(4)};

    display: flex;
    align-items: center;

    font-size: ${pxToRem(24)};
    color: ${colors.white};
    background-color: ${colors.green};
  }
`;
