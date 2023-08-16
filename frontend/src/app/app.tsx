import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Header } from '@app/components/header';
import { Footer } from '@app/components/footer/footer.tsx';
import { NavigationService } from '@app/services/navigation-service.ts';
import { FooterLogin } from '@app/components/footer/footer-login.tsx';

const App: React.FC = () => {
  const location = useLocation();

  const loginPage = location.pathname === NavigationService.LOGIN_PATH;

  return (
    <>
      <Header />
      <Outlet />
      {loginPage ? <FooterLogin /> : <Footer />}
    </>
  );
};

export { App };
