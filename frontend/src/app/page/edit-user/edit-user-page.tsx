import { useEffect } from 'react';
import { Spin } from 'antd';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import { useGetUser } from '@app/page/edit-user/hooks/use-get-user.ts';
import { RequestUtils } from '@app/utils/request-utils.ts';

import { StyledCreateUserPage } from './edit-user-page.styled.ts';
import { useEditUser } from './hooks/use-edit-user.ts';
import { EditUserForm } from './form/edit-user-form.tsx';

export const EditUserPage = () => {
  const { editUser, requestState: editUserRequestState } = useEditUser();
  const { user, getUser, requestState: getUserRequestState } = useGetUser();
  const { userId } = useParams();

  const loading =
    RequestUtils.isRequestPending(editUserRequestState) ||
    RequestUtils.isRequestPending(getUserRequestState);

  useEffect(() => {
    if (userId && !user && !getUserRequestState) {
      getUser(parseInt(userId, 10));
    }
  }, [loading, getUser, user, getUserRequestState, userId]);

  if (!userId) {
    return null;
  }

  const handleSubmit = async (editUserForm: Backend.EditUserForm) => {
    await editUser(parseInt(userId, 10), editUserForm);
  };

  return (
    <StyledCreateUserPage>
      <h1>Edit user</h1>
      {user ? (
        <EditUserForm
          loading={loading}
          onFinish={handleSubmit}
          initialValues={{ ...user, birthday: dayjs(user.birthday) }}
        />
      ) : (
        <Spin spinning={true} />
      )}
    </StyledCreateUserPage>
  );
};
