import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import React, { FC } from 'react';

import { ButtonNew } from '@app/components/button-new/button-new.tsx';
import { colorBlack, colorYellow } from '@app/styles/colors.ts';

import {
  StyledActionIconsContainer,
  StyledCardContainer,
  StyledContentContainer,
  StyledDescription,
  StyledHeading5,
  StyledImage,
  StyledImageContainer,
} from './hr-news-card.styled.ts';

interface HrNewsCardProps {
  image: string;
  categoryName: string;
  title?: string;
  text?: string;
  onEdit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const HrNewsCard: FC<HrNewsCardProps> = (props) => {
  const { image, categoryName, title, text, onDelete, onEdit } = props;

  return (
    <StyledCardContainer>
      <StyledImageContainer>
        <StyledImage src={image} alt="image" />
      </StyledImageContainer>
      <StyledContentContainer>
        <StyledActionIconsContainer>
          <ButtonNew
            $backgroundColor={colorYellow}
            $color={colorBlack}
            onClick={onEdit}
          >
            <FormOutlined />
          </ButtonNew>
          <ButtonNew
            $backgroundColor={colorYellow}
            $color={colorBlack}
            onClick={onDelete}
          >
            <DeleteOutlined />
          </ButtonNew>
        </StyledActionIconsContainer>
        <StyledHeading5>{categoryName}</StyledHeading5>
        <h2>{title}</h2>
        <StyledDescription>{text}</StyledDescription>
      </StyledContentContainer>
    </StyledCardContainer>
  );
};
