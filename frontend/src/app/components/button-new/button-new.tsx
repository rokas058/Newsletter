import React, { ButtonHTMLAttributes, FC } from 'react';

import {
  ColorButtonProps,
  StyledButton,
} from '@app/components/button-new/button-new-styled.ts';

interface OwnProps {
  handleOnClick?: () => void;
  children: React.ReactNode;
}

type OmittedAttributes = keyof OwnProps | 'className';

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, OmittedAttributes> {}

type Props = OwnProps & ColorButtonProps & ButtonProps;

export const ButtonNew: FC<Props> = (props) => {
  const { $color, $backgroundColor, children, ...rest } = props;
  const role = sessionStorage.getItem('role');

  return (
    <>
      {role === 'ADMIN' && (
        <StyledButton
          $color={$color}
          $backgroundColor={$backgroundColor}
          {...rest}
        >
          {children}
        </StyledButton>
      )}
    </>
  );
};
