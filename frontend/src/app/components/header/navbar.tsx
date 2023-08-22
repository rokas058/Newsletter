import { HomeOutlined, ReadOutlined, UserOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import logo from '@app/assets/logo/logoWhite.png';
import { NavigationService } from '@app/services/navigation-service.ts';
import { newsLettersApiService } from '@app/api/service/newsletter-api-service.ts';

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
  const [publishedNewsletter, setPublishedNewsletter] =
    useState<Backend.Newsletter[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await newsLettersApiService.getAllNewsLetters();

        if (data !== null) {
          const filterPublished = data.filter(
            (letter) => letter.isPublished === true,
          );

          setPublishedNewsletter(filterPublished);
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
            <StyledIcon to={NavigationService.USERS_PATH}>
              <UserOutlined />
              <StyledIconText>Users</StyledIconText>
            </StyledIcon>
            <StyledIcon to={NavigationService.NEWSLETTERS_PATH}>
              <ReadOutlined />
              <StyledIconText>Newsletters</StyledIconText>
            </StyledIcon>
            <StyledIcon
              to={NavigationService.HOME_PATH_WITH_ID.replace(
                ':id',
                String(publishedNewsletter![0].id),
              )}
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
