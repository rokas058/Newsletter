import { FC } from 'react';
import { DeleteOutlined } from '@ant-design/icons';

import { ButtonNew } from '@app/components/button-new/button-new.tsx';
import {
  StyledAuthor,
  StyledButtonContainer,
  StyledContent,
  StyledDescription,
  StyledImage,
  StyledMoviesBookCard,
  StyledNavLink,
  StyledRate,
  StyledTitle,
} from '@app/page/off-topic/movie-book-card/movie-book-card.styled.ts';
import { colorBlack, colorYellow } from '@app/styles/colors.ts';

interface MovieBookCardProps {
  author?: string;
  title?: string;
  image?: string;
  rating?: number;
  description?: string;
  link?: string;
  onDelete?: () => void;
}

export const MovieBookCard: FC<MovieBookCardProps> = (props) => {
  const { author, title, image, rating, description, link, onDelete } = props;

  return (
    <StyledMoviesBookCard>
      <StyledButtonContainer>
        <ButtonNew
          $backgroundColor={colorYellow}
          $color={colorBlack}
          onClick={onDelete}
        >
          <DeleteOutlined />
        </ButtonNew>
      </StyledButtonContainer>
      <StyledNavLink to={link!}>
        <StyledImage src={image} />
      </StyledNavLink>

      <StyledContent>
        <StyledAuthor>{author}</StyledAuthor>
        <StyledTitle>{title}</StyledTitle>
        <div>
          <StyledRate value={rating} disabled={true} />
        </div>
        <StyledDescription>{description}</StyledDescription>
      </StyledContent>
    </StyledMoviesBookCard>
  );
};
