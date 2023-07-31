import { useNavigate } from 'react-router-dom';

import { useSessionContext } from '@app/app-context';
import { authenticationApiService } from '@app/api/service';
import { NavigationService } from '@app/services/navigation-service.ts';
import { NotificationService } from '@app/services/notification-service.ts';

export const useLogout = () => {
  const { setUsername } = useSessionContext();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await authenticationApiService.logout();
      setUsername(undefined);
      navigate(NavigationService.LOGIN_PATH);
    } catch (err) {
      NotificationService.error('Could not logout');
    }
  };

  return { logout };
};
