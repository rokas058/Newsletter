import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { FC } from 'react';

import { ButtonNew } from '@app/components/button-new/button-new.tsx';
import { colorBlack, colorYellow } from '@app/styles/colors.ts';

import {
  StyledActionIconsContainer,
  StyledCarousel,
  StyledContentContainer,
  StyledDescription,
  StyledHeading5,
  StyledImage,
  StyledImageContainer,
  StyledPhotosInCarousel,
  StyledTravelCardContainer,
} from './travel-card.styled.ts';

interface TravelCardProps {
  image1: string;
  image2?: string;
  image3?: string;
  image4?: string;
  categoryName: string;
  title: string;
  text: string;
}

export const TravelCard: FC<TravelCardProps> = (props) => {
  const { categoryName, title, text, image1, image2, image3, image4 } = props;

  return (
    <StyledTravelCardContainer>
      <StyledImageContainer>
        <StyledCarousel>
          <StyledPhotosInCarousel>
            <StyledImage src={image1} alt="image-1" />
          </StyledPhotosInCarousel>
          <StyledPhotosInCarousel>
            <StyledImage src={image2} alt="image-2" />
          </StyledPhotosInCarousel>
          <StyledPhotosInCarousel>
            <StyledImage src={image3} alt="image-3" />
          </StyledPhotosInCarousel>
          <StyledPhotosInCarousel>
            <StyledImage src={image4} alt="image-4" />
          </StyledPhotosInCarousel>
        </StyledCarousel>
      </StyledImageContainer>
      <StyledContentContainer>
        <StyledActionIconsContainer>
          <ButtonNew $backgroundColor={colorYellow} $color={colorBlack}>
            <FormOutlined />
          </ButtonNew>
          <ButtonNew $backgroundColor={colorYellow} $color={colorBlack}>
            <DeleteOutlined />
          </ButtonNew>
        </StyledActionIconsContainer>
        <StyledHeading5>{categoryName}</StyledHeading5>
        <h2>{title}</h2>
        <StyledDescription>{text}</StyledDescription>
      </StyledContentContainer>
    </StyledTravelCardContainer>
  );
};
