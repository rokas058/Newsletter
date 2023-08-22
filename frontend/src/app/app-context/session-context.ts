import React, { createContext } from 'react';

interface SessionContextProps {
  username?: Backend.Session['username'];
  setUsername: (username: Backend.Session['username']) => void;
  roles: any;
  setRoles: (roles: Backend.Role[] | undefined) => void;
}

const INITIAL_STATE: SessionContextProps = {
  username: undefined,
  setUsername: () => {},
  roles: undefined,
  setRoles: () => {},
};

export const SessionContext: React.Context<SessionContextProps> =
  createContext(INITIAL_STATE);
