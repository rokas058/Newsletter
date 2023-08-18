import styled from 'styled-components';

import { colorPrimary, colorViolet, colorWhite } from '@app/styles/colors.ts';
import { spacing0, spacing2, spacing4 } from '@app/styles/spacing.ts';

export const StyledHrCard = styled.div`
  align-items: center;
  border: 1px solid ${colorViolet};
  border-radius: 15px;
  display: flex;
  width: 60%;
  padding: ${spacing0} ${spacing2} ${spacing4} ${spacing2};
  background-color: ${colorWhite};
  margin: ${spacing0} 0;
`;

export const StyledHrCardContent = styled.div`
  display: flex;
  word-wrap: break-word;
  width: 100%;
  align-items: center;
`;

export const StyledTitleTextContainer = styled.div`
  flex: 70%;
  flex-grow: 1;
  padding: 50px;
  width: 300px;
`;

export const StyledImagesContainer = styled.img`
  align-items: center;
  display: flex;
  flex: 30%;
  justify-content: flex-end;
  background-color: ${colorWhite};
  max-width: 442px;
  max-height: 442px;
  padding: 20px;
`;

export const StyledHrCardTitle = styled.h4`
  display: flex;
  justify-content: space-between;
  color: ${colorPrimary};
`;

export const StyledHrCardText = styled.p`
  color: ${colorPrimary};
  font-size: 20px;
`;

export const StyledIconsWrapper = styled.div`
  display: flex;
  gap: ${spacing0};
`;
