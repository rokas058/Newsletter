import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { NotificationService } from '@app/services/notification-service.ts';
import { recommendationsApiService } from '@app/api/service/recommendations-api-service.ts';
import {
  StyledCardsContainer,
  StyledFormContainer,
  StyledMoviesBooksContainer,
} from '@app/page/off-topic/off-topic.styled.ts';
import { MovieBookCard } from '@app/page/off-topic/movie-book-card/movie-book-card.tsx';
import { StyledHeading } from '@app/page/off-topic/movie-book-card/movie-book-card.styled.ts';
import { SearchBookMovieForm } from '@app/page/off-topic/search-movie-book-form/search-movie-book-form.tsx';
import { PageLayout } from '@app/components/page-layout/page-layout.tsx';

export const OffTopicPage = () => {
  const { id } = useParams();
  const [allBooks, setAllBooks] = useState<Backend.Volume[]>([]);
  const [allMovies, setAllMovies] = useState<Backend.OmdbMovie[]>([]);

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

  const handleDelete = async (entityNumber: number) => {
    try {
      await recommendationsApiService.deleteRecommendation(entityNumber);
      const movieData = await recommendationsApiService.getAllMovies(id);
      const bookData = await recommendationsApiService.getAllBooks(id);

      setAllMovies(movieData);
      setAllBooks(bookData);
    } catch (_err) {
      NotificationService.error('Recommendation was not deleted');
    }
  };

  return (
    <>
      <PageLayout
        childrenForm={
          <SearchBookMovieForm
            setMovies={setAllMovies}
            setBooks={setAllBooks}
            allBooks={allBooks}
          />
        }
        childrenCard={
          <>
            <StyledCardsContainer>
              <StyledHeading>Books Recommendations</StyledHeading>

              <StyledFormContainer>
                {/* <SearchBookMovieForm*/}
                {/*  setMovies={setAllMovies}*/}
                {/*  setBooks={setAllBooks}*/}
                {/*  allBooks={allBooks}*/}
                {/*/ >*/}
                <StyledMoviesBooksContainer>
                  {allBooks?.map((book: Backend.Volume) => (
                    <MovieBookCard
                      key={book.entityId}
                      author={book?.volumeInfo?.authors?.[0]}
                      title={book?.volumeInfo?.title}
                      image={book?.volumeInfo?.imageLinks?.thumbnail}
                      rating={book?.volumeInfo?.averageRating}
                      link={book?.volumeInfo?.canonicalVolumeLink}
                      onDelete={() => handleDelete(book.entityId!)}
                    />
                  ))}
                </StyledMoviesBooksContainer>
              </StyledFormContainer>

              <StyledHeading>Movies Recommendations</StyledHeading>
              <StyledMoviesBooksContainer>
                {allMovies?.map((movie: Backend.OmdbMovie) => (
                  <MovieBookCard
                    key={movie.entityId}
                    author={movie.Director}
                    title={movie.Title}
                    image={movie.Poster}
                    rating={movie.imdbRating}
                    link={movie.link}
                    onDelete={() => handleDelete(movie.entityId!)}
                  />
                ))}
              </StyledMoviesBooksContainer>
            </StyledCardsContainer>
          </>
        }
      />
    </>
  );
};
