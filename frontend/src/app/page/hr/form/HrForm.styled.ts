import styled from 'styled-components';
import { Form } from 'antd';

import { spacing4 } from '@app/styles/spacing.ts';

export const HrFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: ${spacing4};
`;

export const StyledFormItem = styled(Form.Item)`
  width: 300px;
`;

export const StyledButtonContainer = styled(Form.Item)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
