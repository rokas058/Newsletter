import styled from 'styled-components';

import {
  colorVibrantGreen,
  colorWhite,
  colorYellow,
} from '@app/styles/colors.ts';
import { StyledFlexRow } from '@app/styles/mixins.ts';
import { spacing0, spacing2 } from '@app/styles/spacing.ts';

export const StyledNewsletterCard = styled.div`
  min-width: 600px;
  height: 70px;
  background-color: ${colorWhite};
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 3px 4px 20px -12px rgb(0 0 0 / 64%);
  gap: ${spacing2};

  &:hover {
    border: 2px solid ${colorYellow};
  }
`;

export const StyledTitleAndDateContainer = styled(StyledFlexRow)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing2};
`;
export const StyledIconsContainer = styled(StyledFlexRow)`
  gap: ${spacing0};
`;

export const StyledDateCreated = styled.h5`
  background-color: ${colorVibrantGreen};
  color: ${colorWhite};
  padding: ${spacing0};
  border-radius: 10px;
`;
