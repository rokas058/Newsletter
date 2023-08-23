import { FC, useState } from 'react';
import { Button, Radio } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';

import {
  StyledBookMovieFrom,
  StyledFormItem,
  StyledInput,
  StyledRadioGroup,
} from '@app/page/off-topic/search-movie-book-form/search-movie-book-form.styled.ts';
import { recommendationsApiService } from '@app/api/service/recommendations-api-service.ts';
import { NotificationService } from '@app/services/notification-service.ts';

interface SearchBookMovieFormProps {
  setBooks: (books: any) => void;
  setMovies: (movies: any) => void;
  allBooks: Backend.Volume[];
}

export const SearchBookMovieForm: FC<SearchBookMovieFormProps> = (props) => {
  const [titleValue, setTitle] = useState<string>('');
  const [checkboxValue, setCheckboxValue] = useState<string>('');
  const { id } = useParams();

  const { setBooks, setMovies, allBooks } = props;
  const handleSubmit = async () => {
    const formValues = {
      newsletterId: Number(id),
      title: titleValue,
      mediaType: checkboxValue,
    };

    const isBookTitleAlreadyExists = allBooks.find(
      (book: any) =>
        book.volumeInfo.title.replace(/\s/g, '').toUpperCase() ===
        formValues.title.replace(/\s/g, '').toUpperCase(),
    );

    if (isBookTitleAlreadyExists) {
      return;
    }

    try {
      await recommendationsApiService.postRecommendation(formValues);

      const movies = await recommendationsApiService.getAllMovies(id);
      const books = await recommendationsApiService.getAllBooks(id);

      setMovies(movies);
      setBooks(books);
    } catch (_err) {
      NotificationService.error('Recommendation was not created');
    }
  };

  return (
    <StyledBookMovieFrom onFinish={handleSubmit}>
      <h2>Create Recommendation</h2>
      <StyledFormItem label="Title" labelAlign="right">
        <StyledInput
          placeholder="Please input movie or book title"
          required={true}
          prefix={<SearchOutlined />}
          name="title"
          value={titleValue}
          onChange={(event) => setTitle(event.target.value)}
        />
      </StyledFormItem>

      <StyledFormItem label="Select" labelAlign="right">
        <StyledRadioGroup
          value={checkboxValue}
          onChange={(event) => setCheckboxValue(event.target.value)}
        >
          <Radio value="BOOK" name="book">
            Book
          </Radio>
          <Radio value="FILM" name="movie">
            Movie
          </Radio>
        </StyledRadioGroup>
      </StyledFormItem>

      <StyledFormItem wrapperCol={{ span: 12, offset: 5 }}>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </StyledFormItem>
    </StyledBookMovieFrom>
  );
};
