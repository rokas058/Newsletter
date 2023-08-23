import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { FC } from 'react';

import { ButtonNew } from '@app/components/button-new/button-new.tsx';
import { colorBlack, colorYellow } from '@app/styles/colors.ts';

import {
  StyledActionIconsContainer,
  StyledContentContainer,
  StyledDescription,
  StyledHeading5,
  StyledImage,
  StyledImageContainer,
  StyledTravelCardContainer,
} from './travel-card.styled.ts';

interface TravelCardProps {
  image: string;
  categoryName: string;
  title: string;
  text: string;
}

export const TravelCard: FC<TravelCardProps> = (props) => {
  const { image, categoryName, title, text } = props;

  return (
    <StyledTravelCardContainer>
      <StyledImageContainer>
        <StyledImage src={image} alt="image" />
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
