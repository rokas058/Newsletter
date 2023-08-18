import { FC, ReactNode } from 'react';

import { StyledPageTitle } from '@app/components/page-title/page-title.styled.ts';

interface PageTitleProps {
  children: ReactNode;
}

export const PageTitle: FC<PageTitleProps> = ({ children }) => (
  <StyledPageTitle>{children}</StyledPageTitle>
);
