import { generatePath, useNavigate } from 'react-router-dom';

import { useSessionContext } from '@app/app-context';
import { LoginForm } from '@app/page/login/form/login-form.tsx';
import { NavigationService } from '@app/services/navigation-service.ts';
import { newsLettersApiService } from '@app/api/service/newsletter-api-service.ts';

import { useLogin } from './hooks/use-login.ts';
import { StyledLoginContainer } from './login.styled.ts';

export const LoginPage = () => {
  const { setUsername } = useSessionContext();
  const { loading, login } = useLogin();
  const navigate = useNavigate();

  const handleFinish = async (loginData: Backend.LoginData) => {
    await login(loginData);
    setUsername(loginData.username);
    localStorage.clear();
    // navigate(NavigationService.HOME_PATH_WITH_ID);
    fetchData();
  };

  const fetchData = async () => {
    try {
      const data = await newsLettersApiService.getAllNewsLetters();

      if (data !== null) {
        const filterPublished = data.filter(
          (letter) => letter.isPublished === true,
        );

        navigate(
          generatePath(NavigationService.HOME_PATH_WITH_ID, {
            id: String(filterPublished[0].id),
          }),
        );
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <StyledLoginContainer>
      <LoginForm onFinish={handleFinish} loading={loading} />
    </StyledLoginContainer>
  );
};
