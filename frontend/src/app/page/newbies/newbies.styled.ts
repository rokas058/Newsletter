import styled from 'styled-components';

import { Container } from '@app/components/container';
import { colorViolet, colorWhite } from '@app/styles/colors.ts';

export const StyledPageTitleContainer = styled(Container)`
  height: 100vh;
  align-items: center;
  background: ${colorViolet};
  display: flex;
  font-size: 35px;
  justify-content: center;
  max-width: 100%;
`;

export const StyledPageTitle = styled.h1`
  color: ${colorWhite};
`;
