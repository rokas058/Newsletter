import styled from 'styled-components';

import { spacing12, spacing4 } from '@app/styles/spacing.ts';
import { colorViolet } from '@app/styles/colors.ts';

export const StyledOffTopicContainer = styled.div`
  width: 100%;
  height: auto;
  margin: ${spacing4} 0;
`;

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const StyledMoviesBooksContainer = styled.div`
  max-width: 800px;
  height: 500px;
  padding: ${spacing4};
  display: flex;
  gap: ${spacing4};
  background-color: ${colorViolet}40;
  overflow-x: scroll;
`;

export const StyledCardsContainer = styled.div`
  padding: 0 ${spacing12} ${spacing12};
`;
