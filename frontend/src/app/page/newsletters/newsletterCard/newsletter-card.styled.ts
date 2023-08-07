import styled from 'styled-components';

import {
  colorVibrantGreen,
  colorWhite,
  colorYellow,
} from '@app/styles/colors.ts';
import { StyledFlexRow } from '@app/styles/mixins.ts';
import { spacing0, spacing2 } from '@app/styles/spacing.ts';
import { font20 } from '@app/styles/fonts.ts';

export const StyledNewsletterCard = styled.div`
  width: 60%;
  height: 70px;
  background-color: ${colorWhite};
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 3px 4px 20px -12px rgb(0 0 0 / 64%);

  &:hover {
    border: 2px solid ${colorYellow};
  }
`;

export const StyledIconsContainer = styled(StyledFlexRow)`
  gap: ${spacing2};
  padding: ${spacing2};
`;

export const StyledDateCreated = styled.h5`
  background-color: ${colorVibrantGreen};
  color: ${colorWhite};
  padding: ${spacing0};
  border-radius: 10px;
`;

// INLINE STYLING
export const styledIcon = {
  fontSize: `${font20}`,
  backgroundColor: `${colorYellow}`,
  padding: `${spacing0}`,
  borderRadius: '50%',
};
