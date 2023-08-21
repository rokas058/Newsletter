import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Footer } from '@app/components/footer/footer.tsx';
import { NavigationService } from '@app/services/navigation-service.ts';
import { FooterLogin } from '@app/components/footer/footer-login.tsx';
import { StyledFooterWrapper } from '@app/components/footer/footer.styled.ts';
import { Navbar } from '@app/components/header/navbar.tsx';

const App: React.FC = () => {
  const location = useLocation();

  const loginPage = location.pathname === NavigationService.LOGIN_PATH;

  return (
    <>
      {/* <Header />*/}
      <Navbar />
      <StyledFooterWrapper>
        <Outlet />
        {loginPage ? <FooterLogin /> : <Footer />}
      </StyledFooterWrapper>
    </>
  );
};

export { App };
