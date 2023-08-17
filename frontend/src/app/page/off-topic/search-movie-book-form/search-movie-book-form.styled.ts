import styled from 'styled-components';
import { Form, Input, Radio } from 'antd';

import { colorYellow } from '@app/styles/colors.ts';
import { spacing0 } from '@app/styles/spacing.ts';

export const StyledBookMovieFrom = styled(Form)`
  width: 700px;
`;

export const StyledRadioGroup = styled(Radio.Group)`
  background-color: ${colorYellow};
  padding: ${spacing0};
  border-radius: 5px;
  width: 100%;
`;

export const StyledInput = styled(Input)`
  border: 3px solid ${colorYellow};

  &:hover {
    border: 3px solid ${colorYellow} !important;
  }
`;
