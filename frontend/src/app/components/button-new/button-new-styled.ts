import styled from 'styled-components';

import { spacing0 } from '@app/styles/spacing.ts';

export interface ColorButtonProps {
  $backgroundColor: string;
  $color: string;
}

export const StyledButton = styled.button<ColorButtonProps>`
  border-radius: 50%;
  border: 0 solid transparent;
  padding: ${spacing0};
  color: ${(props) => props.$color};
  background: ${(props) => props.$backgroundColor};

  & * {
    font-size: 20px;
  }
`;
