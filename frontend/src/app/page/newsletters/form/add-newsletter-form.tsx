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

export const AddNewsletterForm = (props: AddNewsletterFormProps) => {
  const { updateNewsLetters } = props;

  const onFinish = async (value: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        <StyledDatePickerInput format="YYYY-MM-DD" placeholder="2023-08-23" />
      </StyledFormItem>
      <StyledFormButton type="primary" htmlType="submit">
        Create
      </StyledFormButton>
    </StyledForm>
  );
};
