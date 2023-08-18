import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { recommendationsApiService } from '@app/api/service/recommendations-api-service.ts';
import {
  StyledFormContainer,
  StyledMoviesBooksContainer,
  StyledOffTopicContainer,
} from '@app/page/off-topic/off-topic.styled.ts';
import { MovieBookCard } from '@app/page/off-topic/movie-book-card/movie-book-card.tsx';
import { StyledHeading } from '@app/page/off-topic/movie-book-card/movie-book-card.styled.ts';
import { SearchBookMovieForm } from '@app/page/off-topic/search-movie-book-form/search-movie-book-form.tsx';

export const OffTopicPage = () => {
  const { id } = useParams();
  const [allBooks, setAllBooks] = useState([]);
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await recommendationsApiService.getAllBooks(id);

      setAllBooks(data);
    };

    fetchBooks();
  }, [id]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await recommendationsApiService.getAllMovies(id);

      setAllMovies(data);
    };

    fetchMovies();
  }, [id]);

  return (
    <StyledOffTopicContainer>
      <StyledHeading>Books Recommendations</StyledHeading>

      <StyledFormContainer>
        <SearchBookMovieForm setMovies={setAllMovies} setBooks={setAllBooks} />
        <StyledMoviesBooksContainer>
          {allBooks?.map((book: any) => (
            <MovieBookCard
              key={book.entityId}
              author={book.volumeInfo.authors[0]}
              title={book.volumeInfo.title}
              image={book.volumeInfo.imageLinks.thumbnail}
              rating={book.volumeInfo.averageRating}
              // description={book.volumeInfo.description}
              link={book.volumeInfo.canonicalVolumeLink}
            />
          ))}
        </StyledMoviesBooksContainer>
      </StyledFormContainer>

      <StyledHeading>Movies Recommendations</StyledHeading>
      <StyledMoviesBooksContainer>
        {allMovies?.map((movie: any) => (
          <MovieBookCard
            key={movie.entityId}
            author={movie.Director}
            title={movie.Title}
            image={movie.Poster}
            rating={movie.imdbRating}
            // description={movie.Plot}
            link={movie.link}
          />
        ))}
      </StyledMoviesBooksContainer>
    </StyledOffTopicContainer>
  );
};
