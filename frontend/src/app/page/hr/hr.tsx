import { HrForm } from '@app/page/hr/form/HrForm.tsx';
import { HrCard } from '@app/page/hr/hrCard/hr-card.tsx';
import { StyledHrContainer, StyledHrHeader } from '@app/page/hr/hr.styled.ts';
import logoWhite from '@app/components/footer/logo/logoWhite.png';

export const HrPage = () => (
  <>
    <StyledHrHeader>HR FRONTAS</StyledHrHeader>
    <StyledHrContainer>
      <HrCard
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        title="Lorem Ipsum"
        image={logoWhite}
      />
      <HrForm />
    </StyledHrContainer>
  </>
);
