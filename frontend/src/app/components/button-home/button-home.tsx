import React, { ButtonHTMLAttributes, FC } from 'react';

import { StyledHomeButton } from '@app/components/button-home/button-home-styled.ts';

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

export const ButtonHome: FC<Props> = (props) => {
  const { handleOnClick, children, ...rest } = props;

  return (
    <StyledHomeButton onClick={handleOnClick} {...rest}>
      {children}
    </StyledHomeButton>
  );
};
