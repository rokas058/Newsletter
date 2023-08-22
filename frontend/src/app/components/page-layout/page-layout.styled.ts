import styled from 'styled-components';

import { colorPeach } from '@app/styles/colors.ts';
import { spacing12 } from '@app/styles/spacing.ts';

export const StyledTravelPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding-top: ${spacing12};
`;
export const StyledTravelCardsContainer = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;
export const StyledFormContainer = styled.div`
  width: 50%;
  height: inherit;
  background-color: ${colorPeach};
`;

export const StyledWave = styled.img`
  position: absolute;
`;
