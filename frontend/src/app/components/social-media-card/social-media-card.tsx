import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterSquareFilled,
} from '@ant-design/icons';

import {
  StyledNavLink,
  StyledSocialMediaContainer,
} from '@app/components/social-media-card/social-media-card.styled.ts';

export const SocialMediaIcons = () => (
  <StyledSocialMediaContainer>
    <StyledNavLink to="https://www.facebook.com/Tietoevry/">
      <FacebookFilled />
    </StyledNavLink>
    <StyledNavLink to="https://www.instagram.com/tietoevrylt/">
      <InstagramFilled />
    </StyledNavLink>
    <StyledNavLink to="https://www.linkedin.com/company/tietoevry/">
      <LinkedinFilled />
    </StyledNavLink>
    <StyledNavLink to="https://twitter.com/Tietoevry/status/1507658648742412295">
      <TwitterSquareFilled />
    </StyledNavLink>
  </StyledSocialMediaContainer>
);
