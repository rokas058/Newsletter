import styled from 'styled-components';

import { spacing12 } from '@app/styles/spacing.ts';
import { colorPrimary, colorViolet, colorWhite } from '@app/styles/colors.ts';
import { StyledSingleJokeContainer } from '@app/page/jokes/jokes-card/jokes-card-styled.ts';

export const StyledJokesPage = styled.div`
  display: flex;
  flex-direction: row;
  background: ${colorViolet}40;
  width: 100%;
  justify-content: space-between;
`;

export const StyledJokesPageTitle = styled.h1`
  color: ${colorPrimary};
  text-align: center;
  background: ${colorViolet}40;
  padding: 40px;
  font-size: 70px;
  margin: 0;
`;

export const StyledJokesContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 35px;
  justify-content: center;
  max-width: 100%;
  align-items: center;
  padding-bottom: 50px;

  & ${StyledSingleJokeContainer}:nth-child(odd) {
    margin-right: 300px;
    background-color: ${colorViolet};
  }

  & ${StyledSingleJokeContainer}:nth-child(even) {
    margin-left: 300px;
    background-color: ${colorWhite};
  }
`;

export const StyledMemeContainer = styled.div`
  font-size: 40px;
  color: ${colorPrimary};
  padding: 50px;
  text-align: center;
`;

export const StyledMeme = styled.img`
  border: 3px solid #333333;
  border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
  position: relative;

  &::before {
    content: '';
    border: 2px solid #353535;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
    border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
  }
`;

export const StyledCardsContainer = styled.div`
  padding: 0 ${spacing12} ${spacing12};
`;
