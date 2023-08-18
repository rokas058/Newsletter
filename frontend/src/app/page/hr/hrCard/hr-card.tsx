import React, { FC, ReactElement } from 'react';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';

import {
  StyledHrCard,
  StyledHrCardContent,
  StyledHrCardText,
  StyledHrCardTitle,
  StyledIconsWrapper,
  StyledImagesContainer,
  StyledTitleTextContainer,
} from '@app/page/hr/hrCard/hr-card.styled.ts';
import { colorDarkBLue, colorYellow } from '@app/styles/colors.ts';
import { ButtonNew } from '@app/components/button-new/button-new.tsx';

interface HrCardInterface {
  title?: string;
  text?: string;
  image?: string | undefined;
  onEdit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const HrCard: FC<HrCardInterface> = (props): ReactElement => {
  const { title, text, image, onEdit, onDelete } = props;

  return (
    <StyledHrCard>
      <StyledHrCardContent>
        <StyledTitleTextContainer>
          <StyledHrCardTitle>
            {title}
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
          </StyledHrCardTitle>
          <StyledHrCardText>{text}</StyledHrCardText>
        </StyledTitleTextContainer>
        <StyledImagesContainer src={image} />
      </StyledHrCardContent>
    </StyledHrCard>
  );
};
