import { ColumnsType } from 'antd/es/table';

import {
  StyledDeleteIcon,
  StyledEditIcon,
} from '@app/page/users/table/users-columns.styled.ts';

export interface UsersTableActions {
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const usersColumns = (
  tableActions: UsersTableActions,
): ColumnsType<Backend.User> => [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'First name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Birthday',
    dataIndex: 'birthday',
    key: 'birthday',
  },
  {
    title: 'Confirm Birthday',
    dataIndex: 'confirmBirthday',
    key: 'confirm_birthday',
    render: (confirmBirthday: boolean) => (confirmBirthday ? 'Taip' : 'Ne'),
  },
  {
    title: 'Email',
    key: 'email',
    dataIndex: 'email',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Roles',
    dataIndex: 'roles',
    key: 'roles',
    render: (roles: Backend.Role[]) => roles.join(', '),
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (_, user) => (
      <>
        <StyledEditIcon onClick={() => tableActions.onEdit(user.id)} />
        {user.roles[0] === 'USER' && (
          <StyledDeleteIcon
            onClick={() => {
              tableActions.onDelete(user.id);
            }}
          />
        )}
      </>
    ),
  },
];
