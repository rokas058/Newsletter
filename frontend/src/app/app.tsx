import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@app/components/header';

const App: React.FC = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export { App };
