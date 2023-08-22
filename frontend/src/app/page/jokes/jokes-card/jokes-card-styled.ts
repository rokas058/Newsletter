import styled from 'styled-components';

import { spacing0, spacing2 } from '@app/styles/spacing.ts';
import { colorWhite } from '@app/styles/colors.ts';

export const StyledSingleJokeContainer = styled.div`
  margin: ${spacing2};
  max-width: 700px;
  background-color: ${colorWhite};
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const StyledJokeParagraph = styled.p`
  word-wrap: break-word;
  white-space: pre-line;
`;
export const StyledIconsWrapper = styled.div`
  display: flex;
  gap: ${spacing0};
`;
