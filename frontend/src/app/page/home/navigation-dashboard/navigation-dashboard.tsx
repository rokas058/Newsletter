import { useParams } from 'react-router-dom';

import {
  StyledDashboardContainer,
  StyledFlexColumnContainer,
  StyledFlexRowContainer,
} from '@app/page/home/navigation-dashboard/navigation-dashboard.styled.ts';
import { NavigationCard } from '@app/page/home/navigation-card/navigation-card.tsx';
// Icons
import hrFrontImage from '@app/assets/icons/ikona-hr-frontas.png';
import headDepartmentImage from '@app/assets/icons/vadovu skyriu naujienos.png';
import travelStoriesImage from '@app/assets/icons/apzvalgystes.png';
import newTeamMembersImage from '@app/assets/icons/naujokai.png';
import offTopicImage from '@app/assets/icons/off-topic.png';
import vacancyImage from '@app/assets/icons/vacancy.png';
import ukraineImage from '@app/assets/icons/ukraine.png';
import calendarImage from '@app/assets/icons/calendar.png';
import jokeSectionImage from '@app/assets/icons/anekdotai.png';
// Routes
import { NavigationService } from '@app/services/navigation-service.ts';

export const NavigationDashboard = () => {
  const { id } = useParams();

  return (
    <StyledDashboardContainer>
      <StyledFlexColumnContainer>
        <StyledFlexRowContainer>
          <NavigationCard
            title="Hr frontas"
            iconImage={hrFrontImage}
            navigationURL={NavigationService.HR_PATH.replace(':id', String(id))}
          />
          <NavigationCard
            title="Vadovų Skyriaus Naujienos"
            iconImage={headDepartmentImage}
            navigationURL={NavigationService.NEWS_PATH.replace(
              ':id',
              String(id),
            )}
          />
          <NavigationCard
            title="Apžvalgystės"
            iconImage={travelStoriesImage}
            navigationURL={NavigationService.TRAVEL_PATH.replace(
              ':id',
              String(id),
            )}
          />
        </StyledFlexRowContainer>

        <StyledFlexRowContainer>
          <NavigationCard
            title="Naujokai"
            iconImage={newTeamMembersImage}
            navigationURL={NavigationService.NEWBIES_PATH.replace(
              ':id',
              String(id),
            )}
          />
          <NavigationCard
            title="Ukraina"
            iconImage={ukraineImage}
            navigationURL={NavigationService.UKRAINA_PATH.replace(
              ':id',
              String(id),
            )}
          />
          <NavigationCard
            title="Atviros pozicijos"
            iconImage={vacancyImage}
            navigationURL={NavigationService.VACANCIES_PATH.replace(
              ':id',
              String(id),
            )}
          />
        </StyledFlexRowContainer>

        <StyledFlexRowContainer>
          <NavigationCard
            title="Off topic"
            iconImage={offTopicImage}
            navigationURL={NavigationService.OFFTOPIC_PATH.replace(
              ':id',
              String(id),
            )}
          />
          <NavigationCard
            title="Kalendorius"
            iconImage={calendarImage}
            navigationURL={NavigationService.CALENDAR_PATH.replace(
              ':id',
              String(id),
            )}
          />
          <NavigationCard
            title="Mediniai bajeriai"
            iconImage={jokeSectionImage}
            navigationURL={NavigationService.JOKES_PATH.replace(
              ':id',
              String(id),
            )}
          />
        </StyledFlexRowContainer>
      </StyledFlexColumnContainer>
    </StyledDashboardContainer>
  );
};
