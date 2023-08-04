import React from 'react';

import {
  StyledIconImage,
  StyledImageContainer,
  StyledNavigationCard,
  StyledNavLink,
  StyledSectionTitle,
} from '@app/page/home/navigation-card/navigation-card.styled.ts';

interface NavigationCardProps {
  title: string;
  iconImage: string;
  navigationURL: string;
}

export const NavigationCard: React.FC<NavigationCardProps> = (props) => {
  const { title, iconImage, navigationURL } = props;

  return (
    <StyledNavigationCard>
      <StyledNavLink to={navigationURL}>
        <StyledImageContainer>
          <StyledIconImage src={iconImage} alt="hr-front-section" />
        </StyledImageContainer>
        <StyledSectionTitle>{title}</StyledSectionTitle>
      </StyledNavLink>
    </StyledNavigationCard>
  );
};
