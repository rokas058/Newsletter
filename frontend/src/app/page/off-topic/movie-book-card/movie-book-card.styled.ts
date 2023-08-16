import styled from 'styled-components';
import { Rate } from 'antd';
import { NavLink } from 'react-router-dom';

import { colorMarron, colorPeach, colorYellow } from '@app/styles/colors.ts';
import { spacing0, spacing2, spacing4 } from '@app/styles/spacing.ts';

export const StyledMoviesBookCard = styled.div`
  max-width: 250px;
  height: 100%;
  background-color: ${colorPeach}70;
  box-shadow: 10px 10px 20px -14px rgb(0 0 0 / 65%);
  display: flex;
  flex-direction: column;
  gap: ${spacing2};
  align-items: center;
  justify-content: space-between;
  padding: ${spacing4} 0;
  position: relative;
`;

export const StyledHeading = styled.h1`
  margin-left: ${spacing4};
`;

export const StyledNavLink = styled(NavLink)`
  max-width: 60%;
  min-height: 70%;
`;

export const StyledImage = styled.img`
  max-width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 10px 10px 20px -14px rgb(0 0 0 / 65%);
  object-fit: cover;

  &:hover {
    border: 3px solid ${colorYellow};
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing0};
`;

export const StyledAuthor = styled.h6`
  margin: 0;
`;
export const StyledTitle = styled.h5`
  margin: 0;
  text-transform: uppercase;
`;

export const StyledRate = styled(Rate)`
  font-size: 10pt;
  color: ${colorMarron};
`;

export const StyledDescription = styled.span`
  font-size: 8pt;
  text-align: center;
`;

export const StyledButtonContainer = styled.div`
  position: absolute;
  top: ${spacing0};
  right: ${spacing0};
`;
