import React, { FC } from 'react';

import {
  ColorButtonProps,
  StyledButton,
} from '@app/components/button-new/button-new-styled.ts';

interface OwnProps {
  handleOnClick: () => void;
  children: React.ReactNode;
}

type Props = OwnProps & ColorButtonProps;

export const ButtonNew: FC<Props> = (props) => {
  const { handleOnClick, $color, $backgroundColor, children } = props;

  return (
    <StyledButton
      $color={$color}
      $backgroundColor={$backgroundColor}
      onClick={handleOnClick}
    >
      {children}
    </StyledButton>
  );
};
