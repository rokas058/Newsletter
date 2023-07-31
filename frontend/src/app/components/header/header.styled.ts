import styled from 'styled-components';

import { colorPrimary, colorWhite } from '@app/styles/colors.ts';
import { spacing2 } from '@app/styles/spacing.ts';
import { Container } from '@app/components/container/container.tsx';

export const StyledHeader = styled.div`
  height: 48px;
  background: ${colorPrimary};
  color: ${colorWhite};
  padding: ${spacing2};
`;

export const StyledHeaderContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
