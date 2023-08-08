import styled from 'styled-components';

import { spacing1 } from '@app/styles/spacing.ts';

export interface ColorButtonProps {
  $backgroundColor: string;
  $color: string;
}

export const StyledButton = styled.button<ColorButtonProps>`
  border-radius: 50px;
  border: none;
  padding: ${spacing1};
  color: ${(props) => props.$color};
  background: ${(props) => props.$backgroundColor};

  & * {
    font-size: 30px;
  }
`;
