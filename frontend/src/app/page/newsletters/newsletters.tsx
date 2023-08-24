import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import dayjs, { Dayjs } from 'dayjs';

import { DeletePopUp } from '@app/components/delete-pop-up/delete-pop-up.tsx';
import {
  StyledDatePickerInput,
  StyledForm,
  StyledFormButton,
  StyledFormInput,
  StyledFormItem,
} from '@app/page/newsletters/form/add-newsletter-form.styled.ts';
import { NavigationService } from '@app/services/navigation-service.ts';
import { NewsletterCard } from '@app/page/newsletters/newsletterCard/newsletter-card.tsx';
import {
  StyledNewsletterContainer,
  StyledRestyledContainer,
} from '@app/page/newsletters/newsletters.styled.ts';
import { newsLettersApiService } from '@app/api/service/newsletter-api-service.ts';
import { NotificationService } from '@app/services/notification-service.ts';
import { useNewsletterContext } from '@app/app-context/use-newsletter-context.ts';

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
  const [newsLetterId, setNewsLetterId] = useState<number | null>(null);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const navigate = useNavigate();
  const { newsletter, setNewsletter } = useNewsletterContext();

  // FETCHING ALL NEWSLETTERS FROM DATABASE
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await newsLettersApiService.getAllNewsLetters();

      if (data !== null) {
        setNewsletters(data);
      }
    } catch (error) {
      throw error;
    }
  };

  // DELETE FUNCTIONALITY

  const handlePopUpShow = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => {
    event.stopPropagation();
    setShowPopUp(true);
    setNewsLetterId(id);
  };

  const handlePopUpClose = () => {
    setShowPopUp(false);
  };

  const handleDelete = async (id: number | null) => {
    if (id !== null) {
      await newsLettersApiService.deleteNewsLetter(id);
      const data = await newsLettersApiService.getAllNewsLetters();

      setNewsletters(data);
      setShowPopUp(false);
    }
  };

  // FORM INSTANCE FROM ANT DESIGN
  const [formInstance] = useForm<AddNewsletterFormValues>();

  // EDIT FUNCTIONALITY
  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
    oldTitle: string,
    oldDate: string,
  ) => {
    event.stopPropagation();
    setNewsLetterId(id);
    formInstance.setFieldValue(['title'], oldTitle);
    formInstance.setFieldValue(
      'publishDate',
      dayjs(oldDate, { format: 'YYYY-MM-DD' }),
    );
    setUpdate(true);
  };

  const updateNewsletter = async (values: Backend.EditNewsletterForm) => {
    const newsLetter = {
      title: values.title,
      publishDate: dayjs(values.publishDate).format('YYYY-MM-DD'),
    };

    try {
      await newsLettersApiService.updateNewsletter(newsLetterId, newsLetter);
      const data = await newsLettersApiService.getAllNewsLetters();

      if (data !== null) {
        setNewsletters(data);
      }
      setUpdate(false);
      formInstance.setFieldValue(['title'], '');
      formInstance.setFieldValue(
        ['publishDate'],
        dayjs(new Date(), { format: 'YYYY-MM-DDTHH:mm:ss.SSSZ' }),
      );
    } catch (_err) {
      NotificationService.error('Newsletter update failed');
    }
  };

  // POST FORM DATA TO DATABASE
  const createNewsletter = async (value: Backend.CreateNewsletterForm) => {
    const newsLetter = {
      ...value,
      publishDate: dayjs(value.publishDate).format('YYYY-MM-DD'),
      isPublished: false,
    };

    try {
      await newsLettersApiService.postNewsLetter(newsLetter);
      const data = await newsLettersApiService.getAllNewsLetters();

      setNewsletters(data);
    } catch (_err) {
      NotificationService.error('Newsletter was not created');
    }
  };

  // PUBLISH NEWSLETTER

  const publishNewsletter = async (
    event: React.MouseEvent<HTMLButtonElement>,
    newsletterId: number,
  ) => {
    event.stopPropagation();
    const publishData = {
      isPublished: true,
    };

    if (!newsletter) {
      return;
    }

    try {
      await newsLettersApiService.publishNewsletter(newsletterId, publishData);
      const updatedNewsLetter = await newsLettersApiService.getSingleNewsletter(
        String(newsletterId),
      );

      setNewsletter(updatedNewsLetter);
      fetchData();
      NotificationService.success('Newsletter successfully published!');
    } catch (_err) {
      const errorMessage = newsletter.isPublished
        ? 'Something went wrong'
        : 'This newsletter already published';

      NotificationService.error(errorMessage);
    }
  };

  return (
    <StyledRestyledContainer>
      <h1>Newsletters</h1>
      <StyledNewsletterContainer>
        {showPopUp && (
          <DeletePopUp
            message="Are you sure you want to delete this newsletter?"
            alertType="warning"
            onCancel={handlePopUpClose}
            onDelete={() => handleDelete(newsLetterId)}
          />
        )}
        <div>
          {newsLetters?.map((newsLetter) => (
            <NewsletterCard
              key={newsLetter.id}
              title={newsLetter.title}
              publishedDate={dayjs(newsLetter.publishDate).format('YYYY-MM-DD')}
              isPublished={newsLetter.isPublished}
              onPublish={(event) => publishNewsletter(event, newsLetter.id)}
              onEdit={(event) =>
                handleEdit(
                  event,
                  newsLetter.id,
                  newsLetter.title,
                  newsLetter.publishDate,
                )
              }
              onNavigate={() => {
                navigate(
                  `${NavigationService.HOME_PATH_WITH_ID.replace(
                    ':id',
                    String(newsLetter.id),
                  )}`,
                );
                sessionStorage.setItem('newsletter', String(newsLetter.id));
                sessionStorage.setItem(
                  'pages',
                  JSON.stringify(newsLetter.pages),
                );
              }}
              onDelete={(event) => handlePopUpShow(event, newsLetter.id)}
            />
          ))}
        </div>

        <StyledForm
          onFinish={(values) =>
            isUpdate
              ? updateNewsletter(values as Backend.EditNewsletterForm)
              : createNewsletter(values as Backend.CreateNewsletterForm)
          }
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
