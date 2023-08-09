import { DatePicker } from 'antd';

import {
  StyledForm,
  StyledFormButton,
  StyledFormInput,
  StyledFormItem,
} from '@app/page/newsletters/form/add-newsletter-form.styled.ts';
import { FormFields } from '@app/typings/form-fields.ts';

interface OwnProps {
  loading?: boolean;
}

// @ts-ignore
export const CREATE_NEWSLETTER_FORM_FIELDS: FormFields<Backend.CreateNewsletterForm> =
  {
    title: 'title',
    publishDate: 'publishDate',
    isPublished: 'isPublished',
  };

export const AddNewsletterForm = (props: OwnProps) => {
  const { loading } = props;

  return (
    <StyledForm name="addNewsletter" autoComplete="off" layout="vertical">
      <StyledFormItem
        label="Newsletter Title"
        name={CREATE_NEWSLETTER_FORM_FIELDS.title}
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
        name={CREATE_NEWSLETTER_FORM_FIELDS.publishDate}
        label="Newsletter Date"
        hasFeedback={true}
        rules={[{ required: true, message: 'Please enter the date' }]}
      >
        <DatePicker format="YYYY-MM-DD" placeholder="2023-08-23" />
      </StyledFormItem>
      <StyledFormButton type="primary" htmlType="submit" loading={loading}>
        Create
      </StyledFormButton>
    </StyledForm>
  );
};
