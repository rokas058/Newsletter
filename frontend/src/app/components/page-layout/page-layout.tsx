import React, { FC } from 'react';

import waveImage from '@app/assets/wave-background/wave.svg';

import {
  StyledFormContainer,
  StyledTravelCardsContainer,
  StyledTravelPageContainer,
  StyledWave,
} from './page-layout.styled.ts';

interface PageLayoutProps {
  childrenCard?: React.ReactNode;
  childrenForm?: React.ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = (props) => {
  const { childrenCard, childrenForm } = props;

  return (
    <>
      <StyledWave src={waveImage} alt="backgorund" />
      <StyledTravelPageContainer>
        <StyledTravelCardsContainer>{childrenCard}</StyledTravelCardsContainer>
        <StyledFormContainer>{childrenForm}</StyledFormContainer>
      </StyledTravelPageContainer>
    </>
  );
};
