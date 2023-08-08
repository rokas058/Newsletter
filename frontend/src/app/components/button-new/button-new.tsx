import { FC } from 'react';

import { StyledButton } from '@app/components/button-new/button-new-styled.ts';

interface Props {
  handleAddNewForm: () => void;
}

export const ButtonNew: FC<Props> = (props) => {
  const { handleAddNewForm } = props;

  return <StyledButton onClick={() => handleAddNewForm()} />;
};
