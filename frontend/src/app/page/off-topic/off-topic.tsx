import {
  StyledMoviesBooksContainer,
  StyledOffTopicContainer,
} from '@app/page/off-topic/off-topic.styled.ts';
import { MovieBookCard } from '@app/page/off-topic/movie-book-card/movie-book-card.tsx';
import { StyledHeading } from '@app/page/off-topic/movie-book-card/movie-book-card.styled.ts';

export const OffTopicPage = () => (
  <StyledOffTopicContainer>
    <StyledHeading>Books Recommendations</StyledHeading>
    <StyledMoviesBooksContainer>
      <MovieBookCard
        author="Author"
        title="Title"
        image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1673398288i/62589532.jpg"
        rating={5}
        description="Amazing book. I was reading, and reading, and reading..."
        link="https://www.goodreads.com/book/show/62589532-call-the-canaries-home"
      />
      <MovieBookCard
        author="Madeline Miller"
        title="The Song of Achilles"
        image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1357177533i/13623848.jpg"
        rating={5}
        description="Amazing book. I was reading, and reading, and reading..."
        link="https://www.goodreads.com/book/show/13623848-the-song-of-achilles?ref=nav_sb_ss_1_12"
      />
    </StyledMoviesBooksContainer>

    <StyledHeading>Movies Recommendations</StyledHeading>
    <StyledMoviesBooksContainer>
      <MovieBookCard
        author="Christopher Nolan"
        title="Oppenheimer"
        image="https://th.bing.com/th/id/R.5282bb222d86cee9aa3a628186868714?rik=fBE0gktbVG43GA&pid=ImgRaw&r=0"
        rating={5}
        description="Amazing Movie."
        link="https://www.imdb.com/title/tt15398776/?ref_=hm_top_tt_i_1"
      />
      <MovieBookCard
        author="Greta Gerwing"
        title="Barbie"
        image="https://www.comingsoon.net/wp-content/uploads/sites/3/2023/08/Barbie-Highest-Grossing-Movie.jpg?resize=101"
        rating={5}
        description="Amazing Movie."
        link="https://www.imdb.com/title/tt1517268/?ref_=hm_top_tt_i_2"
      />
    </StyledMoviesBooksContainer>
  </StyledOffTopicContainer>
);
