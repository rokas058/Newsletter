import React, { FC } from 'react';

import {
  StyledFormContainer,
  StyledTravelCardsContainer,
  StyledTravelPageContainer,
} from './page-layout.styled.ts';

interface PageLayoutProps {
  childrenCard?: React.ReactNode;
  childrenForm?: React.ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = (props) => {
  const { childrenCard, childrenForm } = props;

  return (
    <StyledTravelPageContainer>
      <StyledTravelCardsContainer>{childrenCard}</StyledTravelCardsContainer>
      <StyledFormContainer>{childrenForm}</StyledFormContainer>
    </StyledTravelPageContainer>
  );
};
