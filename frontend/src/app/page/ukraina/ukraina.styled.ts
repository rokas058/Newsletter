import styled from 'styled-components';

import { colorWhite, colorYellow } from '@app/styles/colors.ts';

export const StyledPageContainer = styled.div`
  background: linear-gradient(to bottom, #1e90ff 50%, ${colorYellow} 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeader = styled.h1`
  color: ${colorYellow};
  font-size: 70px;
  text-align: center;
  margin-bottom: 10px;
`;

export const StyledContentContainer = styled.div`
  width: 90%;
  margin: 0 0 30px;
  background-color: ${colorWhite};
  padding: 10px 25px;
  font-size: 25px;
  border: solid 2px ${colorWhite};
  border-radius: 15px;
`;

export const StyledMainParagraph = styled.p``;

export const StyledInsideContentContainer = styled.div``;

export const StyledSpan = styled.span`
  font-weight: bold;
`;

export const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: justify;
  min-height: 600px;
  gap: 20px;
`;

export const StyledListItem = styled.li`
  max-width: 45%;
`;

export const StyledAnchorElement = styled.a`
  font-weight: bold;
  font-size: 35px;
  text-decoration: none;

  &:visited {
    text-decoration: none;
  }

  &:link {
    text-decoration: none;
  }

  &:active {
    text-decoration: none;
  }
`;
