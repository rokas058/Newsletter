import { FC, ReactElement } from 'react';

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

export const HrCard: FC<HrCardInterface> = (props): ReactElement => {
  const { title, text, image } = props;

  return (
    <StyledHrCard>
      <StyledHrCardContent>
        <StyledTitleTextContainer>
          <StyledHrCardTitle>{title}</StyledHrCardTitle>
          <StyledHrCardText>{text}</StyledHrCardText>
        </StyledTitleTextContainer>
        <StyledImagesContainer src={image} />
      </StyledHrCardContent>
    </StyledHrCard>
  );
};
