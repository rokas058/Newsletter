import styled from 'styled-components';

import {
  colorPeach,
  colorVibrantGreen,
  colorWarmGrey20,
  colorWhite,
} from '@app/styles/colors.ts';
import { spacing0, spacing2, spacing4 } from '@app/styles/spacing.ts';

export const StyledCardContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: ${colorWarmGrey20};
  border-radius: ${spacing0};
  display: flex;
  margin: ${spacing4} auto;
  box-shadow: 5px 6px 16px -5px rgb(0 0 0 / 75%);
`;
export const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: 5px solid ${colorPeach};
  box-shadow: 5px 6px 16px -5px rgb(0 0 0 / 75%);
`;
export const StyledContentContainer = styled.div`
  width: 100%;
  padding: ${spacing4};
`;
export const StyledHeading5 = styled.h5`
  width: 100%;
  display: inline;
  background-color: ${colorVibrantGreen};
  color: ${colorWhite};
  text-align: center;
  padding: 2px 5px;
  border-radius: ${spacing0};
  margin-bottom: ${spacing2};
`;
export const StyledDescription = styled.p`
  font-size: 10pt;
  margin-top: 32px;
`;

export const StyledActionIconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${spacing0};
  position: relative;
  top: -${spacing2};
`;
