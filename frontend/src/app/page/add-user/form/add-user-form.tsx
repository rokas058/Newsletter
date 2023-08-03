import { Button, Form, FormProps, Input, Select } from 'antd';

import { FormFields } from '@app/typings/form-fields.ts';

interface OwnProps {
  loading?: boolean;
}

type Props = OwnProps &
  Omit<FormProps<Backend.CreateUserForm>, 'name' | 'autoComplete' | 'layout'>;

export const CREATE_USER_FORM_FIELDS: FormFields<Backend.CreateUserForm> = {
  firstName: 'firstName',
  lastName: 'lastName',
  roles: 'roles',
  username: 'username',
  email: 'email',
};

const roleSelectValues: Record<Backend.Role, string> = {
  ADMIN: 'Administrator',
  USER: 'User',
};

export const AddUserForm = (props: Props) => {
  const { loading, ...rest } = props;

  return (
    <Form {...rest} name="addUser" autoComplete="off" layout="vertical">
      <Form.Item
        label="First name"
        name={CREATE_USER_FORM_FIELDS.firstName}
        rules={[
          { required: true, message: 'Please enter the users first name!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last name"
        name={CREATE_USER_FORM_FIELDS.lastName}
        rules={[
          { required: true, message: 'Please enter the users last name!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Roles"
        name={CREATE_USER_FORM_FIELDS.roles}
        rules={[
          { required: true, message: 'Please select at least one role!' },
        ]}
      >
        <Select
          mode="multiple"
          options={Object.entries(roleSelectValues).map(([value, label]) => ({
            value,
            label,
          }))}
        />
      </Form.Item>

      <Form.Item
        label="Username"
        name={CREATE_USER_FORM_FIELDS.username}
        rules={[{ required: true, message: 'Please enter a username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name={CREATE_USER_FORM_FIELDS.email}
        rules={[{ required: true, message: 'Please enter an email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Create user
        </Button>
      </Form.Item>
    </Form>
  );
};
