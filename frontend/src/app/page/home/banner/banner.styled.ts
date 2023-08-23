import styled from 'styled-components';

import { colorViolet } from '@app/styles/colors.ts';

export const StyledBannerSection = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${colorViolet}40;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 6px 16px -5px rgb(0 0 0 / 75%);
`;

export const StyledBannerImage = styled.img`
  width: 100%;
  height: 100%;
`;
