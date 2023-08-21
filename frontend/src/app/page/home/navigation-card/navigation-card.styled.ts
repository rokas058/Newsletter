import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { spacing0, spacing2 } from '@app/styles/spacing.ts';
import { colorBlack, colorWhite, colorYellow } from '@app/styles/colors.ts';
import { font12 } from '@app/styles/fonts.ts';

export const StyledNavigationCard = styled(NavLink)<{ $width: string }>`
  width: ${(props) => props.$width};
  height: 100%;
  border-radius: ${spacing2};
  padding: 20px;
  box-shadow: 5px 6px 16px -5px rgb(0 0 0 / 75%);
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
  background-color: ${colorWhite};
  text-decoration: none;
  color: ${colorBlack};

  &:hover {
    outline: 5px solid ${colorYellow};
  }
`;
export const StyledNavImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  border-radius: ${spacing2};
`;
export const StyledContentContainer = styled.div`
  width: 90%;
  padding: ${spacing2};
`;
export const StyledHeading = styled.h4`
  margin-top: ${spacing0};
  text-transform: uppercase;
`;
export const StyledSpan = styled.span`
  font-size: ${font12};
`;
