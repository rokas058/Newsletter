import React, { createContext } from 'react';

interface SessionContextProps {
  username?: Backend.Session['username'];
  setUsername: (username: Backend.Session['username']) => void;
}

const INITIAL_STATE: SessionContextProps = {
  username: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function,no-empty-function
  setUsername: () => {},
};

export const SessionContext: React.Context<SessionContextProps> =
  createContext(INITIAL_STATE);
