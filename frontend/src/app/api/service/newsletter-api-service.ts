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

// class NewsletterApiService {
//   private static readonly BASE_PATH = '/newsletter';
//   private readonly backendRestService: RestService;
//
//   public constructor() {
//     this.backendRestService = new RestService();
//   }
//
//   public readonly getAllNewsLetters = (): Promise<Backend.Newsletter[]> =>
//     this.backendRestService.get<Backend.Newsletter[]>(
//       NewsletterApiService.BASE_PATH,
//     );
//
// }
//
// const newsLetterApiService = new NewsletterApiService();
//
// export { newsLetterApiService };
