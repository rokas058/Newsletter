import React, { FC, ReactElement } from 'react';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';

import { ButtonNew } from '@app/components/button-new/button-new.tsx';
import {
  StyledDateCreated,
  StyledIconsContainer,
  StyledNewsletterCard,
  StyledTitleAndDateContainer,
} from '@app/page/newsletters/newsletterCard/newsletter-card.styled.ts';
import {
  colorDarkBLue,
  colorWarmGrey,
  colorYellow,
} from '@app/styles/colors.ts';

interface NewsletterCardInterface {
  title: string;
  publishedDate: string;
  onNavigate?: () => void;
  onEdit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isPublished: boolean;
}

export const NewsletterCard: FC<NewsletterCardInterface> = (
  props,
): ReactElement => {
  const { title, publishedDate, onEdit, onDelete, isPublished, onNavigate } =
    props;

  return (
    <StyledNewsletterCard onClick={onNavigate}>
      <StyledTitleAndDateContainer>
        <h4>{title}</h4>
        <StyledDateCreated>{publishedDate}</StyledDateCreated>
      </StyledTitleAndDateContainer>

      <StyledIconsContainer>
        <ButtonNew
          $backgroundColor={colorYellow}
          $color={colorDarkBLue}
          onClick={onEdit}
        >
          <FormOutlined />
        </ButtonNew>

        <ButtonNew
          $backgroundColor={isPublished ? `${colorWarmGrey}20` : colorYellow}
          $color={colorDarkBLue}
          onClick={onDelete}
          style={{ opacity: isPublished ? 0.4 : 1 }}
        >
          <DeleteOutlined />
        </ButtonNew>
      </StyledIconsContainer>
    </StyledNewsletterCard>
  );
};
