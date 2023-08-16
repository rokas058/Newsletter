import styled from 'styled-components';

import { colorPrimary, colorWhite } from '@app/styles/colors.ts';
import { spacing12, spacing2 } from '@app/styles/spacing.ts';
import logoWhite from '@app/components/footer/logo/logoWhite.png';

export const StyledFooterLogin = styled.div`
  height: 48px;
  background: ${colorPrimary};
  color: ${colorWhite};
  padding: ${spacing2};
  background-image: url('${logoWhite}');
  background-repeat: repeat;
  background-size: contain;
  margin-top: ${spacing12};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
