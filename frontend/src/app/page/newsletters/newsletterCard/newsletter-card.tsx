import { FC, ReactElement } from 'react';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';

import { ButtonNew } from '@app/components/button-new/button-new.tsx';
import {
  StyledDateCreated,
  StyledIconsContainer,
  StyledNewsletterCard,
} from '@app/page/newsletters/newsletterCard/newsletter-card.styled.ts';
import { colorDarkBLue, colorYellow } from '@app/styles/colors.ts';

interface NewsletterCardInterface {
  title: string;
  publishedDate: string;
  onClick?: () => void;
  onDelete?: () => void;
}

export const NewsletterCard: FC<NewsletterCardInterface> = (
  props,
): ReactElement => {
  const { title, publishedDate, onClick, onDelete } = props;

  return (
    <StyledNewsletterCard onClick={onClick}>
      <h4>{title}</h4>
      <StyledDateCreated>{publishedDate}</StyledDateCreated>

      <StyledIconsContainer>
        <ButtonNew $backgroundColor={colorYellow} $color={colorDarkBLue}>
          <FormOutlined />
        </ButtonNew>
        <ButtonNew $backgroundColor={colorYellow} $color={colorDarkBLue}>
          <DeleteOutlined onClick={onDelete} />
        </ButtonNew>
      </StyledIconsContainer>
    </StyledNewsletterCard>
  );
};
