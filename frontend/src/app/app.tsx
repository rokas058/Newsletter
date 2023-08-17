import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Header } from '@app/components/header';
import { Footer } from '@app/components/footer/footer.tsx';
import { NavigationService } from '@app/services/navigation-service.ts';
import { FooterLogin } from '@app/components/footer/footer-login.tsx';
import { StyledFooterWrapper } from '@app/components/footer/footer.styled.ts';

const App: React.FC = () => {
  const location = useLocation();

  const loginPage = location.pathname === NavigationService.LOGIN_PATH;

  return (
    <>
      <Header />
      <StyledFooterWrapper>
        <Outlet />
        {loginPage ? <FooterLogin /> : <Footer />}
      </StyledFooterWrapper>
    </>
  );
};

export { App };
