import React, { FC } from 'react';

import { StyledHomeButton } from '@app/components/button-home/button-home-styled.ts';

interface OwnProps {
  handleOnClick?: () => void;
  children: React.ReactNode;
}

type Props = OwnProps;

export const ButtonHome: FC<Props> = (props) => {
  const { children, ...rest } = props;

  return <StyledHomeButton {...rest}>{children}</StyledHomeButton>;
};
