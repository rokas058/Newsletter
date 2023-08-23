import { Calendar, Form } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import {
  StyledCalendarContainer,
  StyledEventListItem,
} from 'app/page/calendar/calender.styled.ts';

import { eventsApiService } from '@app/api/service/event-api-service.ts';
import { NotificationService } from '@app/services/notification-service.ts';
import { StyledPageTitleContainer } from '@app/page/newbies/newbies.styled.ts';
import { AddEventForm } from '@app/page/calendar/form/add-event-form.tsx';

export const CalendarPage = () => {
  const [events, setEvents] = useState<Backend.Event[] | null>(null);
  const [formInstance] = Form.useForm();

  const createEvent = async (eventData: Backend.EventForm) => {
    const event = {
      ...eventData,
      startDate: dayjs(eventData.startDate).format('YYYY-MM-DD'),
      endDate: dayjs(eventData.endDate).format('YYYY-MM-DD'),
    };

    try {
      await eventsApiService.createEvent(event);
    } catch (_err) {
      NotificationService.error('Event creation failed');
    }
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

  const dateCellRender = (value: any) => {
    const listData =
      events?.filter(
        (event) =>
          dayjs(event.startDate).isSame(value, 'day') ||
          dayjs(event.endDate).isSame(value, 'day'),
      ) || [];

    return (
      <ul>
        {listData.map((item) => (
          <StyledEventListItem key={item.id} eventType={item.eventType}>
            <span>{item.title}</span>
          </StyledEventListItem>
        ))}
      </ul>
    );
  };

  return (
    <StyledPageTitleContainer>
      <StyledCalendarContainer>
        <Calendar dateCellRender={dateCellRender} />
        <AddEventForm formInstance={formInstance} createEvent={createEvent} />
      </StyledCalendarContainer>
    </StyledPageTitleContainer>
  );
};
