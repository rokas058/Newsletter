import { DatePicker } from 'antd';

import {
  StyledForm,
  StyledFormButton,
  StyledFormInput,
  StyledFormItem,
} from '@app/page/newsletters/form/add-newsletter-form.styled.ts';

export const AddNewsletterForm = () => {
  const onFinish = (value: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newsletter = {
      title: value.title,
      publishDate: value.publishDate.format('YYYY-MM-DD HH:mm:ss'),
      isPublished: false,
    };

    // eslint-disable-next-line no-console
    console.log(newsletter);
  };

  return (
    <StyledForm
      onFinish={onFinish}
      name="addNewsletter"
      autoComplete="off"
      layout="vertical"
    >
      <StyledFormItem
        label="Newsletter Title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please enter the title',
            whitespace: true,
          },
        ]}
        hasFeedback={true}
      >
        <StyledFormInput placeholder="e.g. October Monthly Newsletter" />
      </StyledFormItem>
      <StyledFormItem
        name="publishDate"
        label="Newsletter Date"
        hasFeedback={true}
        rules={[{ required: true, message: 'Please enter the date' }]}
      >
        <DatePicker format="YYYY-MM-DD" placeholder="2023-08-23" />
      </StyledFormItem>
      <StyledFormButton type="primary" htmlType="submit">
        Create
      </StyledFormButton>
    </StyledForm>
  );
};
