import React, { FC, ReactElement } from 'react';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';

import { ButtonNew } from '@app/components/button-new/button-new.tsx';
import { colorDarkBLue, colorYellow } from '@app/styles/colors.ts';

import {
  StyledIconsWrapper,
  StyledJokeParagraph,
  StyledSingleJokeContainer,
} from './jokes-card-styled';

interface JokesCardInterface {
  text?: string;
  className?: string;
  onEdit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const JokesCard: FC<JokesCardInterface> = (props): ReactElement => {
  const { text, className, onEdit, onDelete } = props;

  return (
    <StyledSingleJokeContainer className={className}>
      <StyledJokeParagraph>{text}</StyledJokeParagraph>
      <StyledIconsWrapper>
        <ButtonNew
          $backgroundColor={colorYellow}
          $color={colorDarkBLue}
          onClick={onEdit}
        >
          <FormOutlined />
        </ButtonNew>
        <ButtonNew
          $backgroundColor={colorYellow}
          $color={colorDarkBLue}
          onClick={onDelete}
        >
          <DeleteOutlined />
        </ButtonNew>
      </StyledIconsWrapper>
    </StyledSingleJokeContainer>
  );
};
