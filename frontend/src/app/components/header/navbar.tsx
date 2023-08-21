import {
  HomeOutlined,
  LogoutOutlined,
  ReadOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

import logo from '@app/assets/logo/logoWhite.png';
import { NavigationService } from '@app/services/navigation-service.ts';

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
            <StyledIcon to={NavigationService.HOME_PATH}>
              <HomeOutlined />
              <StyledIconText>Home</StyledIconText>
            </StyledIcon>
            <StyledIcon to={NavigationService.LOGOUT_PATH}>
              <StyledIconText>Logout</StyledIconText>
              <LogoutOutlined />
            </StyledIcon>
          </StyledIconContainer>
        </StyledNavbarContainer>
      )}
    </>
  );
};
