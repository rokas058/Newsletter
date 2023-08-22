import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  FormProps,
  Input,
  Select,
} from 'antd';

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
  birthday: 'birthday',
  confirmBirthday: 'confirmBirthday',
  password: 'password',
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
        label="Password"
        name={CREATE_USER_FORM_FIELDS.password}
        rules={[
          { required: true, message: 'Please enter a password!' },
          { min: 6, message: 'Password should be at least 6 characters!' },
        ]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>
      <Form.Item
        label="Email"
        name={CREATE_USER_FORM_FIELDS.email}
        rules={[{ required: true, message: 'Please enter an email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Birthday"
        name={CREATE_USER_FORM_FIELDS.birthday}
        rules={[{ required: true, message: 'Please select a birthdate!' }]}
      >
        <DatePicker format="YYYY-MM-DD" />
      </Form.Item>

      <Form.Item
        name={CREATE_USER_FORM_FIELDS.confirmBirthday}
        valuePropName="checked"
      >
        <Checkbox>Make my birthday public</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Create user
        </Button>
      </Form.Item>
    </Form>
  );
};
