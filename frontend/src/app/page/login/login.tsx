import { useSessionContext } from '@app/app-context';
import { LoginForm } from '@app/page/login/form/login-form.tsx';

import { useLogin } from './hooks/use-login.ts';
import { StyledLoginContainer } from './login.styled.ts';

export const LoginPage = () => {
  const { setUsername } = useSessionContext();
  const { loading, login } = useLogin();
  // const navigate = useNavigate();

  const handleFinish = async (loginData: Backend.LoginData) => {
    await login(loginData);
    setUsername(loginData.username);
    localStorage.clear();
  };

  return (
    <StyledLoginContainer>
      <LoginForm onFinish={handleFinish} loading={loading} />
    </StyledLoginContainer>
  );
};
