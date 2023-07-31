import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { authenticationApiService } from '@app/api/service';
import { useSessionContext } from '@app/app-context';
import { NavigationService } from '@app/services/navigation-service.ts';
import { NotificationService } from '@app/services/notification-service.ts';

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setUsername } = useSessionContext();
  const navigate = useNavigate();

  const login = async (loginData: Backend.LoginData) => {
    setLoading(true);
    try {
      const authenticationResponse =
        await authenticationApiService.authenticate(loginData);

      navigate(NavigationService.HOME_PATH);
      setUsername(authenticationResponse.username);
    } catch (error) {
      NotificationService.error('Could not login');
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};
