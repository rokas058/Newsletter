import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useSessionContext } from '@app/app-context';
import { NavigationService } from '@app/services/navigation-service.ts';
import { ButtonHome } from '@app/components/button-home/button-home.tsx';
import { ButtonDashboard } from '@app/components/button-dashboard/button-dashboard.tsx';

import {
  StyledButtonContainer,
  StyledGreeting,
  StyledHeader,
  StyledHeaderContent,
  StyledHeaderLink,
  StyledLinksAndGreeting,
} from './header.styled.ts';

export const Header = () => {
  const { username } = useSessionContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(NavigationService.LOGOUT_PATH);
  };

  if (!username) {
    return null;
  }

  return (
    <StyledHeader>
      <StyledHeaderContent>
        <StyledLinksAndGreeting>
          <StyledGreeting>Hello, {username}</StyledGreeting>
          {username === 'admin' && (
            <StyledHeaderLink to={NavigationService.USERS_PATH}>
              Users
            </StyledHeaderLink>
          )}
        </StyledLinksAndGreeting>

        <StyledButtonContainer>
          {username === 'admin' && (
            <ButtonDashboard
              onClick={() => {
                navigate(NavigationService.NEWSLETTERS_PATH);
              }}
            >
              DASHBOARD
            </ButtonDashboard>
          )}
          <Button onClick={handleLogout}>Logout</Button>
          <ButtonHome
            onClick={() => {
              navigate(-1);
            }}
          >
            HOME
          </ButtonHome>
        </StyledButtonContainer>
      </StyledHeaderContent>
    </StyledHeader>
  );
};
