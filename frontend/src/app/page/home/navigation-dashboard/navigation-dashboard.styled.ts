import styled from 'styled-components';

import { spacing2 } from '@app/styles/spacing.ts';

export const StyledDashboardContainer = styled.div`
  width: 100%;
  min-height: 100%;
  //margin-top: ${spacing2};
`;

export const StyledFlexRowContainer = styled.div`
  display: flex;
  //gap: ${spacing2};
`;

export const StyledFlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  //gap: ${spacing2};
`;
