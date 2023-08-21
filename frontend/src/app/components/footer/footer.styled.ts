import styled from 'styled-components';

import { spacing2 } from '@app/styles/spacing.ts';
import { colorPrimary, colorWhite } from '@app/styles/colors.ts';
import logoWhite from '@app/assets/logo/logoWhite.png';

export const StyledFooter = styled.div`
  height: 48px;
  background: ${colorPrimary};
  color: ${colorWhite};
  padding: ${spacing2};
  background-image: url('${logoWhite}');
  background-repeat: repeat-x;
  background-size: auto 30px;
  box-sizing: border-box;
  background-position-y: center;
`;

export const StyledFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
