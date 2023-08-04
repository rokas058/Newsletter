import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { colorCoolGrey, colorViolet, colorYellow } from '@app/styles/colors.ts';

export const StyledNavigationCard = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${colorViolet};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 5px solid ${colorYellow};
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`;

export const StyledImageContainer = styled.div`
  & * {
    color: ${colorViolet};
  }
`;
export const StyledIconImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const StyledSectionTitle = styled.h1`
  color: ${colorCoolGrey};
  text-transform: uppercase;
  text-align: center;
  margin: 0;
`;
