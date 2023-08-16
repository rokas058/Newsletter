import styled from 'styled-components';

import { colorWhite } from '@app/styles/colors.ts';

export const StyledDeletePopUpContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colorWhite};
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.9;
  z-index: 10;
  display: flex;
  justify-content: center;
`;

export const StyledAlertContainer = styled.div`
  width: 600px;
  height: auto;
`;
