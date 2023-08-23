import React from 'react';

import {
  StyledDatePickerInput,
  StyledForm,
  StyledFormButton,
  StyledFormInput,
  StyledFormItem,
} from '@app/page/calendar/form/add-event-form.styled.ts';

export const ADD_EVENT_FORM_INITIAL_VALUES = {
  title: '',
  startDate: '',
  eventType: 'OTHER',
};

export const ADD_EVENT_FORM_FIELDS = {
  title: 'title',
  startDate: 'startDate',
  eventType: 'eventType',
};

interface AddEventFormProps {
  formInstance: any;
  createEvent: (eventData: Backend.EventForm) => void;
}

export const AddEventForm: React.FC<AddEventFormProps> = ({
  formInstance,
  createEvent,
}) => (
  <StyledForm
    onFinish={(values: unknown) => {
      if (typeof values === 'object' && values !== null) {
        const eventData = values as Backend.EventForm;

        if (eventData.title && eventData.startDate) {
          // Set the startDate as the endDate
          eventData.endDate = eventData.startDate;
          createEvent(eventData);
        }
      }
    }}
    name="addEvent"
    autoComplete="off"
    layout="vertical"
    form={formInstance}
    initialValues={ADD_EVENT_FORM_INITIAL_VALUES}
  >
    <StyledFormItem
      label="Event Title"
      name={ADD_EVENT_FORM_FIELDS.title}
      rules={[
        {
          required: true,
          message: 'Please enter the event title',
          whitespace: true,
        },
      ]}
      hasFeedback={true}
    >
      <StyledFormInput name="title" placeholder="e.g. Summer Event" />
    </StyledFormItem>

    <StyledFormItem
      name={ADD_EVENT_FORM_FIELDS.startDate}
      label="Date"
      hasFeedback={true}
      rules={[{ required: true, message: 'Please select the date' }]}
    >
      <StyledDatePickerInput
        name="startDate"
        format="YYYY-MM-DD"
        placeholder="2023-08-21"
      />
    </StyledFormItem>

    <StyledFormButton type="primary" htmlType="submit">
      Create Event
    </StyledFormButton>
  </StyledForm>
);
