import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { colorPeach, colorWhite } from '@app/styles/colors.ts';
import { spacing2 } from '@app/styles/spacing.ts';

export const StyledSocialMediaContainer = styled.div`
  width: 50px;
  height: auto;
  background-color: ${colorPeach};
  position: fixed;
  font-size: 20pt;
  display: grid;
  place-items: center;
  gap: 16px;
  padding: 16px 8px;
  right: 0;
  top: 500px;
  border-radius: ${spacing2} 0 0 ${spacing2};
  z-index: 10;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${colorWhite};
`;
