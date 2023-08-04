import styled from 'styled-components';

import { colorCoolGrey, colorViolet, colorYellow } from '@app/styles/colors.ts';

export const StyledNavigationCard = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${colorViolet};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colorCoolGrey};

  &:hover {
    border: 5px solid ${colorYellow};
  }
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
`;
