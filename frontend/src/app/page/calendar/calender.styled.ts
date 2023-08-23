import styled from 'styled-components';

export const StyledCalendarContainer = styled.div`
  margin: 30px;
  display: flex;
  justify-content: space-between;
  box-shadow: 10px 10px 20px -14px rgb(0 0 0 / 65%);
`;

export const getEventColor = (eventType: string) => {
  switch (eventType) {
    case 'BIRTHDAY':
      return 'blue';
    case 'HOLIDAY':
      return 'green';
    case 'OTHER':
      return 'purple';
    default:
      return 'black';
  }
};

export const StyledEventListItem = styled.li<{ eventType: string }>`
  color: ${(props) => getEventColor(props.eventType)};
`;
