import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@app/components/header';
import { Footer } from '@app/components/footer/footer.tsx';

const App: React.FC = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export { App };
