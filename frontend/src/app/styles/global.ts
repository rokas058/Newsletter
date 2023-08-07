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
`;
