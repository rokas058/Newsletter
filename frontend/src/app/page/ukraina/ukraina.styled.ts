import styled from 'styled-components';

import { colorBlack, colorWhite, colorYellow } from '@app/styles/colors.ts';

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
  width: 60%;
  margin: 0 0 80px;
  background-color: ${colorWhite};
  font-size: 25px;
  border: solid 0 ${colorWhite};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledMainParagraph = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  padding: 20px 50px;
`;

export const StyledUkraineImage = styled.img`
  width: 100%;
  border: solid 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const StyledSpan = styled.span`
  font-weight: bold;
  color: #1e90ff;
`;

export const StyledParagraph = styled.p`
  text-align: justify;
  padding: 0 30px;
`;

export const StyledLinkDiv = styled.div`
  width: 48%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const StyledMiniDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px;
`;
export const StyledAnchorElement = styled.a`
  font-weight: bold;
  font-size: 25px;
  text-decoration: none;
  color: ${colorBlack};

  &:visited {
    text-decoration: none;
    color: ${colorBlack};
  }

  &:link {
    text-decoration: none;
    color: ${colorBlack};
  }

  &:active {
    text-decoration: none;
    color: ${colorBlack};
  }

  &:hover {
    color: ${colorYellow};
  }
`;
