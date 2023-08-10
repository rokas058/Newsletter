import React, { ButtonHTMLAttributes, FC } from 'react';

import { StyledDashboardButton } from '@app/components/button-dashboard/button-dashboard-styled.ts';

interface OwnProps {
  handleOnClick?: () => void;
  children: React.ReactNode;
}

type OmittedAttributes = keyof OwnProps | 'className';

interface ButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'type' | OmittedAttributes
  > {}

type Props = OwnProps & ButtonProps;

export const ButtonDashboard: FC<Props> = (props) => {
  const { handleOnClick, children, ...rest } = props;

  return (
    <StyledDashboardButton onClick={handleOnClick} {...rest}>
      {children}
    </StyledDashboardButton>
  );
};
