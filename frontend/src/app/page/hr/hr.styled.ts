import styled from 'styled-components';

import { colorPrimary, colorViolet } from '@app/styles/colors.ts';
import { spacing2 } from '@app/styles/spacing.ts';

export const StyledHrContainer = styled.div`
  align-items: center;
  background: ${colorViolet};
  display: flex;
  font-size: 35px;
  min-height: 100%;
  justify-content: center;
  max-width: 100%;
  flex-direction: column;
  height: 100vh;
`;

export const StyledHrHeader = styled.h1`
  background: ${colorViolet};
  margin: 0;
  padding: ${spacing2};
  text-align: center;
  font-size: 70px;
  color: ${colorPrimary};
`;
