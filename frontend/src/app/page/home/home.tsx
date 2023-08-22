import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Container } from '@app/components/container/container.tsx';
import { Banner } from '@app/page/home/banner/banner.tsx';
import { NavigationDashboard } from '@app/page/home/navigation-dashboard/navigation-dashboard.tsx';
import { newsLettersApiService } from '@app/api/service/newsletter-api-service.ts';

export const HomePage = () => {
  const { id } = useParams();
  const [newsletter, setNewsletter] = useState<Backend.Newsletter | undefined>(
    undefined,
  );
  const [newsLetters, setNewsletters] = useState<Backend.Newsletter[] | null>(
    null,
  );

  console.log(newsletter);
  console.log(newsLetters);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await newsLettersApiService.getSingleNewsletter(id);

        if (data !== null) {
          setNewsletter(data);
        }
      } catch (error) {
        throw error;
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
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

  return (
    <>
      <Container />
      <Banner
        id={Number(id)}
        isPublished={newsletter?.isPublished === true}
        setNewsLetter={setNewsletter}
      />
      <NavigationDashboard />
    </>
  );
};
