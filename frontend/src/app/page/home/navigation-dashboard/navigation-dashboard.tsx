import { useParams } from 'react-router-dom';

import hrImage from '@app/assets/dashboard-icons/hr.jpg';
import newsImage from '@app/assets/dashboard-icons/news.jpg';
import travelImage from '@app/assets/dashboard-icons/travel.png';
import newbiesImage from '@app/assets/dashboard-icons/newbie.jpg';
import offTopicImage from '@app/assets/dashboard-icons/off-topic.jpg';
import vacanciesImage from '@app/assets/dashboard-icons/vacancies.jpg';
import ukraineImage from '@app/assets/dashboard-icons/ukraine.jpg';
import calendarImage from '@app/assets/dashboard-icons/calendar.jpg';
import jokesImage from '@app/assets/dashboard-icons/jokes.jpg';
import {
  StyledColorContainer,
  StyledDashboardContainer,
  StyledFlexRowContainer,
} from '@app/page/home/navigation-dashboard/navigation-dashboard.styled.ts';
import { NavigationService } from '@app/services/navigation-service.ts';
import { SocialMediaIcons } from '@app/components/social-media-card/social-media-card.tsx';
import { NavigationCard } from '@app/page/home/navigation-card/navigation-card.tsx';

export const NavigationDashboard = () => {
  const { id } = useParams();

  return (
    <>
      <SocialMediaIcons />
      <StyledColorContainer>
        <StyledDashboardContainer>
          <StyledFlexRowContainer $height="320px">
            <NavigationCard
              width="100%"
              imageSrc={hrImage}
              imageSrcName="hr-front-news"
              heading="hr frontas"
              description="Įvairios aktualijos Tietoevry HR pasaulyje."
              navigationUrl={NavigationService.HR_PATH.replace(
                ':id',
                String(id),
              )}
            />

            <NavigationCard
              width="60%"
              imageSrc={newsImage}
              imageSrcName="head-department-news"
              heading="vadovų skyriaus naujienos"
              description="Tietoevry vadovai dalinasi įvairiomis naujienomis."
              navigationUrl={NavigationService.NEWS_PATH.replace(
                ':id',
                String(id),
              )}
            />

            <NavigationCard
              width="60%"
              imageSrc={travelImage}
              imageSrcName="travel-stories"
              heading="apžvalgystės"
              description="Tietoevry kolegos dalinasi kelionių įspūdžiais."
              navigationUrl={NavigationService.TRAVEL_PATH.replace(
                ':id',
                String(id),
              )}
            />
          </StyledFlexRowContainer>
          <StyledFlexRowContainer $height="300px">
            <NavigationCard
              width="100%"
              imageSrc={newbiesImage}
              imageSrcName="new-hires"
              heading="naujokai"
              description="Nepraeikit pro šalį, naujieji Tietoevry kolegos nori susipažinti!"
              navigationUrl={NavigationService.NEWBIES_PATH.replace(
                ':id',
                String(id),
              )}
            />

            <NavigationCard
              width="100%"
              imageSrc={offTopicImage}
              imageSrcName="off-topic"
              heading="off-topic"
              description="Tietoevry kolegos rekomenduoja geriausius matytus filmus ir skaitytas knygas."
              navigationUrl={NavigationService.OFFTOPIC_PATH.replace(
                ':id',
                String(id),
              )}
            />
            <NavigationCard
              width="100%"
              imageSrc={vacanciesImage}
              imageSrcName="vacancies"
              heading="atviros pozicijos"
              description="Rekomenduok kolegą ir pelnyk amžiną šlovę!
(Ir bonusą iki 2500 Eur bruto!)"
              navigationUrl={NavigationService.VACANCIES_PATH.replace(
                ':id',
                String(id),
              )}
            />
          </StyledFlexRowContainer>
          <StyledFlexRowContainer $height="250px">
            <NavigationCard
              width="100%"
              imageSrc={ukraineImage}
              imageSrcName="ukraina"
              heading="ukraina"
              description="Support"
              navigationUrl={NavigationService.UKRAINA_PATH.replace(
                ':id',
                String(id),
              )}
            />
            <NavigationCard
              width="70%"
              imageSrc={calendarImage}
              imageSrcName="Kalendorius"
              heading="Kalendorius"
              description="Mėnesio renginiai ir gimadieniai"
              navigationUrl={NavigationService.CALENDAR_PATH.replace(
                ':id',
                String(id),
              )}
            />

            <NavigationCard
              width="30%"
              imageSrc={jokesImage}
              imageSrcName="mediniai bajeriai"
              heading="plankio mediniai"
              description="N-18"
              navigationUrl={NavigationService.JOKES_PATH.replace(
                ':id',
                String(id),
              )}
            />
          </StyledFlexRowContainer>
        </StyledDashboardContainer>
      </StyledColorContainer>
    </>
  );
};
