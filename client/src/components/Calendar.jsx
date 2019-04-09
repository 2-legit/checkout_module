import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Months from './Months';
import Days from './Days';

const CalendarWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateObject: moment(),
    };
    this.currentMonth = this.currentMonth.bind(this);
    this.currentYear = this.currentYear.bind(this);
    this.setNextMonth = this.setNextMonth.bind(this);
    this.setPrevMonth = this.setPrevMonth.bind(this);
    this.firstDayOfMonth = this.firstDayOfMonth.bind(this);
    this.totalDaysInMonth = this.totalDaysInMonth.bind(this);
  }


  setNextMonth() {
    const { dateObject } = this.state;
    let newDateObject = Object.assign({}, dateObject);
    newDateObject = moment(dateObject).add(1, 'month');
    this.setState({
      dateObject: newDateObject,
    });
  }

  setPrevMonth() {
    const { dateObject } = this.state;
    let newDateObject = Object.assign({}, dateObject);
    newDateObject = moment(newDateObject).add(-1, 'month');
    this.setState({
      dateObject: newDateObject,
    });
  }

  firstDayOfMonth() {
    const { dateObject } = this.state;
    const newDateObject = dateObject;
    const firstDay = moment(newDateObject).startOf('month').format('d');
    return firstDay;
  }

  totalDaysInMonth() {
    const { dateObject } = this.state;
    return dateObject.daysInMonth();
  }

  currentMonth() {
    const { dateObject } = this.state;
    return dateObject.format('MMMM');
  }

  currentYear() {
    const { dateObject } = this.state;
    return dateObject.format('YYYY');
  }

  render() {
    const {
      setCheckIn, setCheckOut, room, currentCheckIn, latestCheckOut,
    } = this.props;
    const { dateObject } = this.state;

    return (
      <CalendarWrapper>
        <div>
          <Months
            currentMonth={this.currentMonth}
            currentYear={this.currentYear}
            setNextMonth={this.setNextMonth}
            setPrevMonth={this.setPrevMonth}
          />
          <Days
            firstDayOfMonth={this.firstDayOfMonth}
            totalDaysInMonth={this.totalDaysInMonth}
            setCheckIn={setCheckIn}
            setCheckOut={setCheckOut}
            room={room}
            dateObject={dateObject}
            currentCheckIn={currentCheckIn}
            latestCheckOut={latestCheckOut}
          />
        </div>
      </CalendarWrapper>
    );
  }
}

export default Calendar;
