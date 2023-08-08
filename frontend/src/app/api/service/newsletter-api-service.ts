import axios from 'axios';

const baseUrl = '/api/newsletter';
//
// const config = {
//   headers: {
//     'Content-Type': 'application/json',
//   },
// };

const getAllNewsLetters = async () => {
  const response = await axios.get<Backend.Newsletter[]>(baseUrl);

  return response.data;
};

export const newsLettersApiService = {
  getAllNewsLetters,
};
