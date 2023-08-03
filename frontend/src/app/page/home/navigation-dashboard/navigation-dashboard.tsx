import {
  StyledDashboardContainer,
  StyledFlexColumnContainer,
  StyledFlexRowContainer,
} from '@app/page/home/navigation-dashboard/navigation-dashboard.styled.ts';
import { StyledNavigationCard } from '@app/page/home/navigation-card/navigation-card.styled.ts';

export const NavigationDashboard = () => (
  <StyledDashboardContainer>
    <StyledFlexColumnContainer>
      <StyledFlexRowContainer>
        <StyledNavigationCard />
        <StyledNavigationCard />
        <StyledNavigationCard />
      </StyledFlexRowContainer>

      <StyledFlexRowContainer>
        <StyledNavigationCard />
        <StyledNavigationCard />
        <StyledNavigationCard />
      </StyledFlexRowContainer>

      <StyledFlexRowContainer>
        <StyledNavigationCard />
        <StyledNavigationCard />
        <StyledNavigationCard />
      </StyledFlexRowContainer>
    </StyledFlexColumnContainer>
  </StyledDashboardContainer>
);
