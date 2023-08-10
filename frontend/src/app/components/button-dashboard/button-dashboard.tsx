import React, { FC } from 'react';

import { StyledDashboardButton } from '@app/components/button-dashboard/button-dashboard-styled.ts';

interface OwnProps {
  handleOnClick?: () => void;
  children: React.ReactNode;
}

type Props = OwnProps;

export const ButtonDashboard: FC<Props> = (props) => {
  const { children, ...rest } = props;

  return <StyledDashboardButton {...rest}>{children}</StyledDashboardButton>;
};
