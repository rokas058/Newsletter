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

export const NavigationDashboard = () => (
  <StyledDashboardContainer>
    <StyledFlexColumnContainer>
      <StyledFlexRowContainer>
        <NavigationCard title="Hr frontas" iconImage={hrFrontImage} />
        <NavigationCard
          title="Vadovų Skyriaus Naujienos"
          iconImage={headDepartmentImage}
        />
        <NavigationCard title="Apžvalgystės" iconImage={travelStoriesImage} />
      </StyledFlexRowContainer>

      <StyledFlexRowContainer>
        <NavigationCard title="Naujokai" iconImage={newTeamMembersImage} />
        <NavigationCard title="Ukraina" iconImage={ukraineImage} />
        <NavigationCard title="Atviros pozicijos" iconImage={vacancyImage} />
      </StyledFlexRowContainer>

      <StyledFlexRowContainer>
        <NavigationCard title="Off topic" iconImage={offTopicImage} />
        <NavigationCard title="Kalendorius" iconImage={calendarImage} />
        <NavigationCard title="Anekdotai" iconImage={jokeSectionImage} />
      </StyledFlexRowContainer>
    </StyledFlexColumnContainer>
  </StyledDashboardContainer>
);
