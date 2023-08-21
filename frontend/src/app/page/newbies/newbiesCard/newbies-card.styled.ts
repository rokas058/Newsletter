import styled from 'styled-components';

import { colorWhite } from '@app/styles/colors.ts';
import { spacing0, spacing2 } from '@app/styles/spacing.ts';

export const StyledNewbieCard = styled.div`
  box-shadow: 10px 10px 20px -14px rgb(0 0 0 / 65%);
  background-color: ${colorWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  gap: ${spacing2};
  padding: 20px;
  width: 300px;
  min-width: 250px;
  height: 400px;
  position: relative;
`;

export const StyledNewbieImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const StyledNewbieImage = styled.img`
  height: 150px;
  width: 150px;
  object-fit: cover;
  border-radius: 50%;
`;

export const StyledNewbieContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${spacing2};
`;

export const StyledNewbieName = styled.h6`
  margin: 0;
`;

export const StyledNewbieDescription = styled.p`
  white-space: pre-line;
  margin: 0;
  font-size: 17px;
`;

export const StyledButtonContainer = styled.div`
  position: absolute;
  top: ${spacing0};
  right: 14px;
`;
