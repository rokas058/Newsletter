import { FC } from 'react';

import {
  StyledHrCard,
  StyledHrCardContent,
  StyledHrCardText,
  StyledHrCardTitle,
  StyledImagesContainer,
  StyledTitleTextContainer,
} from '@app/page/hr/hrCard/hr-card.styled.ts';

interface HrCardInterface {
  title: string;
  text: string;
  image?: string;
}

export const HrCard: FC<HrCardInterface> = ({ title, text, image }) => (
  <StyledHrCard>
    <StyledHrCardContent>
      <StyledTitleTextContainer>
        <StyledHrCardTitle>Tittle{title}</StyledHrCardTitle>
        <StyledHrCardText>Tekstas q{text}</StyledHrCardText>
      </StyledTitleTextContainer>
      <StyledImagesContainer>image</StyledImagesContainer>
    </StyledHrCardContent>
  </StyledHrCard>
);
