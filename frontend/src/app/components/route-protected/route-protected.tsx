import { Navigate, Outlet } from 'react-router-dom';

import { useSessionContext } from '@app/app-context';
import { NavigationService } from '@app/services/navigation-service.ts';

export const Protected = () => {
  const { username } = useSessionContext();

  if (username === 'admin') {
    return <Outlet />;
  }
  return <Navigate to={NavigationService.HOME_PATH} />;
};
