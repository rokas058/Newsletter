import styled from 'styled-components';

import { spacing12, spacing4 } from '@app/styles/spacing.ts';

export const StyledCalendarContainer = styled.div`
  margin: ${spacing4};
  margin-bottom: ${spacing12};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 10px 10px 20px -14px rgb(0 0 0 / 65%);
`;

export const StyledMonthName = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 16px;
  padding-top: 16px;
  background: white;
  text-align: center;
  font-family: 'Tietoevry Sans 1', serif;
`;
export const getEventColor = (eventType: string) => {
  switch (eventType) {
    case 'BIRTHDAY':
      return '#CC497A';
    case 'HOLIDAY':
      return '#66A586';
    case 'OTHER':
      return '#664E88';
    default:
      return 'black';
  }
};
export const StyledEventList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

export const StyledEventListItem = styled.li<{ eventType: string }>`
  color: ${(props) => getEventColor(props.eventType)};
  font-family: 'Tietoevry Sans 1', serif;
`;
