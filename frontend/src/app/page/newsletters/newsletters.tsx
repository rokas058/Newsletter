import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import dayjs, { Dayjs } from 'dayjs';

import { NavigationService } from '@app/services/navigation-service.ts';
import { NewsletterCard } from '@app/page/newsletters/newsletterCard/newsletter-card.tsx';
import {
  StyledNewsletterContainer,
  StyledRestyledContainer,
} from '@app/page/newsletters/newsletters.styled.ts';
import { newsLettersApiService } from '@app/api/service/newsletter-api-service.ts';
import {
  StyledDatePickerInput,
  StyledForm,
  StyledFormButton,
  StyledFormInput,
  StyledFormItem,
} from '@app/page/newsletters/form/add-newsletter-form.styled.ts';
import { NotificationService } from '@app/services/notification-service.ts';

interface AddNewsletterFormValues {
  title: string;
  publishDate: Dayjs;
}

const ADD_NEWSLETTER_FORM_INITIAL_VALUES = {
  title: '',
  publishDate: dayjs(),
} satisfies AddNewsletterFormValues;

export const NewslettersPage = () => {
  const [newsLetters, setNewsletters] = useState<Backend.Newsletter[] | null>(
    null,
  );
  const [isUpdate, setUpdate] = useState<boolean>(false);
  const navigate = useNavigate();

  // FETCHIN ALL NEWSLETTERS FROM DATABASE
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await newsLetterApiService.getAllNewsLetters();
        const data = await newsLettersApiService.getAllNewsLetters();

        if (data !== null) {
          setNewsletters(data);
        }
      } catch (error) {
        throw error;
      }
    };

    fetchData();
  }, []);

  // DELETE FUNCTIONALITY
  const handleDelete = async (
    id: number,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    try {
      await newsLettersApiService.deleteNewsLetter(id);
      const data = await newsLettersApiService.getAllNewsLetters();

      setNewsletters(data);
    } catch (error) {
      throw error;
    }
  };

  // FORM INSTANCE FROM ANT DESIGN
  const [formInstance] = useForm<AddNewsletterFormValues>();
  const title = formInstance.getFieldValue('title');
  const date = formInstance.getFieldValue('publishDate'); // object

  // EDIT FUNCTIONALITY
  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement>,
    oldTitle: string,
    oldDate: string,
  ) => {
    event.stopPropagation();
    formInstance.setFieldValue(['title'], oldTitle);
    formInstance.setFieldValue(
      'publishDate',
      dayjs(oldDate, { format: 'YYYY-MM-DDTHH:mm:ss.SSSZ' }),
    );
    setUpdate(true);
  };

  // POSTIN FORM DATA TO DATABASE
  const onFinish = async (value: any) => {
    const newsletter = {
      title: value.title,
      publishDate: value.publishDate.format('YYYY-MM-DDTHH:mm:ss'),
      isPublished: false,
    };

    try {
      await newsLettersApiService.postNewsLetter(newsletter);
      const data = await newsLettersApiService.getAllNewsLetters();

      setNewsletters(data);
    } catch (_err) {
      NotificationService.error('Newsletter was note created');
    }
  };

  return (
    <StyledRestyledContainer>
      <h1>Newsletters</h1>
      <StyledNewsletterContainer>
        <div>
          {newsLetters?.map((newsletter) => (
            <NewsletterCard
              key={newsletter.id}
              title={newsletter.title}
              publishedDate={new Date(newsletter.publishDate).toString()}
              isPublished={newsletter.isPublished}
              onEdit={(event) =>
                handleEdit(event, newsletter.title, newsletter.publishDate)
              }
              onDelete={(event) => handleDelete(newsletter.id, event)}
              onNavigate={() =>
                navigate(
                  `${NavigationService.HOME_PATH.replace(
                    ':id',
                    String(newsletter.id),
                  )}`,
                )
              }
            />
          ))}
        </div>
        {/* <AddNewsletterForm updateNewsLetters={setNewsletters} />*/}

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

          {isUpdate ? (
            <StyledFormButton type="primary" htmlType="submit">
              Update
            </StyledFormButton>
          ) : (
            <StyledFormButton type="primary" htmlType="submit">
              Create
            </StyledFormButton>
          )}
        </StyledForm>
      </StyledNewsletterContainer>
    </StyledRestyledContainer>
  );
};
