import styled from 'styled-components';

import { spacing2 } from '@app/styles/spacing.ts';
import { colorPrimary, colorWhite } from '@app/styles/colors.ts';
import logoWhite from '@app/components/footer/logo/logoWhite.png';

export const StyledFooter = styled.div`
  height: 48px;
  background: ${colorPrimary};
  color: ${colorWhite};
  padding: ${spacing2};
  background-image: url('${logoWhite}');
  background-repeat: repeat;
  background-size: contain;
`;

export const StyledFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
