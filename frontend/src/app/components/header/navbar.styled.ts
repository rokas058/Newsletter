import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
  colorDarkBLue,
  colorViolet,
  colorWhite,
  colorYellow,
} from '@app/styles/colors.ts';
import { spacing4 } from '@app/styles/spacing.ts';

export const StyledNavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${colorDarkBLue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${spacing4};
`;
export const StyledLogo = styled.img`
  width: auto;
  height: 40%;
`;
export const StyledIconContainer = styled.div`
  width: 300px;
  height: 70%;
  font-size: 16pt;
  padding: 0 20px;
  color: ${colorWhite};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacing4};
`;
export const StyledIcon = styled(NavLink)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  color: ${colorWhite};

  &:hover {
    color: ${colorYellow};
  }

  &:last-child {
    height: 50%;
    background-color: ${colorWhite};
    color: ${colorDarkBLue};
    padding: 0 8px;
    border-radius: 10px;
    flex-direction: row;

    &:last-child {
      font-size: 12pt;
    }

    &:hover {
      border: 2px solid ${colorViolet};
    }
  }
`;
export const StyledIconText = styled.span`
  font-size: 10pt;
`;

export const StyledDisplayNone = styled.div`
  display: none;
`;
