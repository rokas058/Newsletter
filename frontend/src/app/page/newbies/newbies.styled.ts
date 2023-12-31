import styled from 'styled-components';

import { Container } from '@app/components/container';
import { colorWhite } from '@app/styles/colors.ts';
import { spacing2 } from '@app/styles/spacing.ts';

export const StyledPageTitleContainer = styled(Container)`
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  font-size: 35px;
  justify-content: center;
  max-width: 100%;
  gap: ${spacing2};
  flex-wrap: wrap;
`;

export const StyledPageTitle = styled.h1`
  color: ${colorWhite};
`;
