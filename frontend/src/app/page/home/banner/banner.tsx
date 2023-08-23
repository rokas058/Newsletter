// eslint-disable-next-line @typescript-eslint/no-unused-vars

import {
  StyledBannerImage,
  StyledBannerSection,
} from '@app/page/home/banner/banner.styled.ts';
import bannerImage from '@app/assets/banner-image/Black Minimal Motivation Quote LinkedIn Banner (3).png';

export const Banner = () => (
  <StyledBannerSection>
    <StyledBannerImage src={bannerImage} alt="banner-image" />
  </StyledBannerSection>
);
