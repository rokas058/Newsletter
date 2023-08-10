import { useForm } from 'antd/es/form/Form';
import { Dayjs } from 'dayjs';

import {
  StyledDatePickerInput,
  StyledForm,
  StyledFormButton,
  StyledFormInput,
  StyledFormItem,
} from '@app/page/newsletters/form/add-newsletter-form.styled.ts';

interface AddNewsletterFormProps {
  isNewsLetterUpdated: boolean;
  updateNewsLetter: (newsletter: Backend.EditNewsletterForm) => void;
  postNewsletter: (value: Backend.CreateNewsletterForm) => void;
  newsletterFormInitialValue: AddNewsletterFormValues;
}

interface AddNewsletterFormValues {
  title: string;
  publishDate: Dayjs;
}

// const ADD_NEWSLETTER_FORM_INITIAL_VALUES = {
// //   title: '',
// //   publishDate: dayjs(),
// // } satisfies AddNewsletterFormValues;

export const AddNewsletterForm = (props: AddNewsletterFormProps) => {
  const {
    isNewsLetterUpdated,
    updateNewsLetter,
    postNewsletter,
    newsletterFormInitialValue,
  } = props;
  const [formInstance] = useForm<AddNewsletterFormValues>();

  return (
    <StyledForm
      onFinish={(values) =>
        isNewsLetterUpdated
          ? updateNewsLetter(values as Backend.EditNewsletterForm)
          : postNewsletter(values as Backend.CreateNewsletterForm)
      }
      name="addNewsletter"
      autoComplete="off"
      layout="vertical"
      form={formInstance}
      initialValues={newsletterFormInitialValue}
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
        <StyledFormInput
          name="title"
          placeholder="e.g. October Monthly Newsletter"
        />
      </StyledFormItem>

      <StyledFormItem
        name="publishDate"
        label="Newsletter Date"
        hasFeedback={true}
        rules={[{ required: true, message: 'Please enter the date' }]}
      >
        <StyledDatePickerInput
          name="publishDate"
          format="YYYY-MM-DD"
          placeholder="2023-08-23"
        />
      </StyledFormItem>

      {isNewsLetterUpdated ? (
        <StyledFormButton type="primary" htmlType="submit">
          Update
        </StyledFormButton>
      ) : (
        <StyledFormButton type="primary" htmlType="submit">
          Create
        </StyledFormButton>
      )}
    </StyledForm>
  );
};
