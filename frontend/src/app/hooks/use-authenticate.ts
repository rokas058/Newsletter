import { useState } from 'react';

import { authenticationApiService } from '@app/api/service';
import { useSessionContext } from '@app/app-context';
import { NotificationService } from '@app/services/notification-service.ts';

export const useAuthenticate = () => {
  const { username, setUsername } = useSessionContext();
  const [authenticating, setAuthenticating] = useState<boolean | undefined>(
    undefined,
  );

  const authenticate = async () => {
    if (!authenticating && !username) {
      setAuthenticating(true);
      try {
        const session = await authenticationApiService.getSession();

        setUsername(session.username ?? undefined);
      } catch (error) {
        NotificationService.error(
          'Something went wrong, getting session failed',
        );
      } finally {
        setAuthenticating(false);
      }
    }
  };

  return { authenticating, authenticate };
};
