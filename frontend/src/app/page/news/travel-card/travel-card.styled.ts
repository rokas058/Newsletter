import styled from 'styled-components';
import { Carousel } from 'antd';

import {
  colorVibrantGreen,
  colorWarmGrey20,
  colorWhite,
} from '@app/styles/colors.ts';
import {
  spacing0,
  spacing14,
  spacing2,
  spacing4,
} from '@app/styles/spacing.ts';

export const StyledTravelCardContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: ${colorWarmGrey20};
  border-radius: ${spacing4};
  display: flex;
  justify-content: flex-end;
  box-shadow: 5px 6px 16px -5px rgb(0 0 0 / 75%);
  margin-bottom: ${spacing14};
  position: relative;
`;
export const StyledImageContainer = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  bottom: -70px;
  left: -30px;
`;

export const StyledCarousel = styled(Carousel)`
  height: 350px;
  box-shadow: 5px 6px 16px -5px rgb(0 0 0 / 75%);
  border-radius: ${spacing4};
`;

export const StyledPhotosInCarousel = styled.div`
  height: 350px;
  object-fit: cover;
`;
export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${spacing4};
`;
export const StyledContentContainer = styled.div`
  width: 50%;
  padding: ${spacing4};
`;
export const StyledHeading5 = styled.h5`
  display: inline;
  min-width: 70px;
  max-width: 600px;
  background-color: ${colorVibrantGreen};
  color: ${colorWhite};
  text-align: center;
  padding: 2px ${spacing2};
  border-radius: ${spacing0};
  margin-bottom: ${spacing2};
`;
export const StyledDescription = styled.p`
  font-size: 10pt;
  margin-top: 32px;
  white-space: pre-line;
`;

export const StyledActionIconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${spacing0};
  position: relative;
  top: -${spacing2};
`;
