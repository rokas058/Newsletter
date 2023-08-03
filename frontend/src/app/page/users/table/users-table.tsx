import { Table, TableProps } from 'antd';

import { usersColumns, UsersTableActions } from './users-columns.tsx';

interface OwnProps {
  usersTableActions: UsersTableActions;
}

type Props = OwnProps & Omit<TableProps<Backend.User>, 'rowKey' | 'columns'>;

export const UsersTable = (props: Props) => {
  const { usersTableActions, ...rest } = props;

  return (
    <Table {...rest} rowKey="id" columns={usersColumns(usersTableActions)} />
  );
};
