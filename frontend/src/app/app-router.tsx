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
import { UsersPage } from '@app/page/users/users-page.tsx';
import { AddUserPage } from '@app/page/add-user/add-user-page.tsx';
import { EditUserPage } from '@app/page/edit-user/edit-user-page.tsx';
import { NewbiesPage } from '@app/page/newbies';
import { NewsPage } from '@app/page/news';
import { VacanciesPage } from '@app/page/vacancies/vacancies.tsx';
import { UkrainaPage } from '@app/page/ukraina';
import { HrPage } from '@app/page/hr';
import { CalendarPage } from '@app/page/calendar';
import { TravelPage } from '@app/page/travel';
import { OffTopicPage } from '@app/page/off-topic';
import { JokesPage } from '@app/page/jokes';
import { NewslettersPage } from '@app/page/newsletters/newsletters.tsx';
import { Protected } from '@app/components/route-protected';

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

        <Route
          path={NavigationService.HOME_PATH_WITH_ID}
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
        <Route element={<Protected />}>
          <Route
            path={NavigationService.NEWSLETTERS_PATH}
            element={
              <RequireAuth>
                <NewslettersPage />
              </RequireAuth>
            }
          />
        </Route>
        <Route
          path={NavigationService.NEWBIES_PATH}
          element={
            <RequireAuth>
              <NewbiesPage />
            </RequireAuth>
          }
        />
        <Route
          path={NavigationService.NEWS_PATH}
          element={
            <RequireAuth>
              <NewsPage />
            </RequireAuth>
          }
        />
        <Route
          path={NavigationService.VACANCIES_PATH}
          element={
            <RequireAuth>
              <VacanciesPage />
            </RequireAuth>
          }
        />
        <Route
          path={NavigationService.UKRAINA_PATH}
          element={
            <RequireAuth>
              <UkrainaPage />
            </RequireAuth>
          }
        />
        <Route
          path={NavigationService.HR_PATH}
          element={
            <RequireAuth>
              <HrPage />
            </RequireAuth>
          }
        />
        <Route
          path={NavigationService.CALENDAR_PATH}
          element={
            <RequireAuth>
              <CalendarPage />
            </RequireAuth>
          }
        />
        <Route
          path={NavigationService.TRAVEL_PATH}
          element={
            <RequireAuth>
              <TravelPage />
            </RequireAuth>
          }
        />
        <Route
          path={NavigationService.OFFTOPIC_PATH}
          element={
            <RequireAuth>
              <OffTopicPage />
            </RequireAuth>
          }
        />
        <Route
          path={NavigationService.JOKES_PATH}
          element={
            <RequireAuth>
              <JokesPage />
            </RequireAuth>
          }
        />
        <Route element={<Protected />}>
          <Route
            path={NavigationService.USERS_PATH}
            element={
              <RequireAuth>
                <UsersPage />
              </RequireAuth>
            }
          />
        </Route>
        <Route
          path={NavigationService.ADD_USER_PATH}
          element={
            <RequireAuth>
              <AddUserPage />
            </RequireAuth>
          }
        />
        <Route
          path={NavigationService.EDIT_USER_PATH}
          element={
            <RequireAuth>
              <EditUserPage />
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
