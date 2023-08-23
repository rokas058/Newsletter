import styled from 'styled-components';

import { colorPeach } from '@app/styles/colors.ts';
import { spacing4 } from '@app/styles/spacing.ts';

export const StyledTravelPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 140px;
`;
export const StyledTravelCardsContainer = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;
export const StyledFormContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${colorPeach};
  border-radius: ${spacing4} 0 0 ${spacing4};
`;

export const StyledWave = styled.img`
  position: sticky;
`;
