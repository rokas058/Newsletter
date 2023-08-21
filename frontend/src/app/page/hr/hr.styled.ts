import styled from 'styled-components';

import { spacing0 } from '@app/styles/spacing.ts';

export const StyledHrContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 35px;
  min-height: 100%;
  justify-content: center;
  max-width: 100%;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: ${spacing0};
`;
