import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const WeekDayWrapper = styled.thead`
  color: rgb(117, 117, 117);
  font-size: 14px;
  font-weight: 600;
`;

const BookedDayWrapper = styled.td`
  color: rgb(216, 216, 216);
  border: 1px solid #e4e4e4;
  text-decoration: line-through;
  font-size: 14px;
  text-align: center;
  width: 24px;
  height: 24px;
`;

const VacantDayWrapper = styled.td`
  color: rgb(72, 72, 72);
  border: 1px solid #e4e4e4;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  width: 24px;
  height: 24px;
  :hover {
    background: rgb(216, 216, 216);
  } 
`;

const TableWrapper = styled.table`
  table-layout: 'fixed';

`;

const Days = (props) => {
  const weekDayName = moment.weekdaysShort();
  const weekDays = weekDayName.map(day => <th key={day} className="weekday">{day}</th>);


  const blankDays = [];
  for (let i = 0; i < props.firstDayOfMonth(); i += 1) {
    blankDays.push(<td className="calendar-day empty">&nbsp;</td>);
  }

  const checkIfShouldBeVacant = (day) => {
    let dayToCheck = props.dateObject.format('YYYY-MM-' + day);
    if (day < 10) {
      dayToCheck = props.dateObject.format('YYYY-MM-' + 0 + day);
    }

    if (props.room.bookedDates.indexOf(dayToCheck.toString()) === -1
      && moment(dayToCheck).isAfter(props.currentCheckIn, 'day')
      && moment(dayToCheck).isBefore(props.latestCheckOut, 'day')) {
      return true;
    }
    return false;
  };

  const daysInMonth = [];
  for (let d = 1; d <= props.totalDaysInMonth(); d += 1) {
    if (d < 10) {
      if (checkIfShouldBeVacant(d)) {
        daysInMonth.push(
          <VacantDayWrapper
            key={'0' + d}
            className="calendarDay"
            id="vacant"
            onClick={() => { props.setCheckIn(props.dateObject.format('MM-' + 0 + d + '-YYYY').toString()); }}
          >
            {d}
          </VacantDayWrapper>,
        );
      } else {
        daysInMonth.push(
          <BookedDayWrapper key={'0' + d} className="calendarDay" id="booked">
            {d}
          </BookedDayWrapper>,
        );
      }
    } else if (checkIfShouldBeVacant(d)) {
      daysInMonth.push(
        <VacantDayWrapper
          key={d}
          className="calendarDay"
          id="vacant"
          onClick={() => (props.setCheckIn(props.dateObject.format('MM-' + d + '-YYYY').toString()))}
        >
          {d}
        </VacantDayWrapper>,
      );
    } else {
      daysInMonth.push(
        <BookedDayWrapper key={d} className="calendarDay" id="booked">
          {d}
        </BookedDayWrapper>,
      );
    }
  }

  const totalSlots = [...blankDays, ...daysInMonth];
  const rows = [];
  let cells = [];
  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      rows.push(cells);
    }
  });

  const daysinmonth = rows.map(d => <tr>{d}</tr>);

  return (
    <TableWrapper>
      <WeekDayWrapper><tr>{weekDays}</tr></WeekDayWrapper>
      <tbody>{daysinmonth}</tbody>
    </TableWrapper>
  );
};

export default Days;
