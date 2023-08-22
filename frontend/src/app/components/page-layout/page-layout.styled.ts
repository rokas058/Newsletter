import styled from 'styled-components';

import { colorPeach } from '@app/styles/colors.ts';

export const StyledTravelPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  top: -320px;
`;
export const StyledTravelCardsContainer = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
export const StyledFormContainer = styled.div`
  width: 50%;
  background-color: ${colorPeach};
  z-index: -1;
`;

export const StyledWave = styled.img`
  position: sticky;
`;
