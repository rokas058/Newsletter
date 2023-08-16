import { Button, Form, Radio } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';

import {
  StyledBookMovieFrom,
  StyledInput,
  StyledRadioGroup,
} from '@app/page/off-topic/search-movie-book-form/search-movie-book-form.styled.ts';

interface FormValuesProps {
  title: string;
  checkbox: string;
}

export const SearchBookMovieForm = () => {
  const [titleValue, setTitle] = useState<string>('');
  const [checkboxValue, setCheckboxValue] = useState<string>('');

  const handleSubmit = () => {
    const formValues = {
      title: titleValue,
      checkbox: checkboxValue,
    };

    console.log(formValues);
  };

  return (
    <StyledBookMovieFrom
      onFinish={handleSubmit}
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 12 }}
    >
      <Form.Item label="Title" labelAlign="right">
        <StyledInput
          placeholder="Please input movie or book title"
          required={true}
          prefix={<SearchOutlined />}
          name="title"
          value={titleValue}
          onChange={(event) => setTitle(event.target.value)}
        />
      </Form.Item>

      <Form.Item label="Select" labelAlign="right">
        <StyledRadioGroup
          value={checkboxValue}
          onChange={(event) => setCheckboxValue(event.target.value)}
        >
          <Radio value="Book" name="book">
            Book
          </Radio>
          <Radio value="Movie" name="movie">
            Movie
          </Radio>
        </StyledRadioGroup>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </StyledBookMovieFrom>
  );
};
