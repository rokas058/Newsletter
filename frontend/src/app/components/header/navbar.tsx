import { HomeOutlined, ReadOutlined, UserOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import logo from '@app/assets/logo/logoWhite.png';
import { NavigationService } from '@app/services/navigation-service.ts';
import { newsLettersApiService } from '@app/api/service/newsletter-api-service.ts';
import { useNewsletterContext } from '@app/app-context/use-newsletter-context.ts';

import {
  StyledDisplayNone,
  StyledIcon,
  StyledIconContainer,
  StyledIconText,
  StyledLogo,
  StyledNavbarContainer,
} from './navbar.styled.ts';

export const Navbar = () => {
  const location = useLocation();

  const { newsletter, setNewsletter } = useNewsletterContext();
  const role = sessionStorage.getItem('role');

  console.log(newsletter);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await newsLettersApiService.getAllNewsLetters();

        if (data !== null) {
          const filterPublished = data.filter(
            (letter) => letter.isPublished === true,
          );

          setNewsletter(filterPublished[0]);
        }
      } catch (error) {
        throw error;
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {location.pathname === NavigationService.LOGIN_PATH ? (
        <StyledDisplayNone />
      ) : (
        <StyledNavbarContainer>
          <StyledLogo src={logo} alt="logo" />
          <StyledIconContainer>
            {role === 'ADMIN' && (
              <StyledIcon to={NavigationService.USERS_PATH}>
                <UserOutlined />
                <StyledIconText>Users</StyledIconText>
              </StyledIcon>
            )}
            {role === 'ADMIN' && (
              <StyledIcon to={NavigationService.NEWSLETTERS_PATH}>
                <ReadOutlined />
                <StyledIconText>Newsletters</StyledIconText>
              </StyledIcon>
            )}
            <StyledIcon
              to={
                newsletter === undefined
                  ? NavigationService.LOGIN_PATH
                  : NavigationService.HOME_PATH_WITH_ID.replace(
                      ':id',
                      String(newsletter.id),
                    )
              }
            >
              <HomeOutlined />
              <StyledIconText>Home</StyledIconText>
            </StyledIcon>
            <StyledIcon to={NavigationService.LOGOUT_PATH}>
              <StyledIconText>Logout</StyledIconText>
            </StyledIcon>
          </StyledIconContainer>
        </StyledNavbarContainer>
      )}
    </>
  );
};
