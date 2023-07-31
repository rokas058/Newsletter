import { PropsWithChildren, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useSessionContext } from '@app/app-context';
import { NavigationService } from '@app/services/navigation-service.ts';
import { useAuthenticate } from '@app/hooks/use-authenticate.ts';
import { AppSpinner } from '@app/components/app-spinner';

export const RequireAuth = (props: PropsWithChildren) => {
  const { children } = props;
  const { username } = useSessionContext();
  const { authenticating, authenticate } = useAuthenticate();

  useEffect(() => {
    authenticate();
  }, [authenticate]);

  if (!username && (authenticating === undefined || authenticating)) {
    return <AppSpinner size="large" />;
  }

  if (!username && !authenticating) {
    return <Navigate to={NavigationService.LOGIN_PATH} replace={true} />;
  }

  return children;
};
