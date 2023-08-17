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

  // FETCHING ALL NEWSLETTERS FROM DATABASE
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
    const newsletter = {
      title: values.title,
      publishDate: dayjs(values.publishDate).format('YYYY-MM-DD'),
    };

    try {
      await newsLettersApiService.updateNewsletter(newsLetterId, newsletter);
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
    const newsletter = {
      ...value,
      publishDate: dayjs(value.publishDate).format('YYYY-MM-DD'),
      isPublished: false,
    };

    try {
      await newsLettersApiService.postNewsLetter(newsletter);
      const data = await newsLettersApiService.getAllNewsLetters();

      setNewsletters(data);
    } catch (_err) {
      NotificationService.error('Newsletter was not created');
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
          {newsLetters?.map((newsletter) => (
            <NewsletterCard
              key={newsletter.id}
              title={newsletter.title}
              publishedDate={dayjs(newsletter.publishDate).format('YYYY-MM-DD')}
              isPublished={newsletter.isPublished}
              onEdit={(event) =>
                handleEdit(
                  event,
                  newsletter.id,
                  newsletter.title,
                  newsletter.publishDate,
                )
              }
              onNavigate={() => {
                navigate(
                  `${NavigationService.HOME_PATH_WITH_ID.replace(
                    ':id',
                    String(newsletter.id),
                  )}`,
                );
                sessionStorage.setItem('newsletter', String(newsletter.id));
                sessionStorage.setItem(
                  'pages',
                  JSON.stringify(newsletter.pages),
                );
              }}
              // onDelete={(event) => handleDelete(newsletter.id, event)}
              onDelete={(event) => handlePopUpShow(event, newsletter.id)}
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
