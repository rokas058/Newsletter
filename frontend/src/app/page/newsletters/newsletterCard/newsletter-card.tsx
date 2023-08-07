import { FC, ReactElement } from 'react';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';

import {
  StyledDateCreated,
  styledIcon,
  StyledIconsContainer,
  StyledNewsletterCard,
} from '@app/page/newsletters/newsletterCard/newsletter-card.styled.ts';

interface NewsletterCardInterface {
  title: string;
  publishedDate: string;
}

export const NewsletterCard: FC<NewsletterCardInterface> = (
  props,
): ReactElement => {
  const { title, publishedDate } = props;

  return (
    <StyledNewsletterCard>
      <h4>{title}</h4>
      <StyledDateCreated>{publishedDate}</StyledDateCreated>

      <StyledIconsContainer>
        <FormOutlined style={styledIcon} />
        <DeleteOutlined style={styledIcon} />
      </StyledIconsContainer>
    </StyledNewsletterCard>
  );
};
