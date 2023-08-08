import { useEffect, useState } from 'react';

import { NewsletterCard } from '@app/page/newsletters/newsletterCard/newsletter-card.tsx';
import {
  StyledNewsletterContainer,
  StyledRestyledContainer,
} from '@app/page/newsletters/newsletters.styled.ts';
import { newsLettersApiService } from '@app/api/service/newsletter-api-service.ts';

export const NewslettersPage = () => {
  const [newsLetters, setNewsletters] = useState<Backend.Newsletter[] | null>(
    null,
  );

  // const navigate = useNavigate();

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

  const handleDelete = async (id: number) => {
    try {
      await newsLettersApiService.deleteNewsLetter(id);

      console.log('Deleted newsletter:', id);
    } catch (error) {
      throw error;
    }
  };

  return (
    <StyledRestyledContainer>
      <h1>Newsletters</h1>
      <StyledNewsletterContainer>
        {newsLetters?.map((newsletter) => (
          <NewsletterCard
            key={newsletter.id}
            title="Title"
            publishedDate={new Date(newsletter.publishDate).toString()}
            onDelete={() => handleDelete(newsletter.id)}
            // onClick={() =>
            //   navigate(
            //     `${NavigationService.HOME_PATH.replace(
            //       ':id',
            //       String(newsletter.id),
            //     )}`,
            //   )
            // }
          />
        ))}
      </StyledNewsletterContainer>
    </StyledRestyledContainer>
  );
};
