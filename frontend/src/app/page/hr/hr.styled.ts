import styled from 'styled-components';

import { colorViolet } from '@app/styles/colors.ts';

export const StyledHrContainer = styled.div`
  align-items: center;
  background: ${colorViolet};
  display: flex;
  font-size: 35px;
  min-height: 100%;
  justify-content: center;
  max-width: 100%;
  flex-direction: column;
`;
