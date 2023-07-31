import { useContext } from 'react';

import { SessionContext } from '@app/app-context/session-context.ts';

export const useSessionContext = () => {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error('"useSessionContext" hook used outside provider.');
  }

  return context;
};
