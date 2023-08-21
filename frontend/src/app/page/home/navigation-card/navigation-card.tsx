import { FC, ReactElement } from 'react';

import {
  StyledContentContainer,
  StyledHeading,
  StyledNavigationCard,
  StyledNavImage,
  StyledSpan,
} from './navigation-card.styled.ts';

interface NavigationCardProps {
  imageSrc: string;
  imageSrcName: string;
  heading: string;
  description?: string;
  navigationUrl: string;
  width: string;
}

export const NavigationCard: FC<NavigationCardProps> = (
  props,
): ReactElement => {
  const { imageSrc, imageSrcName, heading, description, navigationUrl, width } =
    props;

  return (
    <StyledNavigationCard to={navigationUrl} $width={width}>
      <StyledNavImage src={imageSrc} alt={imageSrcName} />
      <StyledContentContainer>
        <StyledHeading>{heading}</StyledHeading>
        <StyledSpan>{description}</StyledSpan>
      </StyledContentContainer>
    </StyledNavigationCard>
  );
};
