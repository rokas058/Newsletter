import styled from 'styled-components';

import { colorViolet } from '@app/styles/colors.ts';
import { spacing12, spacing4 } from '@app/styles/spacing.ts';
import { StyledContainer } from '@app/components/container/container.styled.ts';

export const StyledRestyledContainer = styled(StyledContainer)`
  margin-top: ${spacing12};
`;
export const StyledNewsletterContainer = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  background-color: ${colorViolet};
  border-radius: 10px;
  padding: ${spacing4};
  overflow: scroll;
`;
