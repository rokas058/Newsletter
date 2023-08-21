import { FC } from 'react';
import { DeleteOutlined } from '@ant-design/icons';

import {
  StyledButtonContainer,
  StyledNewbieCard,
  StyledNewbieContent,
  StyledNewbieDescription,
  StyledNewbieImage,
  StyledNewbieImageContainer,
  StyledNewbieName,
} from '@app/page/newbies/newbiesCard/newbies-card.styled.ts';
import { ButtonNew } from '@app/components/button-new/button-new.tsx';
import { colorBlack, colorYellow } from '@app/styles/colors.ts';

interface NewbiesCardProps {
  title: string;
  description: string;
  image?: string;
  onDelete?: () => void;
}

export const NewbiesCard: FC<NewbiesCardProps> = (props) => {
  const { title, description, image, onDelete } = props;

  return (
    <StyledNewbieCard>
      <StyledButtonContainer>
        <ButtonNew
          $backgroundColor={colorYellow}
          $color={colorBlack}
          onClick={onDelete}
        >
          <DeleteOutlined />
        </ButtonNew>
      </StyledButtonContainer>

      <StyledNewbieImageContainer>
        <StyledNewbieImage src={image} alt="newbies-images" />
      </StyledNewbieImageContainer>
      <StyledNewbieContent>
        <StyledNewbieName>{title}</StyledNewbieName>
        <StyledNewbieDescription>{description}</StyledNewbieDescription>
      </StyledNewbieContent>
    </StyledNewbieCard>
  );
};
