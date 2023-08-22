import styled from 'styled-components';

import { colorPrimary, colorWhite } from '@app/styles/colors.ts';
import logoWhite from '@app/assets/logo/logoWhite.png';

export const StyledFooter = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 48px;
  background: ${colorPrimary};
  color: ${colorWhite};
  background-image: url('${logoWhite}');
  background-repeat: repeat-x;
  background-size: auto 30px;
  box-sizing: border-box;
  background-position-y: center;
  z-index: 10;
`;

export const StyledFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
