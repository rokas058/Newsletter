import axios from 'axios';

const baseUrl = '/api/newsletter';

const getAllNewsLetters = async () => {
  const response = await axios.get<Backend.Newsletter[]>(baseUrl);

  return response.data;
};

const getSingleNewsletter = async (id: string | undefined) => {
  const response = await axios.get<Backend.Newsletter>(`/api/newsletter/${id}`);

  return response.data;
};

const deleteNewsLetter = async (id: number) => {
  const deletedNewsletter = await axios.delete(`/api/newsletter/${id}`);

  return deletedNewsletter.data;
};

const postNewsLetter = async (newsLetter: Backend.CreateNewsletterForm) => {
  const createNewsLetter = await axios.post(baseUrl, newsLetter);

  return createNewsLetter.data;
};

export const newsLettersApiService = {
  getAllNewsLetters,
  deleteNewsLetter,
  getSingleNewsletter,
  postNewsLetter,
};
