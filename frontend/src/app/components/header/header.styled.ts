import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colorPeach, colorPrimary } from '@app/styles/colors.ts';
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
  color: ${colorPeach};
  padding: ${spacing2};
`;

export const StyledHeaderContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const StyledHeaderLink = styled(Link)`
  color: ${colorPeach};
  margin-left: ${spacing2};
  text-decoration: none;
`;
