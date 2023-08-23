import styled from 'styled-components';
import { Button, DatePicker, Form, Input } from 'antd';

import { colorPeach } from '@app/styles/colors.ts';

export const StyledForm = styled(Form)`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background-color: ${colorPeach};
`;

export const StyledFormItem = styled(Form.Item)`
  width: 300px;
  margin-right: 20px;
`;
export const StyledFormInput = styled(Input)`
  height: 32px;
`;

export const StyledFormButton = styled(Button)`
  margin-top: 10px;
  width: 100px;
`;

export const StyledDatePickerInput = styled(DatePicker)`
  width: 100%;
`;
