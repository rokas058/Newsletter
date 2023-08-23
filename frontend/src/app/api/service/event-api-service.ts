import axios from 'axios';

const baseUrl = '/api/event';

const getAllEvents = async () => {
  const endpoint = `${baseUrl}/all`;
  const response = await axios.get<Backend.Event[]>(endpoint);

  return response.data;
};

const getSingleEvent = async (id: string | undefined) => {
  const response = await axios.get<Backend.Event>(`${baseUrl}/${id}`);

  return response.data;
};

const deleteEvent = async (id: number) => {
  const deletedEvent = await axios.delete(`${baseUrl}/${id}`);

  return deletedEvent.data;
};

const createEvent = async (event: Backend.EventForm) => {
  const createdEvent = await axios.post(baseUrl, event);

  return createdEvent.data;
};

const updateEvent = async (
  id: number | null,
  updatedEvent: Backend.EventForm,
) => {
  const editedEvent = await axios.put(`${baseUrl}/${id}`, updatedEvent);

  return editedEvent.data;
};

export const eventsApiService = {
  getAllEvents,
  deleteEvent,
  getSingleEvent,
  createEvent,
  updateEvent,
};
