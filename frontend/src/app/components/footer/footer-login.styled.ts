import styled from 'styled-components';

import { colorPrimary, colorWhite } from '@app/styles/colors.ts';
import { spacing2 } from '@app/styles/spacing.ts';
import logoWhite from '@app/assets/logo/logoWhite.png';

export const StyledFooterLogin = styled.div`
  height: 48px;
  background: ${colorPrimary};
  color: ${colorWhite};
  padding: ${spacing2};
  background-image: url('${logoWhite}');
  background-repeat: repeat-x;
  background-size: auto 30px;
  box-sizing: border-box;
  background-position-y: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
