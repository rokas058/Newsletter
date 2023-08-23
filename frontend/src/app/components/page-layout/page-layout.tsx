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
  const role = sessionStorage.getItem('role');

  return (
    <>
      <StyledWave src={waveImage} alt="wave-image" />
      <StyledTravelPageContainer>
        <StyledTravelCardsContainer>{childrenCard}</StyledTravelCardsContainer>
        {role === 'ADMIN' && (
          <StyledFormContainer>{childrenForm}</StyledFormContainer>
        )}
      </StyledTravelPageContainer>
    </>
  );
};
