import { Navigate } from 'react-router-dom';

import { NavigationService } from '@app/services/navigation-service.ts';
import { useSessionContext } from '@app/app-context';
import { LoginForm } from '@app/page/login/form/login-form.tsx';

import { useLogin } from './hooks/use-login.ts';
import { StyledLoginContainer } from './login.styled.ts';

export const LoginPage = () => {
  const { username } = useSessionContext();
  const { loading, login } = useLogin();

  const handleFinish = async (loginData: Backend.LoginData) => {
    await login(loginData);
  };

  if (username) {
    return <Navigate to={NavigationService.HOME_PATH} replace={true} />;
  }

  return (
    <StyledLoginContainer>
      <LoginForm onFinish={handleFinish} loading={loading} />
    </StyledLoginContainer>
  );
};
