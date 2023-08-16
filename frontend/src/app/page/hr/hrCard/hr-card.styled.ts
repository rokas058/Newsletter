import styled from 'styled-components';

import {
  colorPrimary,
  colorViolet,
  colorWhite,
  colorYellow,
} from '@app/styles/colors.ts';
import { spacing0, spacing2, spacing4 } from '@app/styles/spacing.ts';

export const StyledHrCard = styled.div`
  align-items: center;
  border: 1px solid ${colorViolet};
  display: flex;
  width: 80%;
  padding: ${spacing0} ${spacing2} ${spacing4} ${spacing2};
  background-color: ${colorWhite};
  margin: ${spacing0} 0;

  &:hover {
    border: 4px solid ${colorYellow};
  }
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
  padding-right: 200px;
  width: 300px;
`;

export const StyledImagesContainer = styled.img`
  align-items: center;
  display: flex;
  flex: 30%;
  justify-content: flex-end;
  background-color: ${colorViolet};
  width: 300px;
  height: 60px;
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
