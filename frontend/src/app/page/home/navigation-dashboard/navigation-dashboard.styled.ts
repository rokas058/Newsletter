import styled from 'styled-components';

import { spacing2, spacing4 } from '@app/styles/spacing.ts';
import { colorViolet40 } from '@app/styles/colors.ts';

export const StyledColorContainer = styled.div`
  background-color: ${colorViolet40};
`;
export const StyledDashboardContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing2};
  margin: ${spacing4} auto;
  padding: ${spacing4};
`;

export const StyledFlexRowContainer = styled.div<{
  $height: string;
}>`
  height: ${(props) => props.$height};
  display: flex;
  gap: ${spacing2};
`;

export const StyledFlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing2};
`;
