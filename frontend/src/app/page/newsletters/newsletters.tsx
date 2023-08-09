import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { NavigationService } from '@app/services/navigation-service.ts';
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

  console.log(newsLetters);

  const navigate = useNavigate();

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

  const handleDelete = async (
    id: number,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    try {
      await newsLettersApiService.deleteNewsLetter(id);
    } catch (error) {
      throw error;
    }
  };

  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
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
            isPublished={newsletter.isPublished}
            onEdit={handleEdit}
            onDelete={(event) => handleDelete(newsletter.id, event)}
            onNavigate={() =>
              navigate(
                `${NavigationService.HOME_PATH.replace(
                  ':id',
                  String(newsletter.id),
                )}`,
              )
            }
          />
        ))}
      </StyledNewsletterContainer>
    </StyledRestyledContainer>
  );
};
