import styled from 'styled-components';
import { Form } from 'antd';

export const StyledLoginForm = styled(Form<Backend.LoginData>)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
