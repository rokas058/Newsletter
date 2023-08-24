import { Button, Form, FormProps, Input } from 'antd';

import { FormFields } from '@app/typings/form-fields.ts';

import { StyledLoginForm } from './login-form.styled.ts';

interface OwnProps {
  loading?: boolean;
}

type Props = OwnProps &
  Omit<FormProps<Backend.LoginData>, 'name' | 'autoComplete' | 'layout'>;

export const LOGIN_FORM_FIELDS: FormFields<Backend.LoginData> = {
  username: 'username',
  password: 'password',
};

export const LoginForm = (props: Props) => {
  const { loading, ...rest } = props;

  return (
    <StyledLoginForm
      {...rest}
      name="login"
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        label="Vartotojas"
        name={LOGIN_FORM_FIELDS.username}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Slaptažodis"
        name={LOGIN_FORM_FIELDS.password}
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </StyledLoginForm>
  );
};
