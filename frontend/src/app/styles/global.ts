import { createGlobalStyle } from 'styled-components';

import { colorWhite } from '@app/styles/colors.ts';

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    height: 100%;
    background: ${colorWhite}
  }

  /* stylelint-disable-next-line selector-max-id */
  #root,
  html {
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6, div, span {
    font-family: "Tietoevry Sans 1", serif;
  }

`;
