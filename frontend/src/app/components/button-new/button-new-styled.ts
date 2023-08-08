import styled from 'styled-components';
import { PlusCircleOutlined } from '@ant-design/icons';

import { colorBlack, colorWhite } from '@app/styles/colors.ts';

export const StyledButton = styled(PlusCircleOutlined)`
  background: ${colorWhite};
  border-radius: 25px;
  color: ${colorBlack};
`;
