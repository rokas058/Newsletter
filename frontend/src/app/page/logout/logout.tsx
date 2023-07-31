import { useEffect } from 'react';

import { AppSpinner } from '@app/components/app-spinner';
import { useLogout } from '@app/page/logout/hooks/useLogout.ts';

export const LogoutPage = () => {
  const { logout } = useLogout();

  useEffect(() => {
    logout();
  }, [logout]);

  return <AppSpinner size="large" />;
};
