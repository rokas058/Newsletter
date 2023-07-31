import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';

import { RouteErrorBoundary } from '@app/components/route-error-boundary';
import { RequireAuth } from '@app/components/require-auth';
import { HomePage } from '@app/page/home';
import { ErrorPage } from '@app/page/error';
import { LoginPage } from '@app/page/login';
import { LogoutPage } from '@app/page/logout';
import { NavigationService } from '@app/services/navigation-service.ts';
import { App } from '@app/app.tsx';

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route errorElement={<RouteErrorBoundary />}>
        <Route path={NavigationService.LOGIN_PATH} element={<LoginPage />} />
        <Route
          path={NavigationService.HOME_PATH}
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
        <Route path={NavigationService.ERROR_PATH} element={<ErrorPage />} />
        <Route
          path={NavigationService.LOGOUT_PATH}
          element={
            <RequireAuth>
              <LogoutPage />
            </RequireAuth>
          }
        />
        <Route
          path="*"
          index={true}
          element={<Navigate to={NavigationService.HOME_PATH} replace={true} />}
        />
      </Route>
    </Route>,
  ),
);
