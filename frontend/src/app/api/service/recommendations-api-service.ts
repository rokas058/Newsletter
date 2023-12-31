import axios from 'axios';

const baseUrl = '/api/recommendations';

interface RecommendationProps {
  newsletterId: number;
  title: string;
  mediaType: string;
}

const getAllBooks = async (
  newsLetterId: string | undefined,
): Promise<Backend.Volume[]> => {
  const response = await axios.get<Backend.Volume[]>(
    `${baseUrl}/books/${newsLetterId}`,
  );

  return response.data;
};

const getAllMovies = async (
  newsLetterId: string | undefined,
): Promise<Backend.OmdbMovie[]> => {
  const response = await axios.get<Backend.OmdbMovie[]>(
    `${baseUrl}/films/${newsLetterId}`,
  );

  return response.data;
};

const postRecommendation = async (recommendation: RecommendationProps) => {
  const response = await axios.post(baseUrl, recommendation);

  return response.data;
};

const deleteRecommendation = async (entityId: number) => {
  const deletedNewsletter = await axios.delete(`${baseUrl}/${entityId}`);

  return deletedNewsletter.data;
};

export const recommendationsApiService = {
  getAllBooks,
  getAllMovies,
  deleteRecommendation,
  postRecommendation,
};
