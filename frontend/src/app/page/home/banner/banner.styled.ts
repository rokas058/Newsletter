import styled from 'styled-components';

import {
  colorVibrantGreen,
  colorViolet,
  colorWhite,
} from '@app/styles/colors.ts';
import { ButtonNew } from '@app/components/button-new/button-new.tsx';
import { spacing2 } from '@app/styles/spacing.ts';

export const StyledBannerSection = styled.div`
  width: 100%;
  height: 600px;
  background-color: ${colorViolet}40;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBannerImage = styled.img`
  width: 100%;
`;
export const StyledPublishButton = styled(ButtonNew)<{
  $notPublished: boolean;
}>`
  padding: ${spacing2} ${spacing2};
  background-color: ${colorVibrantGreen};
  color: ${colorWhite};
  position: absolute;
  right: ${spacing2};
  bottom: ${spacing2};
  border-radius: ${(props) => (props.$notPublished ? '50%' : '10px')};

  &:hover {
    background-color: ${colorVibrantGreen}90;
  }
`;
