import styled from 'styled-components';

import { colorVibrantGreen, colorWhite } from '@app/styles/colors.ts';
import bannerImage from '@app/assets/banner-image/banner.png';
import { ButtonNew } from '@app/components/button-new/button-new.tsx';
import { spacing2, spacing4 } from '@app/styles/spacing.ts';

export const StyledBannerSection = styled.div`
  width: 100%;
  height: 350px;
  background-color: ${colorVibrantGreen};
  background-image: url('${bannerImage}');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

export const StyledPublishButton = styled(ButtonNew)`
  padding: ${spacing4} ${spacing2};
  background-color: ${colorVibrantGreen};
  color: ${colorWhite};
  position: absolute;
  right: ${spacing2};
  bottom: ${spacing2};
`;
