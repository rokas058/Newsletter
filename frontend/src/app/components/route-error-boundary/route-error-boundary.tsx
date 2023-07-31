import { useRouteError } from 'react-router-dom';

import { ErrorPage } from '@app/page/error';

export const RouteErrorBoundary = () => {
  const error = useRouteError();

  // eslint-disable-next-line no-console
  console.error(error);

  return <ErrorPage />;
};
