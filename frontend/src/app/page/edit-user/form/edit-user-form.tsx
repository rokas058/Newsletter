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
  Omit<FormProps<Backend.EditUserForm>, 'name' | 'autoComplete' | 'layout'>;

export const EDIT_USER_FORM_FIELDS: FormFields<Backend.EditUserForm> = {
  firstName: 'firstName',
  lastName: 'lastName',
  roles: 'roles',
  username: 'username',
  email: 'email',
  birthday: 'birthday',
  confirmBirthday: 'confirmBirthday',
};

const roleSelectValues: Record<Backend.Role, string> = {
  ADMIN: 'Administrator',
  USER: 'User',
};

export const EditUserForm = (props: Props) => {
  const { loading, ...rest } = props;

  return (
    <Form {...rest} name="editUser" autoComplete="off" layout="vertical">
      <Form.Item
        label="First name"
        name={EDIT_USER_FORM_FIELDS.firstName}
        rules={[
          { required: true, message: 'Please enter the users first name!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last name"
        name={EDIT_USER_FORM_FIELDS.lastName}
        rules={[
          { required: true, message: 'Please enter the users last name!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Roles"
        name={EDIT_USER_FORM_FIELDS.roles}
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
        name={EDIT_USER_FORM_FIELDS.username}
        rules={[{ required: true, message: 'Please enter a username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name={EDIT_USER_FORM_FIELDS.email}
        rules={[{ required: true, message: 'Please enter an email!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Birthday"
        name={EDIT_USER_FORM_FIELDS.birthday}
        rules={[{ required: true, message: 'Please select a birthdate!' }]}
      >
        <DatePicker placeholder="2023-08-21" format="YYYY-MM-DD" />
      </Form.Item>
      <Form.Item
        name={EDIT_USER_FORM_FIELDS.confirmBirthday}
        valuePropName="checked"
      >
        <Checkbox>Make my birthday public</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Edit user
        </Button>
      </Form.Item>
    </Form>
  );
};
