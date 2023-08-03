import { useNavigate } from 'react-router-dom';

import { NavigationService } from '@app/services/navigation-service.ts';

import { AddUserForm } from './form/add-user-form.tsx';
import { StyledCreateUserPage } from './add-user-page.styled.ts';
import { useAddUser } from './hooks/use-add-user.ts';

export const AddUserPage = () => {
  const { addUser, loading } = useAddUser();
  const navigate = useNavigate();

  const handleSubmit = async (createUserForm: Backend.CreateUserForm) => {
    await addUser(createUserForm);
    navigate(NavigationService.USERS_PATH);
  };

  return (
    <StyledCreateUserPage>
      <h1>Create user</h1>
      <AddUserForm loading={loading} onFinish={handleSubmit} />
    </StyledCreateUserPage>
  );
};
