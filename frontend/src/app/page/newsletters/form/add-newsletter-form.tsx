import { useForm } from 'antd/es/form/Form';
import dayjs, { Dayjs } from 'dayjs';

import {
  StyledDatePickerInput,
  StyledForm,
  StyledFormButton,
  StyledFormInput,
  StyledFormItem,
} from '@app/page/newsletters/form/add-newsletter-form.styled.ts';
import { newsLettersApiService } from '@app/api/service/newsletter-api-service.ts';
import { NotificationService } from '@app/services/notification-service.ts';

interface AddNewsletterFormProps {
  updateNewsLetters: (newsletters: Backend.Newsletter[]) => void;
}

interface AddNewsletterFormValues {
  title: string;
  publishDate: Dayjs;
}

const ADD_NEWSLETTER_FORM_INITIAL_VALUES = {
  title: '',
  publishDate: dayjs(),
} satisfies AddNewsletterFormValues;

export const AddNewsletterForm = (props: AddNewsletterFormProps) => {
  const { updateNewsLetters } = props;
  const [formInstance] = useForm<AddNewsletterFormValues>();

  const title = formInstance.getFieldValue('title');
  const date = formInstance.getFieldValue('publishDate');

  const onFinish = async (value: any) => {
    const newsletter = {
      title: value.title,
      publishDate: value.publishDate.format('YYYY-MM-DDTHH:mm:ss'),
      isPublished: false,
    };

    try {
      await newsLettersApiService.postNewsLetter(newsletter);
      const data = await newsLettersApiService.getAllNewsLetters();

      updateNewsLetters(data);
    } catch (_err) {
      NotificationService.error('Newsletter was note created');
    }
  };

  return (
    <StyledForm
      onFinish={onFinish}
      name="addNewsletter"
      autoComplete="off"
      layout="vertical"
      form={formInstance}
      initialValues={ADD_NEWSLETTER_FORM_INITIAL_VALUES}
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
          value={title}
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
          value={date}
        />
      </StyledFormItem>
      <StyledFormButton type="primary" htmlType="submit">
        Create
      </StyledFormButton>
      <StyledFormButton type="primary" htmlType="submit">
        Update
      </StyledFormButton>
    </StyledForm>
  );
};
