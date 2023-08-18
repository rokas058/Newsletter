import styled from 'styled-components';

import { colorPrimary, colorViolet } from '@app/styles/colors.ts';
import { spacing2 } from '@app/styles/spacing.ts';

export const StyledPageTitle = styled.h1`
  background: ${colorViolet};
  margin: 0;
  padding: ${spacing2};
  text-align: center;
  font-size: 70px;
  color: ${colorPrimary};
`;
