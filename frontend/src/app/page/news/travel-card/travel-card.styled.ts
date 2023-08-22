import styled from 'styled-components';

import {
  colorVibrantGreen,
  colorWarmGrey20,
  colorWhite,
} from '@app/styles/colors.ts';
import { spacing0, spacing2, spacing4 } from '@app/styles/spacing.ts';

export const StyledTravelCardContainer = styled.div`
  width: 70%;
  height: 400px;
  background-color: ${colorWarmGrey20};
  border-radius: ${spacing4};
  display: flex;
  margin: ${spacing4} auto;
  box-shadow: 5px 6px 16px -5px rgb(0 0 0 / 75%);
`;
export const StyledImageContainer = styled.div`
  width: 50%;
  height: 100%;
`;
export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px 0 0 30px;
`;
export const StyledContentContainer = styled.div`
  width: 50%;
  padding: ${spacing4};
`;
export const StyledHeading5 = styled.h5`
  width: 70px;
  min-width: 70px;
  max-width: 600px;
  background-color: ${colorVibrantGreen};
  color: ${colorWhite};
  text-align: center;
  padding: 1px 0;
  border-radius: ${spacing0};
  margin-bottom: ${spacing2};
`;
export const StyledDescription = styled.p`
  font-size: 10pt;
  margin-top: 32px;
`;
export const StyledAuthorContainer = styled.div`
  align-self: start;
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${colorWhite};
  padding: 8px 16px;
  border-radius: 16px;
`;
export const StyledProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const StyledActionIconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${spacing0};
  position: relative;
  top: -${spacing2};
`;
