import React from 'react';

import { StyledContainer } from './container.styled.ts';

export type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container = (props: ContainerProps) => (
  <StyledContainer {...props} />
);
