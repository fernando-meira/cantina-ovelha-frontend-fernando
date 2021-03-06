import { createGlobalStyle } from 'styled-components';

import { colors } from '.';
import { pxToRem } from '../functions';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: ${colors.white};
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: ${colors.gray};
    font-size: ${pxToRem(16)};
    font-family: Montserrat, Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
