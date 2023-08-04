import React from 'react';

import {
  StyledIconImage,
  StyledImageContainer,
  StyledNavigationCard,
  StyledSectionTitle,
} from '@app/page/home/navigation-card/navigation-card.styled.ts';

interface NavigationCardProps {
  title: string;
  iconImage: string;
}

export const NavigationCard: React.FC<NavigationCardProps> = (props) => {
  const { title, iconImage } = props;

  return (
    <>
      <StyledNavigationCard>
        <StyledImageContainer>
          <StyledIconImage src={iconImage} alt="hr-front-section" />
        </StyledImageContainer>
        <StyledSectionTitle>{title}</StyledSectionTitle>
      </StyledNavigationCard>
    </>
  );
};
