import React from 'react';
import moment from 'moment';
import styled from 'styled-components';


const BookedDayWrapper = styled.td`
  color: grey;
  border: 1px solid #e4e4e4;
  text-decoration: line-through;
  font-size: 14px;
  text-align: center;
  font-weight: 600;
`;

const VacantDayWrapper = styled.td`
  color: rgb(72, 72, 72);
  border: 1px solid #e4e4e4;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
`;

const TableWrapper = styled.table`
  table-layout: 'fixed';
`;

const CalendarWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MonthWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  color: rgb(72, 72, 72) !important;
  font-size: 18px !important;
  text-align: center !important;
  font-weight: bold;
`;

const WeekDayWrapper = styled.thead`
  color: rgb(117, 117, 117);
  font-size: 14px;
  font-weight: 600;
`;


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateObject: moment(),
    };
  }

  firstDayOfMonth() {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject).startOf('month').format('d');
    return firstDay;
  }

  totalDaysInMonth() {
    return this.state.dateObject.daysInMonth();
  }

  currentMonth() {
    return this.state.dateObject.format('MMMM');
  }

  currentYear() {
    return this.state.dateObject.format('YYYY');
  }

  setNextMonth() {
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).add(1, 'month');
    this.setState({
      dateObject: dateObject,
    });
  }
  setPrevMonth() {
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).add(-1, 'month');
    this.setState({
      dateObject: dateObject,
    });
  }

  setDay(data) {
    console.log(this.state.dateObject.format('YY-MM-' + data).toString());
  }

  render() {
    const weekDayName = moment.weekdaysShort();
    const weekDays = weekDayName.map(day => {
      return <th key={day} className='weekday'>{day}
      </th>;
    });

    const blankDays = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blankDays.push(<td className="calendar-day empty">{""}</td>,
      );
    }

    const daysInMonth = [];
    for (let d = 1; d <= this.totalDaysInMonth(); d++) {

      if (d < 10) {
        if (this.props.room.bookedDates.indexOf(this.state.dateObject.format('YYYY-MM-' + 0 + d).toString()) === -1) {
          daysInMonth.push(
            <VacantDayWrapper><td key={'0' + d} className="calendarDay" id='vacant' onClick={e => { this.props.setCheckIn(this.state.dateObject.format( 'MM-' + 0 + d +'-YYYY').toString()) }}>
              {d}
            </td></VacantDayWrapper>,
          );
        } else {
          daysInMonth.push(
            <BookedDayWrapper><td key={'0' + d} className="calendarDay" id='booked' onClick={e => { this.setDay('0' + d) }}>
              {d}
            </td></BookedDayWrapper>,
          );
        }
      } else {
        if (this.props.room.bookedDates.indexOf(this.state.dateObject.format('YYYY-MM-' + d).toString()) === -1) {
          daysInMonth.push(
            <VacantDayWrapper><td key={d} className="calendarDay" id='vacant' onClick={e => { this.props.setCheckIn(this.state.dateObject.format( 'MM-' + d +'-YYYY').toString()) }}>
              {d}
            </td></VacantDayWrapper>,
          );
        } else {
          daysInMonth.push(
            <BookedDayWrapper><td key={d} className="calendarDay" id='booked' onClick={e => { this.setDay(d.toString()) }}>
              {d}
            </td></BookedDayWrapper>,
          );
        }
      }
    }

    let totalSlots = [...blankDays, ...daysInMonth];
    let rows = [];
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
    let daysinmonth = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });
    return (
      <CalendarWrapper><div>
        <MonthWrapper><button onClick={e => { this.setPrevMonth() }}>prev</button><div>{this.currentMonth()} {this.currentYear()}</div><button onClick={e => { this.setNextMonth() }}>next</button></MonthWrapper>
        <TableWrapper>
          <WeekDayWrapper><tr>{weekDays}</tr></WeekDayWrapper>
          <tbody>{daysinmonth}</tbody>
        </TableWrapper>
      </div>
      </CalendarWrapper>
    );
  }
}

export default Calendar;
