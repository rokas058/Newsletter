import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colorPrimary, colorWhite } from '@app/styles/colors.ts';
import { spacing2, spacing4 } from '@app/styles/spacing.ts';
import { Container } from '@app/components/container/container.tsx';

export const StyledGreeting = styled.div`
  margin-right: ${spacing4};
`;

export const StyledLinksAndGreeting = styled.div`
  display: flex;
`;

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

export const StyledHeaderLink = styled(Link)`
  color: ${colorWhite};
  margin-left: ${spacing2};
`;
