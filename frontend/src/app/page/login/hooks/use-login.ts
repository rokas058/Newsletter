import { useState } from 'react';

import { authenticationApiService } from '@app/api/service';
import { useSessionContext } from '@app/app-context';
import { NotificationService } from '@app/services/notification-service.ts';

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setUsername } = useSessionContext();

  const login = async (loginData: Backend.LoginData) => {
    setLoading(true);
    try {
      const authenticationResponse =
        await authenticationApiService.authenticate(loginData);

      setUsername(authenticationResponse.username);
    } catch (error) {
      NotificationService.error('Could not login');
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};
