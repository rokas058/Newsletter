import styled from 'styled-components';

import { spacing2 } from '@app/styles/spacing.ts';
import { colorDashboardBackground } from '@app/styles/colors.ts';

export const StyledDashboardContainer = styled.div`
  background: ${colorDashboardBackground};
  width: 100%;
  min-height: 100%;
  padding: ${spacing2} 0;
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
