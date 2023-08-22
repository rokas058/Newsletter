import React, { PropsWithChildren, useState } from 'react';

import { SessionContext } from './session-context.ts';

export const SessionContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [username, setUsername] = useState<Backend.Session['username']>();
  const [roles, setRoles] = useState<Backend.Session['roles']>();

  return (
    <SessionContext.Provider value={{ username, setUsername, roles, setRoles }}>
      {children}
    </SessionContext.Provider>
  );
};
