import { useEffect } from 'react';
import { Button, Modal } from 'antd';
import { generatePath, useNavigate } from 'react-router-dom';

import { useGetUsers } from '@app/page/users/hooks/use-get-users.ts';
import { useDeleteUser } from '@app/page/users/hooks/use-delete-user.ts';
import { NavigationService } from '@app/services/navigation-service.ts';
import { RequestUtils } from '@app/utils/request-utils.ts';

import { StyledUsersPage } from './users-page.styled.ts';
import { UsersTable } from './table/users-table.tsx';

export const UsersPage = () => {
  const { requestState: getUsersRequestState, users, getUsers } = useGetUsers();
  const { loading: deletingUser, deleteUser } = useDeleteUser();
  const navigate = useNavigate();

  const loading =
    !RequestUtils.isRequestCompleted(getUsersRequestState) || deletingUser;

  useEffect(() => {
    if (!getUsersRequestState && !users) {
      getUsers();
    }
  }, [getUsersRequestState, loading, users, getUsers]);

  const handleUserEdit = (userId: number) => {
    navigate(generatePath(NavigationService.EDIT_USER_PATH, { userId }));
  };

  const handleUserDelete = async (id: number) => {
    Modal.confirm({
      content: 'Are you sure you want to delete this user?',
      okText: 'Yes',
      cancelText: 'No',
      okButtonProps: {
        danger: true,
      },
      onOk: async () => {
        if (!loading) {
          await deleteUser(id);
          await getUsers();
        }
      },
    });
  };

  const handleClickAddNew = () => {
    navigate(NavigationService.ADD_USER_PATH);
  };

  return (
    <StyledUsersPage>
      <h1>Users</h1>
      <UsersTable
        loading={loading}
        dataSource={users}
        usersTableActions={{
          onEdit: handleUserEdit,
          onDelete: handleUserDelete,
        }}
      />
      <Button type="primary" onClick={handleClickAddNew}>
        + Add new
      </Button>
    </StyledUsersPage>
  );
};
