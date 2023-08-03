import styled from 'styled-components';

import { colorRed } from '@app/styles/colors.ts';
import { spacing2 } from '@app/styles/spacing.ts';

export const StyledDashboardContainer = styled.div`
  width: 100%;
  min-height: 100%;
  border: 5px solid ${colorRed};
  margin-top: ${spacing2};
`;

export const StyledFlexRowContainer = styled.div`
  display: flex;
  gap: ${spacing2};
`;

export const StyledFlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing2};
`;
