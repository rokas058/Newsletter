import styled from 'styled-components';

import { colorPrimary, colorViolet } from '@app/styles/colors.ts';
import { spacing2 } from '@app/styles/spacing.ts';

export const StyledHrCard = styled.div`
  align-items: center;
  border: 1px solid ${colorViolet};
  display: flex;
  width: 80%;
  padding: ${spacing2};
  background-color: ${colorViolet};
`;

export const StyledHrCardContent = styled.div`
  display: flex;
  word-wrap: break-word;
  width: 100%;
`;

export const StyledTitleTextContainer = styled.div`
  flex: 70%;
  flex-grow: 1;
  padding-right: 20px;
  width: 300px;
`;

export const StyledImagesContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 30%;
  justify-content: flex-end;
  background-color: ${colorViolet};
`;

export const StyledHrCardTitle = styled.h4`
  color: ${colorPrimary};
`;

export const StyledHrCardText = styled.p`
  color: ${colorPrimary};
  font-size: 20px;
`;
