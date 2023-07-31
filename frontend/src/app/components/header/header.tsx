import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useSessionContext } from '@app/app-context';
import { NavigationService } from '@app/services/navigation-service.ts';

import { StyledHeader, StyledHeaderContent } from './header.styled.ts';

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
        <div>Hello, {username}</div>
        <Button onClick={handleLogout}>Logout</Button>
      </StyledHeaderContent>
    </StyledHeader>
  );
};
