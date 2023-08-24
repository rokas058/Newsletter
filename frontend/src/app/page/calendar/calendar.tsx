import { Calendar, Form } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import Moment from 'moment';

import {
  StyledButton,
  StyledCalendarContainer,
  StyledCalendarPage,
  StyledEventList,
  StyledEventListItem,
  StyledMonthName,
} from '@app/page/calendar/calender.styled.ts';
import { eventsApiService } from '@app/api/service/event-api-service.ts';
import { NotificationService } from '@app/services/notification-service.ts';
import { AddEventForm } from '@app/page/calendar/form/add-event-form.tsx';

export const CalendarPage = () => {
  const [events, setEvents] = useState<Backend.Event[] | null>(null);
  const [formInstance] = Form.useForm();
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const createEvent = async (eventData: Backend.EventForm) => {
    const event = {
      ...eventData,
      startDate: dayjs(eventData.startDate).format('YYYY-MM-DD'),
      endDate: dayjs(eventData.endDate).format('YYYY-MM-DD'),
    };

    try {
      await eventsApiService.createEvent(event);
      const updatedEvents = await eventsApiService.getAllEvents();

      setEvents(updatedEvents);
      formInstance.resetFields();
    } catch (_err) {
      NotificationService.error('Event creation failed');
    }
  };

  const onPanelChange = (value: any) => {
    setCurrentMonth(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await eventsApiService.getAllEvents();

        if (data !== null) {
          setEvents(data);
        }
      } catch (error) {
        NotificationService.error('Failed to fetch events');
      }
    };

    fetchData();
  }, []);

  const getEventTypeEmoji = (eventType: string) => {
    switch (eventType) {
      case 'BIRTHDAY':
        return '🍰';
      case 'HOLIDAY':
        return '🏖️';
      case 'OTHER':
        return '🍹';
      default:
        return '❔';
    }
  };
  const dateCellRender = (value: any) => {
    const listData =
      events?.filter(
        (event) =>
          dayjs(event.startDate).isSame(value, 'day') ||
          dayjs(event.endDate).isSame(value, 'day'),
      ) || [];

    return (
      <StyledEventList>
        {listData.map((item) => (
          <StyledEventListItem key={item.id} eventType={item.eventType}>
            <span>
              {getEventTypeEmoji(item.eventType)} {item.title}
            </span>
          </StyledEventListItem>
        ))}
      </StyledEventList>
    );
  };

  const headerRender = ({
    value,
    onChange,
  }: {
    value: Moment;
    onChange: (value: Moment) => void;
  }) => (
    <div>
      <StyledButton
        type="primary"
        onClick={() => onChange(value.subtract(1, 'month'))}
      >
        Prev
      </StyledButton>
      <StyledButton
        type="primary"
        onClick={() => onChange(value.add(1, 'month'))}
      >
        Next
      </StyledButton>
    </div>
  );

  return (
    <StyledCalendarPage>
      <StyledCalendarContainer>
        <StyledMonthName>{currentMonth.format('MMMM YYYY')}</StyledMonthName>
        <Calendar
          cellRender={dateCellRender}
          onPanelChange={onPanelChange}
          headerRender={headerRender}
        />
        <AddEventForm formInstance={formInstance} createEvent={createEvent} />
      </StyledCalendarContainer>
    </StyledCalendarPage>
  );
};
