import styled from 'styled-components';

import { spacing12 } from '@app/styles/spacing.ts';

export const StyledCardsContainer = styled.div`
  width: 70%;
  padding: 0 ${spacing12} ${spacing12};
  display: flex;
  flex-direction: column;
  gap: ${spacing12};
`;
