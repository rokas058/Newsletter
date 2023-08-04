import styled from 'styled-components';

import { colorVibrantGreen } from '@app/styles/colors.ts';
import bannerImage from '@app/assets/banner-image/banner.png';

export const StyledBannerSection = styled.div`
  width: 100%;
  height: 350px;
  background-color: ${colorVibrantGreen};
  background-image: url('${bannerImage}');
  background-size: contain;
  background-repeat: repeat;
`;
